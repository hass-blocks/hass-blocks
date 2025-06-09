import {
  createNodesFromFiles,
  type CreateNodesContextV2,
  type CreateNodesV2,
} from '@nx/devkit';
import { existsSync } from 'fs';
import { dirname, join } from 'path';

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
  _options: GenerateTypes | undefined,
  _context: CreateNodesContextV2,
) {
  const projectRoot = dirname(configFilePath);

  const isProject =
    existsSync(join(projectRoot, 'project.json')) ||
    existsSync(join(projectRoot, 'package.json'));

  if (!isProject) {
    return {};
  }

  return {
    projects: {
      [projectRoot]: {
        targets: {
          'generate-types': {
            executor: '@hass-blocks/publisher:generate-types',
            outputs: ['{options.outputPath}'],
            options: {
              projectFolder: projectRoot,
            },
          },
        },
      },
    },
  };
}
