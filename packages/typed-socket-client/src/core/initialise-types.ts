import type { ConfiguredTypes } from '@types';

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
