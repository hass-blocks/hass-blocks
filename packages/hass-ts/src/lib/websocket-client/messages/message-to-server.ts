import type { ThrowCommand } from './throw-command.ts';
import type { AuthRequiredMessageResponse } from './auth.ts';
import type { GetStatesCommand } from './get-states-comand.ts';
import type { HelloCommand } from './hello.ts';
import type { SubscribeToEventsMessage } from './subscribe-to-events.ts';
import type { GetConfigCommand } from './get-config-command.ts';
import type { GetPanelsCommand } from './get-panels-command.ts';
import type { GetServicesCommand } from './get-services-command.ts';
import type { CallServiceCommand } from './call-service-command.ts';
import type { GetAreasCommand } from './get-areas-command.ts';
import type { GetEntitiesCommand } from './get-entities-command.ts';
import type { GetDevicesCommand } from './get-devices-command.ts';
import type { SubscribeToTriggerMessage } from './subscribe-to-trigger.ts';
import type { FireEventCommand } from './fire-event-command.ts';

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
  | FireEventCommand
  | GetServicesCommand;
