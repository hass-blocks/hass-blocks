import { PromiseExecutor, logger } from '@nx/devkit';
import { ApiExtractorExecutorSchema } from './schema';
import {
  Extractor,
  ExtractorConfig,
  ExtractorResult,
  IExtractorConfigPrepareOptions,
} from "@microsoft/api-extractor";
import { join } from 'path';

const runExecutor: PromiseExecutor<ApiExtractorExecutorSchema> = async (
  options, context
) => {

  const { root } = context
  const projectRoot = join(root, options.projectFolder)
  const packageJsonFullPath = join(projectRoot, `package.json`)
  const tsconfigFilePath = join(projectRoot, `tsconfig.lib.json`)
  const reportFolder = join(projectRoot, `api`)

  logger.info(`Starting API extractor...`)

  const prepareOptions: IExtractorConfigPrepareOptions = {
    configObjectFullPath: "",
    packageJsonFullPath,
    configObject: {
      compiler: {
        tsconfigFilePath
      },
      mainEntryPointFilePath: options.mainEntrypointFile,
      projectFolder: root,
      
      apiReport: {
        enabled: true,
        reportFolder
      },
    
      dtsRollup: {
        enabled: true,
      }
    },
  }

  const config = ExtractorConfig.prepare(prepareOptions)
  
  const result: ExtractorResult = Extractor.invoke(config, {
    localBuild: true,
    showVerboseMessages: true,
  });
  
  if (result.succeeded && result.warningCount === 0 && result.errorCount === 0) {
    logger.info(`API Extractor completed successfully`);
    return {
      success: true,
    };
  } else {
    logger.error(
      `API extractor completed with ${String(
        result.errorCount,
      )} errors and ${String(result.warningCount)} warnings`,
    );
    return {
      success: false
    }
  }

};

export default runExecutor;
