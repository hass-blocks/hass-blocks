import { logger } from '@nx/devkit';
import {
  Extractor,
  ExtractorConfig,
  ExtractorLogLevel,
  type IConfigFile,
  type IExtractorConfigPrepareOptions,
} from '@microsoft/api-extractor';
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

  const packageJson = JSON.parse(await readFile(packageJsonFullPath, 'utf-8'));

  const exports = packageJson['exports'];

  if (!exports) {
    logger.info('No exports field found - skipping API check/bundle');
    return;
  }

  const tsConfig = JSON.parse(await readFile(libTsconfigPath, 'utf8'));

  const modifiedTsConfig = {
    ...tsConfig,
    compilerOptions: { ...tsConfig.compilerOptions, customConditions: [] },
  };

  logger.info('Replacing paths');
  if (options.replacePaths) {
    tsconfigReplacePaths({
      project: libTsconfigPath,
      src: srcDir,
      out: distDir,
    });
  }

  return Object.entries(exports)
    .map(([theExport, config]) => {
      if (typeof config !== 'object') {
        return;
      }

      if (!config) {
        return;
      }

      if (
        !config ||
        !('development' in config) ||
        !('types' in config) ||
        typeof config['development'] !== 'string' ||
        typeof config['types'] !== 'string'
      ) {
        return;
      }

      const entryPoint = config['development'];
      const bundleOutput = config['types'];

      const getDeclarationName = join(
        'dist',
        `${basename(entryPoint).split('.')[0]}.d.ts`,
      );

      const entryPointFile = join(projectRoot, getDeclarationName);

      if (!existsSync(entryPointFile)) {
        logger.warn(
          `${entryPointFile} not found - skipping API rollup for ${theExport} export`,
        );
        return;
      }

      logger.info(`Performing API rollup for ${theExport} export`);

      const dtsRollup: IConfigFile['dtsRollup'] = {
        enabled: true,
        publicTrimmedFilePath: bundleOutput,
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

      const reportSuffix =
        theExport.slice(2).length > 0 ? `-${theExport.slice(2)}` : '';

      const prepareOptions: IExtractorConfigPrepareOptions = {
        configObjectFullPath: '',
        packageJsonFullPath,
        configObject: {
          compiler: {
            overrideTsconfig: modifiedTsConfig,
          },
          mainEntryPointFilePath: entryPointFile,
          projectFolder: projectRoot,

          apiReport: {
            enabled: true,
            reportFileName: `${packageName}${reportSuffix}`,
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

      const extractorConfig = ExtractorConfig.prepare(prepareOptions);

      logger.info('Generating DTS Rollup');
      return {
        result: Extractor.invoke(extractorConfig, {
          localBuild: true,
          showVerboseMessages: true,
        }),
        exportName: theExport,
      };
    })
    .flatMap((item) => (item ? [item] : []));
};
