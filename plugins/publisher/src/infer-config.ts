import {
  createNodesFromFiles,
  workspaceRoot,
  type CreateNodesContextV2,
  type CreateNodesV2,
  readJsonFile,
} from '@nx/devkit';

import { existsSync } from 'fs';
import { dirname, join } from 'path';
import {
  checkTypesExecutor,
  generateApiExecutor,
  generateDocModelExecutor,
  buildExecutor,
} from './executors';
import {
  executorTarget,
  generateProjectsWithTargets,
  getTsconfigWithPaths,
} from './utils';
import type { PackageJson } from 'nx/src/utils/package-json';

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

  const isRootProject = join(workspaceRoot, projectRoot) === workspaceRoot;

  const projectJsonPath = join(projectRoot, 'project.json');
  const packageJsonPath = join(projectRoot, 'package.json');
  const distFolder = join(projectRoot, `dist`);

  const isProject = existsSync(projectJsonPath) || existsSync(packageJsonPath);

  if (!isProject || isRootProject) {
    return {};
  }

  const checkTypesTarget = executorTarget({
    name: 'check-types',
    executor: checkTypesExecutor,
    productionInputsOnly: false,
    includeDependenciesInInputs: true,
    outputs: [distFolder],
    options: {
      buildMode: true,
      tsconfigFile: configFilePath,
    },
  });

  const packageJsonContents: PackageJson = readJsonFile(packageJsonPath);

  const { exports } = packageJsonContents;

  const isPackageWithExports =
    exports &&
    typeof exports !== 'string' &&
    Object.keys(exports).includes('.');

  const tsconfigFile = getTsconfigWithPaths(projectRoot, [
    'tsconfig.json',
    'tsconfig.lib.json',
    'tsconfig.app.json',
  ]);

  const buildTarget = tsconfigFile
    ? executorTarget({
        name: 'build',
        executor: buildExecutor,
        productionInputsOnly: true,
        outputs: [distFolder],
        options: {
          tsconfigFile,
          projectFolder: projectRoot,
        },
      })
    : {};

  const generateApiTarget = isPackageWithExports
    ? executorTarget({
        name: 'generate-api',
        executor: generateApiExecutor,
        productionInputsOnly: true,
        outputs: [distFolder],
        options: {
          projectFolder: projectRoot,
          replacePaths: true,
          strictChecks: true,
        },
        dependsOn: checkTypesTarget,
      })
    : {};

  const docModelTarget = isPackageWithExports
    ? executorTarget({
        name: 'doc-model',
        productionInputsOnly: true,
        executor: generateDocModelExecutor,
        outputs: [distFolder],
        options: {
          projectFolder: projectRoot,
        },
        dependsOn: checkTypesTarget,
      })
    : {};

  return generateProjectsWithTargets(projectRoot, {
    ...checkTypesTarget,
    ...generateApiTarget,
    ...docModelTarget,
    ...buildTarget,
  });
}
