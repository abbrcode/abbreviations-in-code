import { readFileSync, writeFileSync } from 'fs';

import type { Abbr } from '../types/abbrs.ts';
import type { Translation } from '../types/i18n.ts';

// Sort abbrs.json
{
   const path = './data/abbrs/.json';

   var abbrs = JSON.parse(readFileSync<Abbr[]>(path, 'utf-8')) as Abbr[];

   writeFileSync(path, JSON.stringify(abbrs.sort((a, b) => a.word < b.word ? -1 : 1), null, 3), 'utf-8');
}

// Sort langs.json
{
   const path = './data/i18n/langs.json';

   var langs = JSON.parse(readFileSync<string[]>(path, 'utf-8')) as string[];

   writeFileSync(path, JSON.stringify(langs.sort(), null, 3), 'utf-8');
}

// Mirror abbrs.json words in translations.json for each language
{
   for (const lang of langs) {
      // Skip English
      if (lang === 'en') continue;

      const path = `./data/i18n/${lang}/translations.json`;

      const currTranslations = JSON.parse(readFileSync(path, 'utf-8')) as Translation[];
      const newTranslations: Translation[] = [];

      for (const abbr of abbrs) {
         const abbrTranslation = currTranslations.find(translation => abbr.word === translation.word);

         if (abbrTranslation) {
            newTranslations.push(abbrTranslation);
         } else {
            newTranslations.push({
               word: abbr.word,
               translation: null
            });
         }
      }
   }
}

// Sort translations
{
   for (const lang of langs) {
      // Skip English
      if (lang === 'en') continue;

      const path = `./data/i18n/${lang}/translations.json`;

      const translations = JSON.parse(readFileSync(path, 'utf-8')) as Translation[];

      writeFileSync(path, JSON.stringify(translations.sort((a, b) => a.word < b.word ? -1 : 1), null, 3), 'utf-8');
   }
}