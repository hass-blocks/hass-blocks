import { execa } from 'execa';
import { joinPathFragments } from '@nx/devkit';

interface TypeScriptCompileProps {
  projectFile: string;
  workspaceRoot: string;
}
export const typescriptCompile = async ({
  projectFile,
  workspaceRoot,
}: TypeScriptCompileProps) => {
  const tscPath = joinPathFragments(
    workspaceRoot,
    'node_modules',
    'typescript',
    'bin',
    'tsc',
  );

  await execa({
    stdout: ['pipe', 'inherit'],
  })`${tscPath} --build ${projectFile}`;
};
