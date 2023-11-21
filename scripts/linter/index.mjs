import { readFileSync, writeFileSync } from 'fs';

// Abbrs
{
   const langs = JSON.parse(readFileSync('./data/langs.json', 'utf-8'));
   const abbrs = JSON.parse(readFileSync('./data/abbrs/.json', 'utf-8'));

   // Sort langs
   writeFileSync('./data/langs.json', JSON.stringify(langs.sort(), null, 3), 'utf-8');

   // Sort abbrs
   writeFileSync('./data/abbrs/.json', JSON.stringify(abbrs.sort(), null, 3), 'utf-8');

   for (const lang of langs) {
      if (lang === 'en') continue;

      let translations = JSON.parse(readFileSync(`./data/translations/${lang}.json`, 'utf-8'));

      for (let abbr of abbrs) {
         // Mirror abbr word to translations key
         if (!translations[abbr.word]) translations[abbr.word] = null;
      }

      // Sort translations
      writeFileSync(`./data/translations/${lang}.json`, JSON.stringify(translations.sort(), null, 3), 'utf-8');
   }
}