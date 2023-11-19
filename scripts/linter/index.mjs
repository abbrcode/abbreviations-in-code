import { readFileSync, writeFileSync } from 'fs';

//

// Sort abbrs
{
   const abbrs = JSON.parse(readFileSync('./data/abbrs/.json', 'utf-8'));

   writeFileSync('./data/abbrs/.json', JSON.stringify(abbrs.sort(), null, 3), 'utf-8');
}