import { type PromiseExecutor, logger } from '@nx/devkit';
import type { ApiExtractorExecutorSchema } from './schema.ts';
import { apiExtractor } from '../../lib/api-extractor.ts';

const runExecutor: PromiseExecutor<ApiExtractorExecutorSchema> = async (
  options,
  context,
) => {
  const { root } = context;

  logger.info(`Starting API extractor...`);

  const result = await apiExtractor({
    workspaceRoot: root,
    outputDir: options.reportFolder,
    dtsRollup: true,
    ...options,
  });

  if (
    result.succeeded &&
    result.warningCount === 0 &&
    result.errorCount === 0
  ) {
    logger.info(`API Extractor completed successfully`);
    return {
      success: true,
    };
  }
  logger.error(
    `API extractor completed with ${String(
      result.errorCount,
    )} errors and ${String(result.warningCount)} warnings`,
  );
  return {
    success: false,
  };
};

export default runExecutor;
