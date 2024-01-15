import { readFileSync, writeFileSync } from 'fs';

// Abbrs
{
   const langs = JSON.parse(readFileSync('./data/langs.json', 'utf-8'));
   const abbrs = JSON.parse(readFileSync('./data/abbrs/.json', 'utf-8'));

   // Sort langs
   writeFileSync('./data/langs.json', JSON.stringify(langs.sort(), null, 3), 'utf-8');

   // Sort abbrs
   writeFileSync('./data/abbrs/.json', JSON.stringify(abbrs.sort(), null, 3), 'utf-8');

   // Mirror abbr word to translations word
   for (const lang of langs) {
      if (lang === 'en') continue;

      const path = `./data/translations/${lang}/.json`;

      let translations = JSON.parse(readFileSync(path, 'utf-8'));

      for (let abbr of abbrs) {
         const query = translations.find(translation => abbr.word === translation.word);

         if (!query) {
            translations.push({
               word: abbr.word,
               translation: null
            });
         }
      }

      // Sort translations
      writeFileSync(path, JSON.stringify(translations.sort((a, b) => a.word < b.word ? -1 : 1), null, 3), 'utf-8');
   }
}