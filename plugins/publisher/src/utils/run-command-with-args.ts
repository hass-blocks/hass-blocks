import { execa } from 'execa-cjs';
import { logger } from '@nx/devkit';

export const runCommandWithArgs = async <T extends object>(
  command: string,
  args: T,
) => {
  const argPairs = Object.entries(args)
    .map(([key, value]) => [`--${key}`, value])
    .flatMap(([key, value]) =>
      typeof value === 'string' ? [key, value] : [key],
    );

  const finalCommandToExecute = `${command} ${argPairs.join(' ')}`;

  logger.info(`Executing ${finalCommandToExecute}`);

  await execa(command, argPairs, {
    stdout: ['pipe', 'inherit'],
    stderr: ['pipe', 'inherit'],
  });
};
