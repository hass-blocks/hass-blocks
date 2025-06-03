import type { CommandClientHandler } from './commnad-client-handler.ts';
import type { GetRest } from './get-rest.ts';

export type CommandClientHandlers<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TMap extends Record<string, (...argss: any[]) => any>,
> = {
  [K in keyof TMap]: ReturnType<
    CommandClientHandler<ReturnType<TMap[K]>, GetRest<Parameters<TMap[K]>>>
  >;
};
