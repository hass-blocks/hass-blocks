import { Command } from './command.ts';

/**
 * Another fake command used for testing
 */
export interface ThrowCommand extends Command {
  type: 'throw';
}
