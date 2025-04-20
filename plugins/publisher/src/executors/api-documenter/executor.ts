import { PromiseExecutor, logger } from '@nx/devkit';
import { apiExtractor } from '../../lib/api-extractor.ts';
import { $ } from 'execa';
import type { ApiDocumenterExecutorSchema } from './schema.d.ts';

const runExecutor: PromiseExecutor<ApiDocumenterExecutorSchema> = async (
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

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  const result =
    await $`pnpm exec api-documenter markdown --input-folder ${options.docModelFolder} --output-folder ${options.outputDir}`;
  logger.info(result.stdout);

  return {
    success: true,
  };
};

export default runExecutor;
