import { Tree } from '@nx/devkit';
import { join } from 'path';

export const updatePackageJson = (
  packageFolder: string,
  directory: string,
  tree: Tree,
) => {
  const packageJsonPath = join(packageFolder, `package.json`);

  const packageJson = JSON.parse(tree.read(packageJsonPath, 'utf8') ?? '{}');

  const newPackageJson = {
    ...packageJson,
    engines: {
      node: '>=18',
    },
    license: 'MIT',
    exports: {
      './package.json': './package.json',
      '.': {
        import: './dist/index.js',
        types: './dist/public.d.ts',
        development: './src/index.ts',
        default: './dist/index.js',
      },
    },
    publishConfig: {
      access: 'public',
    },
  };

  tree.write(packageJsonPath, newPackageJson);
};
