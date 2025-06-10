import { type PromiseExecutor, logger } from '@nx/devkit';
import { generateTypes } from '../../lib/generate-types.ts';

export interface DocModelExecutorSchema {
  projectFolder: string;
}

const generateDocModelExecutor: PromiseExecutor<
  DocModelExecutorSchema
> = async (options, context) => {
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

export default generateDocModelExecutor;
