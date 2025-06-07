import type { Socket } from 'socket.io-client';

/**
 * A function that returns a command client when given a socket
 *
 * @public
 */
export type CommandClientHandler<TData, TArguments extends unknown[]> = (
  socket?: Socket,
) => (...args: TArguments) => Promise<TData>;
