import { readFileSync } from 'fs';

//

const abbrs = JSON.parse(readFileSync('./data/abbrs/.json', 'utf-8'));

const degrees = JSON.parse(readFileSync('./data/degrees.json', 'utf-8'));

//

const property = abbr => {
   let p = `- ${abbr.word}`;

   for (const a of abbr.abbrs) {
      p += ` • ${degrees[a.degree]} ${a.abbr}`;

      if (a.degree === 'yellow') p += ` { ${a.context} }`;
   }

   return `${p}\n`;
};

export const section = letter => {
   let s = `### ${letter.toUpperCase()}\n`;

   const query = abbrs.filter(a => a.word[0].match(letter));

   for (const abbr of query) s += property(abbr);

   return `${s}\n`;
};