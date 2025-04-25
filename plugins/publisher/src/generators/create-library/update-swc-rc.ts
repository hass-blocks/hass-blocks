import { Tree } from '@nx/devkit';
import { join } from 'path';

export const updateSwcRc = (packageFolder: string, tree: Tree) => {
  const swcrcPath = join(packageFolder, `.swcrc`);

  const swcrc = JSON.parse(tree.read(swcrcPath, 'utf8') ?? '{}');

  const newSwcRc = {
    ...swcrc,
    jsc: {
      ...swcrc.jsc,
      experimental: {
        plugins: [['swc-plugin-allow-importing-ts-extensions', {}]],
      },
    },
  };
  tree.write(swcrcPath, newSwcRc);
};
