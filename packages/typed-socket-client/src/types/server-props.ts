import type { ConfiguredTypes } from './configured-types.ts';
import type { CorsOptions } from './cors-options.ts';
import type { ILogger } from './i-logger.ts';

/**
 * Configuration for the websocket server
 *
 * @public
 */
export interface ServerProps<
  TData,
  TEmitter,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TCommandMap extends Record<string, (...args: any[]) => any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TEventForwarderMap extends Record<string, (...args: any[]) => any>,
> {
  /**
   * Handler configuration returned from initialiseProps
   */
  handlers: ConfiguredTypes<TData, TEmitter, TCommandMap, TEventForwarderMap>;
  /**
   * Cors configuration for the websocket server
   */
  cors: CorsOptions;
  /**
   * The server side data object that you can make commands against
   */
  data: TData;
  /**
   * The server side event emitter which event forwarders are attached to
   */
  emitter: TEmitter;
  /**
   * A logger
   */
  logger: ILogger;
  /**
   * A map of command handlers
   */
  commands?: TCommandMap;
  /**
   * A map of event forwarders
   */
  eventForwarders?: TEventForwarderMap;
}
