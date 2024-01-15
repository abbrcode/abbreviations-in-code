import { readFileSync, writeFileSync } from 'fs';

//

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export default class Template {
   abbrs = JSON.parse(readFileSync('./data/abbrs/.json', 'utf-8'));
   degrees = JSON.parse(readFileSync('./data/degrees.json', 'utf-8'));

   constructor (lang) {
      this.lang = lang;

      if (this.lang === 'en') {
         this.template = readFileSync('./data/template.md', 'utf-8');
      } else {
         this.template = readFileSync(`./data/translations/${this.lang}/.md`, 'utf-8');

         this.translations = JSON.parse(readFileSync(`./data/translations/${lang}/.json`, 'utf-8'));
      }

      this.replace('{{ length }}', this.abbrs.length);
   }

   replace(prev, replace) {
      this.template = this.template.replace(prev, replace);
   }

   list() {
      let list = '';

      for (const letter of alphabet) {
         let section = `### ${letter.toUpperCase()}\n`;

         const query = this.abbrs.filter(a => a.word[0].match(letter));

         // Abbr property
         for (const abbr of query) {
            let property = `- `;

            if (this.lang !== 'en') {
               const translation = this.translations.find(translation => abbr.word === translation.word);

               if (translation.translation) {
                  property += `${translation.translation} (${abbr.word})`;
               } else {
                  property += `(${abbr.word})`;
               }
            } else {
               property += abbr.word;
            }

            for (const a of abbr.abbrs) {
               property += ` • ${this.degrees[a.degree]} ${a.abbr}`;

               if (a.degree === 'yellow') property += ` { ${a.context} }`;
            }

            section += `${property}\n`;
         }

         list += `${section}\n`;
      }

      this.replace('{{ list }}', list);
   }

   write(path) {
      writeFileSync(path, this.template, 'utf-8');
   }
}