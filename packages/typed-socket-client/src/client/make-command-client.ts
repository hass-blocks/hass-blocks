import type { Socket } from 'socket.io-client';

import { BlocksWebsocketError } from '@errors';

export const makeCommandClient =
  <TTransmittedData, TArguments extends unknown[]>(eventString: string) =>
  (socket?: Socket) =>
  async (...args: TArguments) => {
    if (!socket || !socket.connected) {
      throw new BlocksWebsocketError('Socket is not connected');
    }
    const responsePromise = new Promise<TTransmittedData>((accept) => {
      socket.once(`${eventString}-response`, (event: TTransmittedData) => {
        accept(event);
      });
    });
    socket.emit(`${eventString}-command`, [...args]);
    return await responsePromise;
  };
