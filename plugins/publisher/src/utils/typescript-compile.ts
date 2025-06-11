import { joinPathFragments } from '@nx/devkit';
import { runCommandWithArgs } from './run-command-with-args';

type BaseArgs = {
  noEmit?: boolean;
};

type Args =
  | ({
      build: string;
    } & BaseArgs)
  | ({
      project: string;
    } & BaseArgs);

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
