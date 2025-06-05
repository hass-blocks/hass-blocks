import type { ConfiguredTypes } from './configured-types.ts';
import type { CorsOptions } from './cors-options.ts';
import type { ILogger } from './i-logger.ts';

export interface ServerProps<
  TData,
  TEmitter,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TCommandMap extends Record<string, (...args: any[]) => any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TEventForwarderMap extends Record<string, (...args: any[]) => any>,
> {
  handlers: ConfiguredTypes<TData, TEmitter, TCommandMap, TEventForwarderMap>;
  cors: CorsOptions;
  data: TData;
  emitter: TEmitter;
  logger: ILogger;
  commands?: TCommandMap;
  eventForwarders?: TEventForwarderMap;
}
