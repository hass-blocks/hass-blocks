import { existsSync, mkdirSync } from 'fs';

export const createDirIfNotExists = (dir: string) =>
  !existsSync(dir) ? mkdirSync(dir) : undefined;
