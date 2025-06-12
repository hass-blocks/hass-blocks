import { readJsonFile } from '@nx/devkit';
import type { IRawTSConfig } from '../lib/tsconfig-replace-paths/utils';
import { join } from 'path';

export const getTsconfigWithPaths = (
  projectRoot: string,
  options: string[],
) => {
  const index = options.findIndex((option) => {
    try {
      const tsconfigContents: IRawTSConfig = readJsonFile(
        join(projectRoot, option),
      );

      return Boolean(tsconfigContents.compilerOptions?.paths);
    } catch {
      return false;
    }
  });

  return options[index] ? join(projectRoot, options[index]) : undefined;
};
