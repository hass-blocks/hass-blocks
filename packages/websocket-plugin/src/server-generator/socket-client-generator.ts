import type { Server } from 'socket.io';
import { Socket } from 'socket.io-client';
import { SOCKET_CONNECTION_STRING } from './constants.ts';
import { BlocksWebsocketError } from './blocks-websocket-error.ts';
import { stringifyCircularJSON } from './stringify-circular-json.ts';
import type {
  ICallServiceParams,
  IFullBlocksClient,
  ILogger,
} from '@hass-blocks/core';

type CommandHandler<TData> = (
  server: Server,
  data: TData,
  logger: ILogger,
) => void;

type ClientHandler<TData, TArguments extends unknown[]> = (
  socket?: Socket,
) => (...args: TArguments) => TData;

type GetRest<T extends any[]> = T extends [unknown, ...infer Rest]
  ? Rest
  : never;

type Handlers<TMap extends Record<string, (...argss: any[]) => any>> = {
  [K in keyof TMap]: {
    backend: CommandHandler<ReturnType<TMap[K]>>;
    client: ClientHandler<ReturnType<TMap[K]>, GetRest<Parameters<TMap[K]>>>;
  };
};

export const socketClientGenerator = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TMap extends Record<string, (...args: any[]) => any>,
>(
  map: TMap,
): Handlers<TMap> => {
  const backend =
    <TArguments extends unknown[], TServerData, TTransmittedData>(
      eventString: string,
      callback: (
        source: TServerData,
        ...args: TArguments
      ) => TTransmittedData | Promise<TTransmittedData>,
    ) =>
    (io: Server, source: TServerData, logger: ILogger) => {
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

  return Object.entries(map).reduce<
    Record<
      string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      { backend: (...args: any[]) => any; client: (...args: any[]) => any }
    >
  >((accum, [key, value]) => {
    accum[key] = {
      backend: backend(key, value),
      client: client(key),
    };
    return accum;
  }, {}) as Handlers<TMap>;
};

const baz = socketClientGenerator({
  getAutomations: (client: IFullBlocksClient) => {
    const automations = client.getAutomations();
    return automations.map((automation) => automation.toJson());
  },
  getAreas: (client: IFullBlocksClient) => client.getAreas(),
  getStates: (client: IFullBlocksClient) => client.getStates(),
  getState: (client: IFullBlocksClient, id: string) => client.getState(id),
  getServices: (client: IFullBlocksClient) => client.getServices(),
  callService: async (
    client: IFullBlocksClient,
    params: Omit<ICallServiceParams, 'id' | 'type'>,
  ) => await client.callService(params),
});
