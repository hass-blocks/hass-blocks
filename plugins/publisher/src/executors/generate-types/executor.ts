import { type PromiseExecutor, logger } from '@nx/devkit';
import type { GenerateTypesExecutorSchema } from './schema.ts';
import { generateTypes } from '../../lib/generate-types.ts';

const runExecutor: PromiseExecutor<GenerateTypesExecutorSchema> = async (
  options,
  context,
) => {
  const { root } = context;

  logger.info(`Generating types for ${context.projectName}`);

  const results = await generateTypes({
    workspaceRoot: root,
    dtsRollup: true,
    ...options,
    strictChecks: options.strictChecks ?? true,
    replacePaths: options.replacePaths ?? true,
  });

  if (typeof results === 'undefined') {
    return { success: true };
  }

  const outcome = results.map(({ result, exportName }) => {
    if (
      result?.succeeded &&
      result?.warningCount === 0 &&
      result?.errorCount === 0
    ) {
      logger.info(`API Extractor completed successfully for ${exportName}`);
      return {
        success: true,
      };
    }
    logger.error(
      `API extractor for ${exportName} completed with ${String(
        result?.errorCount,
      )} errors and ${String(result?.warningCount)} warnings`,
    );
    return {
      success: false,
    };
  });

  return {
    success: outcome.every((theOutcome) => theOutcome.success),
  };
};

export default runExecutor;
