import { makeCommandClient } from './make-command-client.ts';
import { makeCommandBackend } from './make-command-backend.ts';
import type { CommandHandlers } from '@types';

export const makeCommandHandlers = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TMap extends Record<string, (...args: any[]) => any>,
>(
  map: TMap,
): CommandHandlers<TMap> => {
  return Object.entries(map).reduce<
    Record<
      string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      { backend: (...args: any[]) => any; client: (...args: any[]) => any }
    >
  >((accum, [key, value]) => {
    accum[key] = {
      backend: makeCommandBackend(key, value),
      client: makeCommandClient(key),
    };
    return accum;
  }, {}) as CommandHandlers<TMap>;
};
