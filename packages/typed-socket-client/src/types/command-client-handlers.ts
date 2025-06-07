import type { CommandClientHandler } from './command-client-handler.ts';
import type { GetRest } from './get-rest.ts';

/**
 * A map of command clients
 *
 * @public
 */
export type CommandClientHandlers<
  TData,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TCommandMap extends Record<string, (data: TData, ...args: any[]) => any>,
> = {
  [K in keyof TCommandMap]: ReturnType<
    CommandClientHandler<
      ReturnType<TCommandMap[K]>,
      GetRest<Parameters<TCommandMap[K]>>
    >
  >;
};
