import {
  logger,
  readJsonFile,
  workspaceRoot,
  type PromiseExecutor,
} from '@nx/devkit';

import { getPaths, swc } from '../../utils';

import { join } from 'node:path';
import type { IRawTSConfig } from '../../lib/tsconfig-replace-paths/utils';
import type { Config } from '@swc/core';

interface BuildExecutor {
  projectFolder: string;
  tsconfigFile: string;
}

export const buildExecutor: PromiseExecutor<BuildExecutor> = async (
  options,
  context,
) => {
  const { projectName } = context;
  if (!projectName) {
    logger.error(`No project name was passed to executor!`);
    return { success: false };
  }
  const projectConfig = context.projectsConfigurations.projects[projectName];

  if (!projectConfig) {
    logger.error(`No project configuration was found!`);
    return { success: false };
  }

  const { sourceRoot } = projectConfig;

  if (!sourceRoot) {
    logger.error(`Project must have source root configured!`);
    return { success: false };
  }

  const tsconfigFile = join(workspaceRoot, options.tsconfigFile);
  const tsconfigData = readJsonFile(tsconfigFile) as IRawTSConfig;
  const distDir = join(workspaceRoot, options.projectFolder, `dist`);
  const sourceRootPath = join(workspaceRoot, sourceRoot);

  const config: Config = {
    jsc: {
      ...getPaths(tsconfigData),
      target: 'es2017',
      parser: {
        syntax: 'typescript',
        decorators: true,
        dynamicImport: true,
      },
      transform: {
        decoratorMetadata: true,
        legacyDecorator: true,
      },
      keepClassNames: true,
      externalHelpers: true,
      loose: true,
      experimental: {
        plugins: [['swc-plugin-allow-importing-ts-extensions', {}]],
      },
    },
    module: {
      type: 'es6',
      outFileExtension: 'js',
      // @ts-expect-error - the types are wrong here. This option definitely does exist
      resolveFully: true,
    },
    sourceMaps: true,
    exclude: [
      'jest.config.ts',
      '.*\\.spec.tsx?$',
      '.*\\.test.tsx?$',
      './src/jest-setup.ts$',
      './**/jest-setup.ts$',
      '.*.js$',
    ],
  };

  try {
    process.chdir(options.projectFolder);
    await swc({
      workspaceRoot,
      config,
      inDir: sourceRootPath,
      outDir: distDir,
    });
  } catch (error) {
    logger.error(error);
    return { success: false };
  }

  return { success: true };
};

export default buildExecutor;
