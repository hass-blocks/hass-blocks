import type { CommandHandler } from 'src/types/command-handler.ts';
import { makeCommandBackend } from './make-command-backend.ts';
import type { ConfiguredTypes } from '@types';
import { makeEventForwarderBackend } from './make-event-forwarder-backend.ts';
import type { ForwarderHandler } from 'src/types/forwarder-handler.ts';

export const makeBackends = <
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
  const commandBackends = Object.entries(config.commands).reduce<
    Record<string, CommandHandler<TTransmittedData>>
  >((accum, [key, value]) => {
    accum[key] = makeCommandBackend(key, value);
    return accum;
  }, {});

  const eventForwarderBackends = Object.entries(config.eventForwarders).reduce<
    Record<string, ForwarderHandler<TEmitter>>
  >((accum, [key, value]) => {
    accum[key] = makeEventForwarderBackend(key, value);
    return accum;
  }, {});

  return { commandBackends, eventForwarderBackends };
};
