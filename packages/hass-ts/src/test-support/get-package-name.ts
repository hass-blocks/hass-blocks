import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { safeJsonParse } from '../lib/utils/index.ts';
import type { IPackageJson } from 'package-json-type';

export const getPackageName = () => {
  const projectRoot = join(import.meta.dirname, '..', '..');
  const contents = readFileSync(join(projectRoot, './package.json'), 'utf8');
  return safeJsonParse<IPackageJson>(contents)['name'];
};
