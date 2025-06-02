import { commands, events } from './configure-connections.ts';
import { useSocket } from './use-socket.ts';

/**
 * A Hass Blocks websocket client for React. Provides a mechanism to listen to events on the event bus
 *
 * @param url - The websocket url to connect to. Does not need to start with `ws://`
 * @returns
 */
export const useBlocks = (url: string) => {
  const { connectionStatus, errors, socket } = useSocket(url);

  const getAutomations = commands.getAutomations.client(socket);
  const getStates = commands.getStates.client(socket);
  const getState = commands.getState.client(socket);
  const getServices = commands.getServices.client(socket);
  const getAreas = commands.getServices.client(socket);
  const callService = commands.callService.client(socket);
  const onHassBlocksEvent = events.hassBlocksEvent.onEventEmit(socket);

  return {
    connectionStatus,
    errors,
    getAutomations,
    getState,
    getStates,
    getAreas,
    callService,
    getServices,
    onHassBlocksEvent,
  };
};
