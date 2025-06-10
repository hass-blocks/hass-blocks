import { type PromiseExecutor, logger } from '@nx/devkit';
import { typescriptCompile } from '../../utils/index';
import { join } from 'path';

interface CheckTypesExecutor {
  buildMode: true;
  tsconfigFile: string;
}

export const checkTypesExecutor: PromiseExecutor<CheckTypesExecutor> = async (
  options,
  context,
) => {
  const { root } = context;
  const { buildMode, tsconfigFile } = options;

  const projectFile = join(root, tsconfigFile);

  try {
    const tsconfigArgs =
      (buildMode ?? true)
        ? {
            build: projectFile,
          }
        : {
            project: projectFile,
          };

    await typescriptCompile({
      workspaceRoot: root,
      args: { ...tsconfigArgs },
    });

    return { success: true };
  } catch (error) {
    logger.error(error);
    return { success: false };
  }
};

export default checkTypesExecutor;
