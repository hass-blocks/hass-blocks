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

interface ApiExractorArgs {
  workspaceRoot: string;
  projectFolder: string;
  mainEntrypointFile: string;
  outputDir: string;
  docModel?: boolean;
  dtsRollup?: boolean;
  strictChecks?: boolean;
  replacePaths?: boolean;
}

export const apiExtractor = async (options: ApiExractorArgs) => {
  createDirIfNotExists(options.outputDir);

  const packageName = basename(options.projectFolder);

  const docModel: IConfigFile['docModel'] = {
    enabled: true,
    apiJsonFilePath: `${options.outputDir}/${packageName}.api.json`,
  };

  const withDocModel = options.docModel
    ? {
        docModel,
      }
    : {};

  const projectRoot = join(workspaceRoot, options.projectFolder);
  const packageJsonFullPath = join(projectRoot, `package.json`);
  const tsconfigFilePath = join(projectRoot, `tsconfig.lib.json`);
  const publicTrimmedFilePath = join(projectRoot, `dist`, `public.d.ts`);
  const srcDir = join(projectRoot, `src`);
  const distDir = join(projectRoot, `dist`);

  const tsConfig = JSON.parse(await readFile(tsconfigFilePath, 'utf8'));

  const modifiedTsConfig = {
    ...tsConfig,
    compilerOptions: { ...tsConfig.compilerOptions, customConditions: [] },
  };

  if (options.replacePaths) {
    tsconfigReplacePaths({
      project: tsconfigFilePath,
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
      mainEntryPointFilePath: options.mainEntrypointFile,
      projectFolder: workspaceRoot,

      apiReport: {
        enabled: true,
        reportFolder: options.outputDir,
        reportTempFolder: join(
          projectRoot,
          `.api-extractor`,
          `temp`,
          options.outputDir,
        ),
      },
      ...withStrictChecks,
      ...withDtsRollup,
      ...withDocModel,
    },
  };

  const config = ExtractorConfig.prepare(prepareOptions);

  return Extractor.invoke(config, {
    localBuild: true,
    showVerboseMessages: true,
  });
};
