import { joinPathFragments, writeJsonFile } from '@nx/devkit';
import { v4 } from 'uuid';
import { Config } from '@swc/core';
import * as fs from 'fs/promises';
import * as os from 'os';

import { existsSync, mkdirSync } from 'node:fs';
import { runCommandWithArgs } from './run-command-with-args';

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
  const swcPath = joinPathFragments(
    workspaceRoot,
    'node_modules',
    '.bin',
    'swc',
  );

  const tempFolder = os.tmpdir();
  const tempPath = `${tempFolder}/${v4()}.json`;

  writeJsonFile(tempPath, config);

  await runCommandWithArgs(swcPath, inDir, {
    'config-file': tempPath,
    'out-dir': outDir,
    'strip-leading-paths': true,
  });

  await fs.rm(tempPath, { recursive: true, force: true });
};
