import type { EventForwarderHandlers } from '@types';
import { makeEventForwarderBackend } from './make-event-forwarder-backend.ts';
import { makeEventForwarderClient } from './make-event-forwarder-client.ts';

export const makeEventForwarders = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TMap extends Record<string, (...args: any[]) => any>,
>(
  map: TMap,
) => {
  return Object.entries(map).reduce<
    Record<
      string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      { backend: (...args: any[]) => any; client: (...args: any[]) => any }
    >
  >((accum, [key, value]) => {
    accum[key] = {
      backend: makeEventForwarderBackend(key, value),
      client: makeEventForwarderClient(key),
    };
    return accum;
  }, {}) as EventForwarderHandlers<TMap>;
};
