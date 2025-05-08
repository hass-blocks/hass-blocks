import type { Command } from './command.ts';

/**
 * Another fake command used for unit testing
 */
export interface ThrowCommand extends Command {
  type: 'throw';
}
