import { Server } from 'socket.io';
import { createServer } from 'node:http';
import type { IEventBus, ILogger } from '@hass-blocks/core';
import type { CorsOptions } from './cors-options.ts';
import type { IFullBlocksClient } from '@hass-blocks/core';
import { commands, events } from './configure-connections.ts';

interface ServerProps {
  cors: CorsOptions;
  client: IFullBlocksClient;
  bus: IEventBus;
  logger: ILogger;
}

/**
 * Generate a Socket.io connection that forwards events published
 * on the provided event bus to the socket
 */
export const getWebsocketServer = ({
  cors,
  client,
  bus,
  logger,
}: ServerProps) => {
  logger.info(`Creating websocket server`);
  const server = createServer((_request, response) => {
    response.writeHead(200, { 'content-type': 'text/plain' });
    response.end('Websocket server is running!');
  });

  const io = new Server(server, {
    cors: {
      origin: cors.origin,
      methods: cors.methods,
    },
  });

  Object.values(commands).forEach((command) =>
    command.backend(io, client, logger),
  );

  Object.values(events).forEach((event) => event.backend(io, bus));

  return server;
};
