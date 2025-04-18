import { Command } from "./command.ts";

export interface GetDevicesCommand extends Command {
  type: "config/device_registry/list";
}
