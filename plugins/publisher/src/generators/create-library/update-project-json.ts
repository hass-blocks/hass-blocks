import { Tree } from '@nx/devkit';
import { join } from 'path';

export const updateProjectJson = (
  packageFolder: string,
  directory: string,
  tree: Tree,
) => {
  const projectJsonPath = join(packageFolder, `project.json`);

  const projectJson = JSON.parse(tree.read(projectJsonPath, 'utf8') ?? '{}');

  const newProjectJson = {
    ...projectJson,
    targets: {
      ...projectJson.targets,
      'rollup-api': {
        executor: '@hass-blocks/publisher:api-extractor',
        outputs: ['{options.outputPath}'],
        options: {
          mainEntrypointFile: `${directory}/dist/index.d.ts`,
          reportFolder: `${directory}/api`,
          projectFolder: directory,
          strictChecks: true,
        },
      },
      'doc-model': {
        dependsOn: ['typecheck'],
        executor: '@hass-blocks/publisher:doc-model',
        outputs: ['{options.outputPath}'],
        options: {
          mainEntrypointFile: `${directory}/dist/index.d.ts`,
          projectFolder: directory,
          docModelFolder: 'apps/docs-site/models',
        },
      },
    },
  };

  tree.write(projectJsonPath, newProjectJson);
};
