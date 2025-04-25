import { Command } from './command.ts';

export interface GetServicesCommand extends Command {
  type: 'get_services';
}
