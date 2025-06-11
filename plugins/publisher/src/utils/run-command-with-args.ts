import { execa } from 'execa-cjs';
import { logger } from '@nx/devkit';

const convertObjectToFlags = <
  T extends Record<string, boolean | string | string[]>,
>(
  args: T,
) => {
  return Object.entries(args)
    .map(([key, value]) => [`--${key}`, value] as const)
    .flatMap(([key, value]) =>
      (typeof value === 'string'
        ? Array.isArray(value)
          ? value.map((item) => [key, item])
          : [key, value]
        : [key]
      ).flat(),
    );
};

export const runCommandWithArgs = async <
  T extends Record<string, boolean | string | string[]>,
>(
  command: string,
  ...args: (string | T)[]
) => {
  const argPairs = args.flatMap((arg) =>
    typeof arg === 'string' ? [arg] : convertObjectToFlags(arg),
  );

  const finalCommandToExecute = `${command} ${argPairs.join(' ')}`;

  logger.info(`Executing ${finalCommandToExecute}`);

  await execa(command, argPairs, {
    stdout: ['pipe', 'inherit'],
    stderr: ['pipe', 'inherit'],
  });
};
