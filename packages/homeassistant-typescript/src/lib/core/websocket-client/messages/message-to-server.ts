import { ThrowCommand } from "./throw-command.ts";
import { AuthRequiredMessageResponse } from "./auth.ts";
import { GetStatesCommand } from "./get-states-comand.ts";
import { HelloCommand } from "./hello.ts";
import { SubscribeToEventsMessage } from "./subscribe-to-events.ts";
import { GetConfigCommand } from "./get-config-command.ts";
import { GetPanelsCommand } from "./get-panels-command.ts";
import { GetServicesCommand } from "./get-services-command.ts";
import { CallServiceCommand } from "./call-service-command.ts";
import { GetAreasCommand } from "./get-areas-command.ts";
import { GetEntitiesCommand } from "./get-entities-command.ts";
import { GetDevicesCommand } from "./get-devices-command.ts";
import { SubscribeToTriggerMessage } from "./subscribe-to-trigger.ts";

export type MessageToServer =
  | AuthRequiredMessageResponse
  | HelloCommand
  | SubscribeToEventsMessage
  | SubscribeToTriggerMessage
  | ThrowCommand
  | GetStatesCommand
  | GetAreasCommand
  | GetConfigCommand
  | GetPanelsCommand
  | CallServiceCommand
  | GetEntitiesCommand
  | GetDevicesCommand
  | GetServicesCommand;
