import { joinPathFragments } from '@nx/devkit';

export const nodeModulesBinPath = (workspaceRoot: string, bin: string) => {
  return joinPathFragments(workspaceRoot, 'node_modules', '.bin', bin);
};
