import { joinPathFragments } from '@nx/devkit';
import { runCommandWithArgs } from './run-command-with-args';

interface BuildModeArgs {
  build: string;
}

interface ProjectModeArgs {
  project: string;
}

type Args = {
  noEmit?: boolean;
} & (BuildModeArgs | ProjectModeArgs);

interface TypeScriptCompileProps {
  args: Args;
  workspaceRoot: string;
}

export const typescriptCompile = async ({
  workspaceRoot,
  args,
}: TypeScriptCompileProps) => {
  const tscPath = joinPathFragments(
    workspaceRoot,
    'node_modules',
    'typescript',
    'bin',
    'tsc',
  );

  await runCommandWithArgs(tscPath, args);
};
