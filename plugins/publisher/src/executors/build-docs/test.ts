import { ExecutorContext } from '@nx/devkit';
import { join } from 'path';
import runExecutor from './executor.ts';

await runExecutor(
  {
    modelFolder: join(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      '..',
      'apps',
      'docs',
      'models',
    ),
    outputFolder: join(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      '..',
      'apps',
      'docs',
      'docs',
      'api-docs',
    ),
  },
  {} as ExecutorContext,
);
