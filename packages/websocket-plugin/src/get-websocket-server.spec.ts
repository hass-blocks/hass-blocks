import { describe, it, expect } from 'vitest';
import { createServer } from 'http';
import { io as Client } from 'socket.io-client';
import { getWebsocketServer } from './get-websocket-server.ts';
import { mock } from 'vitest-mock-extended';

import {
  IFullBlocksClient,
  IBlock,
  IEventBus,
  HassBlocksEvent,
  LifeCycleEvent,
} from '@hass-blocks/core';
import { SOCKET_EVENT_NAME } from './constants.ts';

// A helper function to start a server on an ephemeral port.
const listenServer = (
  server: ReturnType<typeof createServer>,
): Promise<number> =>
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

// A helper function to close the server.
const closeServer = (server: ReturnType<typeof createServer>): Promise<void> =>
  new Promise((resolve, reject) => {
    server.close((err?: Error) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });

// A helper to create a Socket.IO client for tests.
const createTestClient = (port: number) =>
  Client(`http://localhost:${String(port)}`, {
    transports: ['websocket'],
  });

describe('getWebsocketServer', () => {
  it(
    'should respond with plain text on HTTP GET',
    async () => {
      const fakeBlock = mock<IBlock<unknown, unknown>>();
      fakeBlock.toJson.mockReturnValue({
        id: 'id',
        name: 'name',
        type: 'type',
      });

      const client = mock<IFullBlocksClient>();

      client.getAutomations.mockReturnValue([fakeBlock]);

      // Create a server with a dummy bus.
      const server = getWebsocketServer({
        cors: { origin: 'http://localhost', methods: ['GET', 'POST'] },
        client,
        bus: mock(),
      });

      const port = await listenServer(server);

      const response = await fetch(`http://localhost:${String(port)}`);

      expect(response.ok).toBeTruthy();
      expect(await response.text()).toBe('Websocket server is running!');
      await closeServer(server);
    },
    { timeout: 10_000 },
  );

  it("should emit automations when 'request-automations' is received", async () => {
    const fakeBlock = mock<IBlock<unknown, unknown>>();

    fakeBlock.toJson.mockReturnValue({
      id: 'id',
      name: 'name',
      type: 'type',
    });

    const client = mock<IFullBlocksClient>();

    client.getAutomations.mockReturnValue([fakeBlock]);

    const server = getWebsocketServer({
      cors: { origin: 'http://localhost', methods: ['GET', 'POST'] },
      client,
      bus: mock(),
    });

    const port = await listenServer(server);

    const clientSocket = createTestClient(port);

    const automationsPromise = new Promise<unknown>((resolve) => {
      clientSocket.on('automations', (data: unknown) => {
        resolve(data);
      });
    });

    await new Promise<void>((resolve) => clientSocket.on('connect', resolve));
    clientSocket.emit('request-automations');

    const data = await automationsPromise;
    expect(data).toEqual([fakeBlock.toJson()]);

    clientSocket.disconnect();
    await closeServer(server);
  });

  it("should forward bus events as 'hass-blocks-event' (excluding hass-state-changed)", async () => {
    const fakeBlock = mock<IBlock<unknown, unknown>>();

    fakeBlock.toJson.mockReturnValue({
      id: 'id',
      name: 'name',
      type: 'type',
    });

    const bus = mock<IEventBus>();

    let subscribeCallback: Parameters<typeof bus.subscribe>[0];

    bus.subscribe.mockImplementation((callback) => {
      subscribeCallback = callback;
    });

    const defaultEvent: Omit<
      LifeCycleEvent<'block-finished'>,
      'id' | 'timestamp'
    > = {
      eventType: 'block-finished',
      triggerId: 'bar',
      name: 'bar',
      executeId: 'bar',
      block: { id: 'baz', name: 'bip', type: 'bang' },
    };

    bus.emit.mockImplementation((_type, event) =>
      subscribeCallback({
        id: 'foo',
        timestamp: 'bar',
        type: 'foo',
        output: { continue: false },
        ...defaultEvent,
        ...event,
      }),
    );

    const client = mock<IFullBlocksClient>();

    const server = getWebsocketServer({
      cors: { origin: 'http://localhost', methods: ['GET', 'POST'] },
      client,
      bus,
    });

    const port = await listenServer(server);

    const clientSocket = createTestClient(port);

    // Wait for the event forwarded from the bus.
    const eventPromise = new Promise<HassBlocksEvent>((resolve) => {
      clientSocket.on(SOCKET_EVENT_NAME, (data: HassBlocksEvent) => {
        resolve(data);
      });
    });

    await new Promise<void>((resolve) => clientSocket.on('connect', resolve));

    const testEvent: Omit<
      LifeCycleEvent<'block-started'>,
      'id' | 'timestamp'
    > = {
      eventType: 'block-started',
      triggerId: 'foo',
      name: 'foo',
      executeId: 'foo',
      block: { id: 'foo', name: 'foo', type: 'foo' },
    };

    bus.emit('block-started', testEvent);

    expect(await eventPromise).toEqual({
      ...testEvent,
      id: expect.any(String),
      output: { continue: false },
      timestamp: expect.any(String),
      type: 'foo',
    });
  });
});
