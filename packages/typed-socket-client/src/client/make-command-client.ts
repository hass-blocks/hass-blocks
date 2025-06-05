import type { Socket } from 'socket.io-client';

import { BlocksWebsocketError } from '@errors';

export const makeCommandClient =
  <TTransmittedData, TArguments extends unknown[]>(eventString: string) =>
  (socket?: Socket) =>
  async (...args: TArguments) => {
    if (!socket) {
      throw new BlocksWebsocketError('A valid socket wasnt provided');
    }

    if (socket && !socket.connected) {
      await new Promise<void>((accept) =>
        socket.once('connect', () => accept()),
      );
    }

    const responsePromise = new Promise<TTransmittedData>((accept) => {
      socket.once(`${eventString}-response`, (event: TTransmittedData) => {
        accept(event);
      });
    });
    socket.emit(`${eventString}-command`, [...args]);
    return await responsePromise;
  };
