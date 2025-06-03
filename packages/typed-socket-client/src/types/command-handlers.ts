import type { CommandHandler } from './command-handler.ts';
import type { CommandClientHandler } from './commnad-client-handler.ts';
import type { GetRest } from './get-rest.ts';

export type CommandHandlers<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TMap extends Record<string, (...argss: any[]) => any>,
> = {
  [K in keyof TMap]: {
    backend: CommandHandler<ReturnType<TMap[K]>>;
    client: CommandClientHandler<
      ReturnType<TMap[K]>,
      GetRest<Parameters<TMap[K]>>
    >;
  };
};
