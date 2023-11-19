const alphabet = 'abcdefghijklmnopqrstuvwxyz';

//

import { readFileSync, writeFileSync } from 'fs';

//

const abbrs = JSON.parse(readFileSync('./data/abbrs/.json', 'utf-8'));

let template = readFileSync('./data/template.md', 'utf-8');

// List
import { section } from './template.mjs';
{
   let list = '';

   for (const letter of alphabet) list += section(letter);

   template = template.replace('{{ list }}', list);
}

// Length
{
   template = template.replace('{{ length }}', abbrs.length);
}

writeFileSync('./README.md', template, 'utf-8');