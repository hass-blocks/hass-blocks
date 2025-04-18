import { readFileSync } from 'fs';
import { join } from 'path';
import { safeJsonParse } from '../lib/utils/index.ts';
import { PackageJson } from 'type-fest';

export const getPackageName = () => {
  const projectRoot = join(import.meta.dirname, '..', '..');
  const contents = readFileSync(join(projectRoot, './package.json'), 'utf8');
  return safeJsonParse<PackageJson>(contents)['name'];
};
