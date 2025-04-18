import {
  AuthInvalidMessage,
  AuthOkMessage,
  AuthRequiredMessage,
} from "./auth.ts";
import { ErrorResult } from "./error-result.ts";
import { EventMessage } from "./event-message.ts";
import { Result } from "./result.ts";
import { TestArbitraryMessage } from "./test-arbitrary-message.ts";
import { TriggerEventMessage } from "./trigger-event-message.ts";

export type MessageFromServer<T = unknown> =
  | AuthRequiredMessage
  | AuthOkMessage
  | AuthInvalidMessage
  | Result<T>
  | ErrorResult
  | EventMessage
  | TriggerEventMessage<T>
  | TestArbitraryMessage;
