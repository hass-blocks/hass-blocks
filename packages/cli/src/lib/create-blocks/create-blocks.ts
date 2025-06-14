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
    console.log(
      `Folder ${folder} not found or --force flag supplied. Creating...`,
    );
    mkdirSync(folder, { recursive: true });
    const packageJsonPath = join(folder, `package.json`);
    await writeFile(packageJsonPath, packageJson);
    console.log(`Created package.json at ${packageJsonPath}`);

    const tsconfigPath = join(folder, `tsconfig.json`);
    await writeFile(tsconfigPath, tsConfig);
    console.log(`Created tsconfig.json at ${packageJsonPath}`);

    console.log(`Installing dependencies`);
    await execa({
      cwd: folder,
      stdout: ['pipe', 'inherit'],
    })`${packageManager} install`;
    console.log(`Done!`);
  }
};
