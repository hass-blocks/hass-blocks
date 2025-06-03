import { Server } from 'socket.io';
import { createServer } from 'node:http';
import type { ILogger } from '@hass-blocks/core';
import type { CorsOptions } from './cors-options.ts';
import type { IFullBlocksClient } from '@hass-blocks/core';
import { initialiseWebsocketCommandBuilder } from './make-websocket-command.ts';
import { initialiseWebsocketEventForwarderBuilder } from './forward-event.ts';

export interface ServerProps<TData, TEmitter> {
  cors: CorsOptions;
  client: IFullBlocksClient;
  data: TData;
  emitter: TEmitter;
  logger: ILogger;
  commands: CommandHandler<TData>[];
  eventForwarders: EventForwarder<TEmitter>[];
}

type CommandHandler<T> = (server: Server, data: T, logger: ILogger) => void;
type EventForwarder<T> = (server: Server, data: T) => void;

/**
 * Generate a Socket.io server, along with functions that can be used to provide handlers
 * and clients for commands, as well as event forwarders
 */
export const makeWebsocketServer = () => {
  const makeCommand = initialiseWebsocketCommandBuilder();
  const forwardEvent = initialiseWebsocketEventForwarderBuilder();

  const buildServer = <TData, TEmitter>({
    commands,
    cors,
    logger,
    emitter,
    data,
    eventForwarders,
  }: ServerProps<TData, TEmitter>) => {
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
    commands.forEach((command) => command(io, data, logger));
    eventForwarders.forEach((forwarder) => forwarder(io, emitter));

    return server;
  };

  return { makeCommand, buildServer, forwardEvent };
};
