import type { ConfiguredTypes } from '@types';

/**
 * This function configures the handlers for the server and client. Call first
 * with type parameters represnting the server side data object event emitter,
 * then pass in your command handlers and event forwarders to the returned function, which will
 * then return a config object you can pass into both the server and client
 *
 * @public
 */
export const initialiseTypes =
  <TData, TEmitter>() =>
  <
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TCommandMap extends Record<string, (data: TData, ...args: any[]) => any>,
    TEventForwarderMap extends Record<
      string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (emitter: TEmitter, emit: (arg: any) => void) => any
    >,
  >(config: {
    commands: TCommandMap;
    eventForwarders: TEventForwarderMap;
  }): ConfiguredTypes<TData, TEmitter, TCommandMap, TEventForwarderMap> =>
    config as ConfiguredTypes<TData, TEmitter, TCommandMap, TEventForwarderMap>;
