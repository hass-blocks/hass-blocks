import { type PromiseExecutor, logger } from '@nx/devkit';
import type { GenerateTypesExecutorSchema } from './schema.ts';
import { generateTypes } from '../../lib/generate-types.ts';

const runExecutor: PromiseExecutor<GenerateTypesExecutorSchema> = async (
  options,
  context,
) => {
  const { root } = context;

  logger.info(`Generating types for ${context.projectName}`);

  const result = await generateTypes({
    workspaceRoot: root,
    dtsRollup: true,
    ...options,
    strictChecks: options.strictChecks ?? true,
    replacePaths: options.replacePaths ?? true,
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
