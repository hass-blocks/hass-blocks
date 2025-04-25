import { Command } from './command.ts';

export interface GetPanelsCommand extends Command {
  type: 'get_panels';
}
