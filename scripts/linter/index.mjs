import { readFileSync, writeFileSync } from 'fs';

//

// Sort abbrs
{
   const path = './data/abbrs/.json';

   const abbrs = JSON.parse(readFileSync(path, 'utf-8'));

   writeFileSync(path, JSON.stringify(abbrs.sort(), null, 3), 'utf-8');
}

// Sort langs
{
   const path = './data/langs.json';

   const langs = JSON.parse(readFileSync(path, 'utf-8'));

   writeFileSync(path, JSON.stringify(langs.sort(), null, 3), 'utf-8');
}

// Sort translations
{
   const path = './data/translations.json';

   const translations = JSON.parse(readFileSync(path, 'utf-8'));

   writeFileSync(path, JSON.stringify(translations.sort(), null, 3), 'utf-8');
}