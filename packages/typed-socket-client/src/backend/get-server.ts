import { Server } from 'socket.io';
import { createServer, type Server as NodeServer } from 'node:http';

import type { ServerProps } from '@types';

import { makeBackends } from './make-backends.ts';

/**
 * Generate a websocket server configured with a specific set of handlers
 *
 * @public
 */

export const getServer = <
  TData,
  TEmitter,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TCommandMap extends Record<string, (data: TData, ...args: any[]) => any>,
  TEventForwarderMap extends Record<
    string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (emitter: TEmitter, emit: (arg: any) => void) => any
  >,
>({
  cors,
  logger,
  data,
  handlers,
  emitter,
}: ServerProps<
  TData,
  TEmitter,
  TCommandMap,
  TEventForwarderMap
>): NodeServer => {
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

  const { commandBackends, eventForwarderBackends } = makeBackends(handlers);

  Object.values(commandBackends).forEach((value) => value(io, data, logger));

  if (eventForwarderBackends) {
    Object.values(eventForwarderBackends).forEach((value) =>
      value(io, emitter),
    );
  }
  return server;
};
