import { makeCommandClient } from './make-command-client.ts';
import type { ConfiguredTypes } from '@types';
import { makeEventForwarderClient } from './make-event-forwarder-client.ts';

export const makeClients = <
  TTransmittedData,
  TEmitter,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TMap extends Record<string, (data: TTransmittedData, ...args: any[]) => any>,
  TEventForwarderMap extends Record<
    string,
    (input: TEmitter, emit: (data: TTransmittedData) => void) => void
  >,
>(
  config: ConfiguredTypes<TTransmittedData, TEmitter, TMap, TEventForwarderMap>,
) => {
  const commandClients = Object.keys(config.commands).reduce<
    Record<
      string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (...args: any[]) => any
    >
  >((accum, key) => {
    accum[key] = makeCommandClient(key);
    return accum;
  }, {});

  const eventForwarderClients = Object.keys(config.eventForwarders).reduce<
    Record<
      string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (...args: any[]) => any
    >
  >((accum, key) => {
    accum[key] = makeEventForwarderClient(key);
    return accum;
  }, {});

  return { ...commandClients, ...eventForwarderClients };
};
