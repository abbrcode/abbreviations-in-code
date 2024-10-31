import { readFileSync, writeFileSync } from 'fs';
import yml from 'js-yaml';

import type { Abbr } from '../types/abbrs.ts';

// abbrs.json -> abbrs.yml
{
   const abbrs = JSON.parse(readFileSync('./data/abbrs/.json', 'utf-8')) as Abbr[];

   writeFileSync('./data/abbrs/.yml', yml.dump(abbrs), 'utf-8');
}