import type { Socket } from 'socket.io-client';

/**
 * A function that, once provided with a socket, returns a function that takes a subscription callback
 *
 * @public
 */
export type EventForwarderClientHandler<TTransmittedData> = (
  socket?: Socket,
) => (callback: (data: TTransmittedData) => void) => void;
