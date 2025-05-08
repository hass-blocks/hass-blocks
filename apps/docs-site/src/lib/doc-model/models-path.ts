import { join } from 'node:path';
import { cwd } from 'node:process';

export const modelsPath = join(cwd(), 'apps', 'docs-site', 'models');
