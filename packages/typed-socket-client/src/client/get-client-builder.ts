import type { Socket } from 'socket.io-client';
import { makeClients } from './make-clients.ts';
import type {
  CommandClientHandlers,
  ConfiguredTypes,
  EventForwarderClientHandlers,
} from '@types';

/**
 * Will generate a series of functions that, when provided with a connected socket
 * will allow you to call commands on the backend
 *
 * @param config - configuration from initialiseTypes
 *
 * @public
 */
export const getClientBuilder = <
  TData,
  TEmitter,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TCommandMap extends Record<string, (data: TData, ...args: any[]) => any>,
  TEventForwarderMap extends Record<
    string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (emitter: TEmitter, emit: (arg: any) => void) => any
  >,
>(
  config: ConfiguredTypes<TData, TEmitter, TCommandMap, TEventForwarderMap>,
) => {
  const commandClients = makeClients<
    TData,
    TEmitter,
    TCommandMap,
    TEventForwarderMap
  >(config);

  return (
    socket?: Socket,
  ): CommandClientHandlers<TData, TCommandMap> &
    EventForwarderClientHandlers<TEmitter, TEventForwarderMap> => {
    const clients = commandClients
      ? Object.fromEntries(
          Object.entries(commandClients).map(([key, value]) => [
            key,
            value(socket),
          ]),
        )
      : {};

    return clients as CommandClientHandlers<TData, TCommandMap> &
      EventForwarderClientHandlers<TEmitter, TEventForwarderMap>;
  };
};
