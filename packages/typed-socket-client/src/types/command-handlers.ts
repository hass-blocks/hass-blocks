import type { CommandHandler } from './command-handler.ts';

export type CommandHandlers<
  TData,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TMap extends Record<string, (data: TData, ...args: any[]) => any>,
> = {
  [K in keyof TMap]: CommandHandler<ReturnType<TMap[K]>>;
};
