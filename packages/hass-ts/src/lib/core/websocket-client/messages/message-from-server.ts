import type {
  AuthInvalidMessage,
  AuthOkMessage,
  AuthRequiredMessage,
} from './auth.ts';
import type { ErrorResult } from './error-result.ts';
import type { EventMessage } from './event-message.ts';
import type { Result } from './result.ts';
import type { TestArbitraryMessage } from './test-arbitrary-message.ts';
import type { TriggerEventMessage } from './trigger-event-message.ts';

export type MessageFromServer<T = unknown> =
  | AuthRequiredMessage
  | AuthOkMessage
  | AuthInvalidMessage
  | Result<T>
  | ErrorResult
  | EventMessage
  | TriggerEventMessage<T>
  | TestArbitraryMessage;
