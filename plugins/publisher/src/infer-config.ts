import {
  createNodesFromFiles,
  type CreateNodesContextV2,
  type CreateNodesV2,
} from '@nx/devkit';

import { existsSync } from 'fs';
import { dirname, join } from 'path';
import {
  checkTypesExecutor,
  generateApiExecutor,
  generateDocModelExecutor,
} from './executors';
import { executorTarget, generateProjectsWithTargets } from './utils';

type GenerateTypes = object;

export const createNodesV2: CreateNodesV2<GenerateTypes> = [
  '**/tsconfig.json',
  async (configFiles, options, context) => {
    return await createNodesFromFiles(
      (configFile, options, context) =>
        createNodesInternal(configFile, options, context),
      configFiles,
      options,
      context,
    );
  },
];

async function createNodesInternal(
  configFilePath: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _options: GenerateTypes | undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _context: CreateNodesContextV2,
) {
  const projectRoot = dirname(configFilePath);

  const isProject =
    existsSync(join(projectRoot, 'project.json')) ||
    existsSync(join(projectRoot, 'package.json'));

  if (!isProject) {
    return {};
  }

  const checkTypesTarget = executorTarget({
    name: 'check-types',
    executor: checkTypesExecutor,
    options: {
      buildMode: true,
      tsconfigFile: configFilePath,
    },
  });

  const generateApiTarget = executorTarget({
    name: 'generate-api',
    executor: generateApiExecutor,
    options: {
      projectFolder: projectRoot,
      replacePaths: true,
      strictChecks: true,
    },
    dependsOn: checkTypesTarget,
  });

  const docModelTarget = executorTarget({
    name: 'doc-model',
    executor: generateDocModelExecutor,
    options: {
      projectFolder: projectRoot,
    },
    dependsOn: checkTypesTarget,
  });

  return generateProjectsWithTargets(projectRoot, {
    ...checkTypesTarget,
    ...generateApiTarget,
    ...docModelTarget,
  });
}
