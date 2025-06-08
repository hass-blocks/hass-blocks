import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { packageJson } from './packageJson.ts';
import { tsConfig } from './tsconfig.ts';
import { existsSync, mkdirSync } from 'node:fs';
import { execa } from 'execa';
import { cwd } from 'node:process';

export const createBlocks = async (
  folder: string,
  packageManager: string,
  force?: boolean,
) => {
  const theFolder = join(cwd(), folder);
  if (!existsSync(theFolder) || force) {
    mkdirSync(folder);
    await writeFile(join(theFolder, 'package.json'), packageJson);
    await writeFile(join(theFolder, 'tsconfig.json'), tsConfig);

    await execa({
      cwd: theFolder,
      stdout: ['pipe', 'inherit'],
    })`${packageManager} install`;
  }
};
