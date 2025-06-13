import type { Server } from 'socket.io';
import type { ILogger } from '@types';
import { SOCKET_CONNECTION_STRING, stringifyCircularJSON } from '@core';

export const makeCommandBackend =
  <TArguments extends unknown[], TServerData, TTransmittedData>(
    eventString: string,
    callback: (
      source: TServerData,
      ...args: TArguments
    ) => TTransmittedData | Promise<TTransmittedData>,
  ) =>
  (io: Server, source: TServerData, logger: ILogger) => {
    io.on(SOCKET_CONNECTION_STRING, (socket) => {
      logger.debug(`${eventString} connected to socket`);
      socket.on(`${eventString}-command`, async (args: TArguments) => {
        logger.trace(
          `Received ${eventString}-command with args ${JSON.stringify(args, null, 2)}`,
        );
        const result = await callback(source, ...args);
        const resultToEmit =
          typeof result === 'object'
            ? JSON.parse(stringifyCircularJSON(result))
            : result;
        socket.emit(`${eventString}-response`, resultToEmit);
      });
    });
  };
