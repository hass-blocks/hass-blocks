import { PromiseExecutor } from '@nx/devkit';
import type { BuildDocsSchema } from './schema.js';
import { loadModels } from './lib/load-models.ts';
import { buildMemberPage } from './lib/build-member-page.ts';
import { join } from 'path';

const runExecutor: PromiseExecutor<BuildDocsSchema> = async (options) => {
  const { packages } = await loadModels(options.modelFolder);

  await Promise.all(
    packages.map(async (packageModel) => {
      const entryPoint = packageModel.members[0];

      const nameParts = packageModel.name.split('/');
      const packageFolder = join(
        options.outputFolder,
        nameParts[nameParts.length - 1],
      );

      await Promise.all(
        entryPoint.members.map(
          async (member) => await buildMemberPage(member, packageFolder),
        ),
      );
    }),
  );

  return {
    success: true,
  };
};

export default runExecutor;
