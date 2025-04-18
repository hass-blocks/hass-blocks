import { Command } from "./command.ts";

export interface GetStatesCommand extends Command {
  type: "get_states";
}
