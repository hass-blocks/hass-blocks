import type { CommandClientHandler } from './commnad-client-handler.ts';
import type { GetRest } from './get-rest.ts';

export type CommandClientHandlers<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TData,
  TCommandMap extends Record<string, (data: TData, ...args: any[]) => any>,
> = {
  [K in keyof TCommandMap]: ReturnType<
    CommandClientHandler<
      ReturnType<TCommandMap[K]>,
      GetRest<Parameters<TCommandMap[K]>>
    >
  >;
};
