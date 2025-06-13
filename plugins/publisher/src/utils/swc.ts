import { writeJsonFile } from '@nx/devkit';
import { Config } from '@swc/core';
import * as fs from 'fs/promises';

import { existsSync, mkdirSync } from 'node:fs';
import { runCommandWithArgs } from './run-command-with-args';
import { nodeModulesBinPath } from './node-modules-bin-path';
import { join } from 'node:path';

export const createDirIfNotExists = (dir: string) =>
  !existsSync(dir) ? mkdirSync(dir) : undefined;

export const swc = async ({
  workspaceRoot,
  config,
  outDir,
  inDir,
}: {
  workspaceRoot: string;
  config: Config;
  inDir: string;
  outDir: string;
}) => {
  const swcPath = nodeModulesBinPath(workspaceRoot, 'swc');

  const swcConfig = join(process.cwd(), `.swcrc`);

  writeJsonFile(swcConfig, config);

  await runCommandWithArgs(swcPath, inDir, {
    'config-file': swcConfig,
    'out-dir': outDir,
    'strip-leading-paths': true,
  });

  await fs.rm(swcConfig);
};
