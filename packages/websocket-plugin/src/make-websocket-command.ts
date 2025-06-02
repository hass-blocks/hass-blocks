import type { Server } from 'socket.io';
import { Socket } from 'socket.io-client';
import { SOCKET_CONNECTION_STRING } from './constants.ts';
import { BlocksWebsocketError } from './blocks-websocket-error.ts';
import { stringifyCircularJSON } from './stringify-circular-json.ts';
import type { ILogger } from '@hass-blocks/core';

const BASE_BLOCKS_COMMAND_STRING = 'hass-blocks-command';

export const initialiseWebsocketCommandBuilder = () => {
  let count = 0;
  return <TServerData, TTransmittedData, TArguments extends unknown[]>(
    callback: (
      source: TServerData,
      ...args: TArguments
    ) => TTransmittedData | Promise<TTransmittedData>,
  ) => {
    const eventString = `${BASE_BLOCKS_COMMAND_STRING}-${count}`;
    const backend = (io: Server, source: TServerData, logger: ILogger) => {
      io.on(SOCKET_CONNECTION_STRING, (socket) => {
        socket.on(`${eventString}-command`, async (args: TArguments) => {
          logger.debug(`Received ${eventString} command`);
          socket.emit(
            `${eventString}-response`,
            JSON.parse(stringifyCircularJSON(await callback(source, ...args))),
          );
        });
      });
    };

    const client =
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

    count++;
    return { backend, client };
  };
};
