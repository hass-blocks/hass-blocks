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
  verifyDocsExecutor,
} from './executors';
import {
  executorTarget,
  generateExports,
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
  const jsFilesInDistFolder = `{projectRoot}/**/*.{js,js.map}`;
  const dDotTsFilesInDistFoler = `{projectRoot}/**/*.{d.ts,d.ts.map}`;

  const isProject = existsSync(projectJsonPath) || existsSync(packageJsonPath);

  if (!isProject || isRootProject) {
    return {};
  }

  const checkTypesTarget = executorTarget({
    name: 'check-types',
    executor: checkTypesExecutor,
    productionInputsOnly: false,
    includeDependenciesInInputs: true,
    outputs: [dDotTsFilesInDistFoler],
    options: {
      buildMode: true,
      tsconfigFile: configFilePath,
    },
  });

  const packageJsonContents: PackageJson = readJsonFile(packageJsonPath);

  const { exports } = packageJsonContents;

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
        outputs: [jsFilesInDistFolder],
        options: {
          tsconfigFile,
          projectFolder: projectRoot,
        },
      })
    : {};

  const libFile = join(projectRoot, `tsconfig.lib.json`);

  const verifyDocsExecutorTarget = tsconfigFile
    ? executorTarget({
        name: 'verify-docs',
        executor: verifyDocsExecutor,
        productionInputsOnly: true,
        options: {
          tsconfigPath: libFile,
          markdownFiles: [`${projectRoot}/README.md`],
        },
      })
    : {};

  const targetExports = generateExports(exports);

  const generateApiTarget = targetExports
    ? executorTarget({
        name: 'generate-api',
        executor: generateApiExecutor,
        productionInputsOnly: true,
        outputs: targetExports.map((item) =>
          join(`{projectRoot}`, item.output),
        ),
        options: {
          projectFolder: projectRoot,
          replacePaths: true,
          strictChecks: true,
          exports: targetExports,
        },
        dependsOn: checkTypesTarget,
      })
    : {};

  const docModelTarget = targetExports
    ? executorTarget({
        name: 'doc-model',
        productionInputsOnly: true,
        executor: generateDocModelExecutor,
        outputs: [distFolder],
        options: {
          projectFolder: projectRoot,
          exports: targetExports,
        },
        dependsOn: checkTypesTarget,
      })
    : {};

  return generateProjectsWithTargets(projectRoot, {
    ...checkTypesTarget,
    ...generateApiTarget,
    ...docModelTarget,
    ...buildTarget,
    ...verifyDocsExecutorTarget,
  });
}
