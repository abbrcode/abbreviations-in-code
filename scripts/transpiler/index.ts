import { readFileSync, writeFileSync } from 'fs';
import * as yaml from '@std/yaml';

import type { Abbr } from '../types/abbrs.ts';

// abbrs.json -> abbrs.yml
{
	const abbrs = JSON.parse(readFileSync('./data/abbrs/.json', 'utf-8')) as Abbr[];

	writeFileSync('./data/abbrs/.yml', yaml.stringify(abbrs), 'utf-8');
}
