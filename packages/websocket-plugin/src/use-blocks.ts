import { handlers } from './handlers.ts';
import { ConnectionStatus, useSocket } from './use-socket.ts';
import { getClientBuilder } from '@hass-blocks/typed-socket-client/client';

/**
 * A Hass Blocks websocket client for React. Provides a mechanism to listen to events on the event bus
 *
 * @param url - The websocket url to connect to. Does not need to start with `ws://`
 */
export const useBlocks = (url: string, port = 80) => {
  const { connectionStatus, errors, socket } = useSocket(url, port);

  const buildClient = getClientBuilder(handlers);

  const client = buildClient(socket);

  if (connectionStatus === ConnectionStatus.NotConnected) {
    return { errors, connectionStatus };
  }
  console.log({ client, connectionStatus });

  return {
    connectionStatus,
    errors,
    client,
  };
};
