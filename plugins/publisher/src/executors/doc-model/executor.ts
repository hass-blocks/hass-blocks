import { PromiseExecutor, logger } from '@nx/devkit';
import { apiExtractor } from '../../lib/api-extractor.ts';
import type { DocModelExecutorSchema } from './schema.js';

const runExecutor: PromiseExecutor<DocModelExecutorSchema> = async (
  options,
  context,
) => {
  const { root } = context;

  logger.info(`Starting API extractor...`);

  await apiExtractor({
    workspaceRoot: root,
    ...options,
    outputDir: options.docModelFolder,
    docModel: true,
  });

  return {
    success: true,
  };
};

export default runExecutor;
