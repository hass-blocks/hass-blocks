import { PromiseExecutor } from '@nx/devkit';
import type { BuildDocsSchema } from './schema.js';
import { loadModels } from './lib/load-models.ts';
import { buildMemberPage } from './lib/build-member-page.ts';
import { createDirIfNotExists } from '../../lib/create-dir-if-not-exists.ts';
import { join } from 'path';
import { writeFile } from 'fs/promises';
import { buildIndexPage } from './lib/build-index.page.ts';

const runExecutor: PromiseExecutor<BuildDocsSchema> = async (options) => {
  const { packages, model } = await loadModels(options.modelFolder);

  await Promise.all(
    packages.map(async (packageModel) => {
      const entryPoint = packageModel.members[0];

      const nameParts = packageModel.name.split('/');

      const packageFolder = join(
        options.outputFolder,
        nameParts[nameParts.length - 1],
      );

      createDirIfNotExists(packageFolder);

      const categoryFile = {
        label: packageModel.displayName,
      };

      await writeFile(
        join(packageFolder, `_category_.json`),
        JSON.stringify(categoryFile, null, 2),
      );

      await buildIndexPage(packageModel, packageFolder);

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
