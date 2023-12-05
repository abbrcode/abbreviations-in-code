import { readFileSync } from 'fs';

import compile from './compile.mjs';
import translate from './translate.mjs';

//

const langs = JSON.parse(readFileSync('./data/langs.json'));

for (const lang of langs) {
   if (lang === 'en') {
      compile();
   } else {
      translate(lang);
   }
}