import { buildClient } from './configure-server.ts';
import { useSocket } from './use-socket.ts';

/**
 * A Hass Blocks websocket client for React. Provides a mechanism to listen to events on the event bus
 *
 * @param url - The websocket url to connect to. Does not need to start with `ws://`
 * @returns
 */
export const useBlocks = (url: string) => {
  const { connectionStatus, errors, socket } = useSocket(url);

  const client = buildClient(socket);

  return {
    connectionStatus,
    errors,
    client,
  };
};
