import {
  Tree,
  formatFiles,
  generateFiles,
  installPackagesTask,
  joinPathFragments,
  readProjectConfiguration,
} from '@nx/devkit';
import { libraryGenerator } from '@nx/js';
import { CreateLibrarySchema } from './schema.js';
import { join } from 'node:path';
import { updateSwcRc } from './update-swc-rc.ts';
import { updateProjectJson } from './update-project-json.ts';
import { updatePackageJson } from './update-package-json.ts';

const newLibrary = async (tree: Tree, schema: CreateLibrarySchema) => {
  const directory = `packages/${schema.name}`;
  await libraryGenerator(tree, {
    name: schema.name,
    directory,
    publishable: schema.publishable,
    importPath: `@hass-blocks/${schema.name}`,
    linter: 'eslint',
    unitTestRunner: 'vitest',
    minimal: true,
    setParserOptionsProject: true,
    skipTypeCheck: true,
    strict: true,
    testEnvironment: 'node',
    useProjectJson: true,
  });

  const libraryRoot = readProjectConfiguration(tree, schema.name).root;

  generateFiles(tree, joinPathFragments(__dirname, './files'), libraryRoot, {
    ...schema,
    packageDir: libraryRoot,
  });

  tree.write(`${directory}/api/.gitkeep`, '');

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
};

export default newLibrary;
