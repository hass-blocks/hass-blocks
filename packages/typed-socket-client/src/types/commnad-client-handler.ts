import type { Socket } from 'socket.io-client';

export type CommandClientHandler<TData, TArguments extends unknown[]> = (
  socket?: Socket,
) => (...args: TArguments) => Promise<TData>;
