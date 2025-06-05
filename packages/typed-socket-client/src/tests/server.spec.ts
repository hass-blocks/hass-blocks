import { initialiseTypes } from '@core';
import { getClientBuilder } from '@client';
import { getServer } from '@backend';

import type { ILogger } from '@types';
import { io as Client, type Socket } from 'socket.io-client';
import type { Server } from 'http';
import { mock } from 'vitest-mock-extended';
import EventEmitter from 'events';

const listenServer = (server: Server): Promise<number> =>
  new Promise((resolve, reject) => {
    server.listen(0, () => {
      const address = server.address();
      if (address && typeof address === 'object') {
        resolve(address.port);
      } else {
        reject(new Error('Failed to get server port'));
      }
    });
  });

const createTestWebsocketClient = (port: number) => {
  const socket = Client(`http://localhost:${String(port)}`, {
    transports: ['websocket'],
  });

  return new Promise<typeof socket>((accept) =>
    socket.on('connect', () => {
      accept(socket);
    }),
  );
};

const closeServer = async (server: Server, client: Socket): Promise<void> => {
  client.close();
  await new Promise<void>((resolve, reject) => {
    server.close((err?: Error) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

describe('socket client generator', () => {
  it('generates a server that allows you to call the data object from a provided handler', async () => {
    interface BackendObject {
      callMe: () => { foo: string };
    }
    const data: BackendObject = {
      callMe: () => ({
        foo: 'bar',
      }),
    };

    const initialiseHandlers = initialiseTypes<BackendObject, unknown>();

    const handlers = initialiseHandlers({
      commands: {
        callMe: (data: BackendObject) => data.callMe(),
      },
      eventForwarders: {},
    });

    const server = getServer({
      handlers,
      emitter: mock(),
      data,
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
      logger: mock(),
    });

    const port = await listenServer(server);
    const clientSocket = await createTestWebsocketClient(port);
    const buildClient = getClientBuilder(handlers);
    const client = buildClient(clientSocket);
    const result = await client.callMe();

    expect(result).toEqual({
      foo: 'bar',
    });

    await closeServer(server, clientSocket);
  });

  it('correctly passes arguments to the handler', async () => {
    interface BackendObject {
      callMe: () => { foo: string };
      functionWithArguments: (
        argOne: string,
        aNumber: number,
      ) => { baz: string; bop: number };
    }
    const data: BackendObject = {
      callMe: () => ({
        foo: 'bar',
      }),
      functionWithArguments: (argOne: string, aNumber: number) => ({
        baz: argOne,
        bop: aNumber,
      }),
    };

    const initialiseHandlers = initialiseTypes<BackendObject, unknown>();

    const handlers = initialiseHandlers({
      commands: {
        callMe: (data: BackendObject) => data.callMe(),
        functionWithArguments: (
          data: BackendObject,
          argOne: string,
          aNumber: number,
        ) => data.functionWithArguments(argOne, aNumber),
      },
      eventForwarders: {},
    });

    const server = getServer({
      data,
      handlers,
      emitter: mock(),
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
      logger: mock(),
    });

    const port = await listenServer(server);
    const clientSocket = await createTestWebsocketClient(port);
    const buildClient = getClientBuilder(handlers);
    const client = buildClient(clientSocket);
    const result = await client.functionWithArguments('bif', 10);
    expect(result).toEqual({ baz: 'bif', bop: 10 });
    await closeServer(server, clientSocket);
  });

  it('correctly forwards events through the socket', async () => {
    const emitter = new EventEmitter();

    const logger = mock<ILogger>();

    const initialiseHandlers = initialiseTypes<unknown, EventEmitter>();

    const handlers = initialiseHandlers({
      commands: {},
      eventForwarders: {
        onEvent: (emitter: EventEmitter, emit: (data: string) => void) =>
          emitter.on('foo', (data: string) => {
            emit(data);
          }),
      },
    });

    const server = getServer({
      data: mock(),
      handlers,
      logger,
      cors: {
        origin: '*',
        methods: ['GET'],
      },
      emitter,
    });

    const port = await listenServer(server);
    const clientSocket = await createTestWebsocketClient(port);
    const buildClient = getClientBuilder(handlers);
    const client = buildClient(clientSocket);

    const eventPromise = new Promise<string>((accept) => {
      client.onEvent((foo) => {
        accept(foo);
      });
    });

    emitter.emit('foo', 'bar');

    const result = await eventPromise;

    expect(result).toEqual('bar');

    await closeServer(server, clientSocket);
  });
});
