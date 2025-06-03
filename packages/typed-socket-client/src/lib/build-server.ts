import { Server } from 'socket.io';
import { createServer, type Server as NodeServer } from 'node:http';

import { makeCommandHandlers } from './make-command-handlers.ts';
import type { Socket } from 'socket.io-client';
import { makeEventForwarders } from './make-event-forwarders.ts';
import type {
  CommandClientHandlers,
  EventForwarderClientHandlers,
  ServerProps,
} from '@types';

/**
 *
 * Pass in a data object along with an object representing a set of commands.
 *
 * For the commands, each value in the object is a function which will be passed
 * the data object as its first argument, and then any further arguments that you specify
 *
 * The function then returns
 * - A node http server initialised with a socket.io connection
 * - A clientBuilder object
 *
 * On the frontend, if you pass in to the clientBuilder a socket.io client socket that is connected to the generated server
 * you will then get a client with methods for each command, allowing you to call them without having to think about the underlying
 * websocket
 *
 * @public
 */
export const buildServer = <
  TData,
  TEmitter,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TCommandMap extends Record<string, (...args: any[]) => any>,
  TEventForwarderMap extends Record<
    string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (emitter: any, emit: (arg: any) => void) => any
  >,
>({
  commands,
  cors,
  eventForwarders,
  logger,
  data,
  emitter,
}: ServerProps<TData, TEmitter, TCommandMap, TEventForwarderMap>): {
  server: NodeServer;
  clientBuilder: (
    socket: Socket,
  ) => CommandClientHandlers<TCommandMap> &
    EventForwarderClientHandlers<TEventForwarderMap>;
} => {
  logger.info(`Creating websocket server`);
  const server = createServer((_request, response) => {
    response.writeHead(200, { 'content-type': 'text/plain' });
    response.end('Websocket server is running!');
  });

  const commandHandlers = commands ? makeCommandHandlers(commands) : undefined;
  const eventForwarderHandlers = eventForwarders
    ? makeEventForwarders(eventForwarders)
    : undefined;

  const io = new Server(server, {
    cors: {
      origin: cors.origin,
      methods: cors.methods,
    },
  });

  if (commandHandlers) {
    Object.values(commandHandlers).forEach((value) =>
      value.backend(io, data, logger),
    );
  }

  if (eventForwarderHandlers) {
    Object.values(eventForwarderHandlers).forEach((value) =>
      value.backend(io, emitter),
    );
  }

  const clientBuilder = (socket: Socket) => {
    const commandClient = commandHandlers
      ? Object.fromEntries(
          Object.entries(commandHandlers).map(([key, value]) => [
            key,
            value.client(socket),
          ]),
        )
      : {};
    const eventForwarderClient = eventForwarderHandlers
      ? Object.fromEntries(
          Object.entries(eventForwarderHandlers).map(([key, value]) => [
            key,
            value.client(socket),
          ]),
        )
      : {};

    return {
      ...commandClient,
      ...eventForwarderClient,
    } as CommandClientHandlers<TCommandMap> &
      EventForwarderClientHandlers<TEventForwarderMap>;
  };

  return { server, clientBuilder };
};
