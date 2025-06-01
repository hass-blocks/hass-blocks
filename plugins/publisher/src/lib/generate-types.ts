import { logger } from '@nx/devkit';
import {
  Extractor,
  ExtractorConfig,
  ExtractorLogLevel,
  type IConfigFile,
  type IExtractorConfigPrepareOptions,
} from '@microsoft/api-extractor';
import * as tsc from 'tsc-prog';
import { workspaceRoot } from '@nx/devkit';
import { basename, join } from 'node:path';
import { createDirIfNotExists } from './create-dir-if-not-exists.ts';
import { tsconfigReplacePaths } from './tsconfig-replace-paths/tsconfig-replace-paths.ts';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

interface GenerateTypesArgs {
  workspaceRoot: string;
  projectFolder: string;
  docModel?: boolean;
  dtsRollup?: boolean;
  strictChecks?: boolean;
  replacePaths?: boolean;
}

export const generateTypes = async (options: GenerateTypesArgs) => {
  const projectRoot = join(workspaceRoot, options.projectFolder);
  const apiFolder = join(projectRoot, 'api');
  process.chdir(projectRoot);
  const packageJsonFullPath = join(projectRoot, `package.json`);
  const libTsconfigPath = join(projectRoot, `tsconfig.lib.json`);
  const specTsconfigPath = join(projectRoot, `tsconfig.spec.json`);
  const publicTrimmedFilePath = join(projectRoot, `dist`, `public.d.ts`);
  const srcDir = join(projectRoot, `src`);
  const distDir = join(projectRoot, `dist`);

  createDirIfNotExists(apiFolder);

  const packageName = basename(options.projectFolder);

  const docModel: IConfigFile['docModel'] = {
    enabled: true,
    apiJsonFilePath: join(apiFolder, `${packageName}.api.json`),
  };

  const withDocModel = options.docModel
    ? {
        docModel,
      }
    : {};

  logger.info('Compiling libraries');
  tsc.build({
    configFilePath: libTsconfigPath,
    basePath: projectRoot,
    compilerOptions: {
      // @ts-expect-error - types from package are out of date
      customConditions: [],
    },
  });

  logger.info('Compiling tests');
  tsc.build({
    configFilePath: specTsconfigPath,
    basePath: projectRoot,
    compilerOptions: {
      // @ts-expect-error - types from package are out of date
      customConditions: [],
    },
  });

  const tsConfig = JSON.parse(await readFile(libTsconfigPath, 'utf8'));

  const modifiedTsConfig = {
    ...tsConfig,
    compilerOptions: { ...tsConfig.compilerOptions, customConditions: [] },
  };

  const entryPointFile = join(projectRoot, `dist`, `index.d.ts`);

  if (!existsSync(entryPointFile)) {
    logger.warn(`${entryPointFile} not found - skipping API rollup`);
    return;
  }

  logger.info('Replacing paths');
  if (options.replacePaths) {
    tsconfigReplacePaths({
      project: libTsconfigPath,
      src: srcDir,
      out: distDir,
    });
  }

  const dtsRollup: IConfigFile['dtsRollup'] = {
    enabled: true,
    publicTrimmedFilePath,
  };

  const withDtsRollup = options.dtsRollup
    ? {
        dtsRollup,
      }
    : {};

  const withStrictChecks = options.strictChecks
    ? {
        messages: {
          compilerMessageReporting: {
            default: {
              logLevel: ExtractorLogLevel.Warning,
            },
          },

          extractorMessageReporting: {
            default: {
              logLevel: ExtractorLogLevel.Warning,
            },
            'ae-wrong-input-file-type': {
              logLevel: ExtractorLogLevel.None,
            },
          },

          tsdocMessageReporting: {
            default: {
              logLevel: ExtractorLogLevel.Warning,
            },
          },
        },
      }
    : {};

  const prepareOptions: IExtractorConfigPrepareOptions = {
    configObjectFullPath: '',
    packageJsonFullPath,
    configObject: {
      compiler: {
        overrideTsconfig: modifiedTsConfig,
      },
      mainEntryPointFilePath: `./dist/index.d.ts`,
      projectFolder: projectRoot,

      apiReport: {
        enabled: true,
        reportFolder: `./api`,
        reportTempFolder: join(
          projectRoot,
          `.api-extractor`,
          `temp`,
          options.projectFolder,
        ),
      },
      ...withStrictChecks,
      ...withDtsRollup,
      ...withDocModel,
    },
  };

  const config = ExtractorConfig.prepare(prepareOptions);

  logger.info('Generating DTS Rollup');
  return Extractor.invoke(config, {
    localBuild: true,
    showVerboseMessages: true,
  });
};
