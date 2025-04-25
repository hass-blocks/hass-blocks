import {
  Extractor,
  ExtractorConfig,
  ExtractorLogLevel,
  IConfigFile,
  IExtractorConfigPrepareOptions,
} from '@microsoft/api-extractor';
import { workspaceRoot } from '@nx/devkit';
import { basename, join } from 'path';
import { createDirIfNotExists } from './create-dir-if-not-exists.ts';

interface ApiExractorArgs {
  workspaceRoot: string;
  projectFolder: string;
  mainEntrypointFile: string;
  outputDir: string;
  docModel?: boolean;
  dtsRollup?: boolean;
  strictChecks?: boolean;
}

export const apiExtractor = (options: ApiExractorArgs) => {
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
        tsconfigFilePath,
      },
      mainEntryPointFilePath: options.mainEntrypointFile,
      projectFolder: workspaceRoot,

      apiReport: {
        enabled: true,
        reportFolder: options.outputDir,
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
    showDiagnostics: true,
  });
};
