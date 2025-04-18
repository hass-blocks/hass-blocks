import { Command } from "./command.ts";

export interface GetEntitiesCommand extends Command {
  type: "config/entity_registry/list";
}
