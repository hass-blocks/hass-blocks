import type { Socket } from 'socket.io-client';
import { BlocksWebsocketError } from './blocks-websocket-error.ts';

export const makeEventForwarderClient =
  <TTransmittedData>(eventString: string) =>
  (socket?: Socket) =>
  (callback: (data: TTransmittedData) => void) => {
    if (!socket || !socket.connected) {
      throw new BlocksWebsocketError('Socket is not connected');
    }
    socket.on(eventString, callback);
  };
