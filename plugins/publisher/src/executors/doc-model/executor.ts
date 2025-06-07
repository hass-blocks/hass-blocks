import { type PromiseExecutor, logger } from '@nx/devkit';
import { generateTypes } from '../../lib/generate-types.ts';
import type { DocModelExecutorSchema } from './schema.js';

const runExecutor: PromiseExecutor<DocModelExecutorSchema> = async (
  options,
  context,
) => {
  const { root } = context;

  logger.info(`Starting API extractor...`);

  await generateTypes({
    workspaceRoot: root,
    ...options,
    docModel: true,
  });

  return {
    success: true,
  };
};

export default runExecutor;
