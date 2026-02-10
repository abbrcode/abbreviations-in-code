import { readFileSync, writeFileSync } from 'fs';

import type { Abbr } from '../types/abbrs.ts';
import type { Langs, Translation } from '../types/i18n.ts';

// Lists i18n files
const abbrs = JSON.parse(readFileSync('./data/abbrs/.json', 'utf-8')) as Abbr[];
const langs = JSON.parse(readFileSync('./data/i18n/langs.json')) as Langs;
const degrees = new Map<string, string>(
	JSON.parse(readFileSync('./data/degrees/index.json', 'utf-8')),
);

for (const lang of langs) {
	const translations =
		lang === 'en'
			? null
			: (JSON.parse(
					readFileSync(`./data/i18n/${lang}/translations.json`, 'utf-8'),
				) as Translation[]);

	const alphabet = 'abcdefghijklmnopqrstuvwxyz';

	let template = readFileSync(`./data/i18n/${lang}/template.md`, 'utf-8') as string;

	/* degrees */
	template = template
		.replace('{{ degree.recommended }}', degrees.get('recommended')!)
		.replace('{{ degree.contextSensitive }}', degrees.get('context sensitive')!)
		.replace('{{ degree.notRecommended }}', degrees.get('not recommended')!);

	// Translations
	template = template.replace(
		'{{ translations }}',
		langs
			.filter((l) => lang !== l)
			.map((l) => `[${l}](./i18n/${l}.md)`)
			.join('\n'),
	);

	// List
	let list = '';

	for (const letter of alphabet) {
		let section = `### ${letter.toUpperCase()}\n`;

		const matchingAbbrs = abbrs.filter((abbrEntry) => abbrEntry.word[0].match(letter));

		// Abbr property
		for (const matchingAbbr of matchingAbbrs) {
			let property = `- `;

			if (lang === 'en') {
				property += matchingAbbr.word;
			} else {
				const translation = translations!.find((t) => matchingAbbr.word === t.word);

				if (translation && translation.translation !== null) {
					property += `${translation.translation} `;
				}

				property += `(${matchingAbbr.word})`;
			}

			for (const abbr of matchingAbbr.abbrs) {
				property += ` • ${degrees.get(abbr.degree)!} ${abbr.abbr}`;

				if (abbr.degree === 'context sensitive') property += ` { ${abbr.context} }`;
			}

			section += `${property}\n`;
		}

		list += `${section}\n`;
	}

	template = template.replace('{{ list }}', list);

	// Length
	template = template.replace('{{ length }}', abbrs.length.toString());

	// Write
	if (lang === 'en') {
		/* alt version */
		template = template.replace('{{ altVer }}', './i18n/alt-README.md');

		writeFileSync('./README.md', template, 'utf-8');
	} else {
		/* alt version */
		template = template.replace('{{ altVer }}', `./alt-${lang}.md`);

		writeFileSync(`./i18n/${lang}.md`, template, 'utf-8');
	}
}
