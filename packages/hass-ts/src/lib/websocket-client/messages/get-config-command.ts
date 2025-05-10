import type { Command } from './command.ts';

export interface GetConfigCommand extends Command {
  type: 'get_config';
}
