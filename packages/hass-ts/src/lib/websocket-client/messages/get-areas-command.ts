import type { Command } from './command.ts';

export interface GetAreasCommand extends Command {
  type: 'config/area_registry/list';
}
