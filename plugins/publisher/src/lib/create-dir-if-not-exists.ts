import { existsSync, mkdirSync } from 'node:fs';

export const createDirIfNotExists = (dir: string) =>
  !existsSync(dir) ? mkdirSync(dir) : undefined;
