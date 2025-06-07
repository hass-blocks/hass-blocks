import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { packageJson } from './packageJson.ts';
import { tsConfig } from './tsconfig.ts';
import { existsSync, mkdirSync } from 'node:fs';
import { execa } from 'execa';

export const createBlocks = async (
  folder: string,
  packageManager: string,
  force?: boolean,
) => {
  if (!existsSync(folder) || force) {
    mkdirSync(folder);
    await writeFile(join(folder, 'package.json'), packageJson);
    await writeFile(join(folder, 'tsconfig.json'), tsConfig);

    await execa({
      cwd: folder,
      stdout: ['pipe', 'inherit'],
    })`${packageManager} install`;
  }
};
