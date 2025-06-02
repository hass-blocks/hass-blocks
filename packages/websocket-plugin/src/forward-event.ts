import type { Server } from 'socket.io';
import { Socket } from 'socket.io-client';
import { SOCKET_CONNECTION_STRING } from './constants.ts';
import { stringifyCircularJSON } from './stringify-circular-json.ts';
import { BlocksWebsocketError } from './blocks-websocket-error.ts';

const BASE_BLOCKS_EVENT_STRING = 'hass-blocks-event';

export const initialiseWebsocketEventForwarderBuilder = () => {
  let count = 0;
  const eventString = `${BASE_BLOCKS_EVENT_STRING}-${count}`;
  return <TEmitter, TTransmittedData>(
    callback: (input: TEmitter, emit: (data: TTransmittedData) => void) => void,
  ) => {
    const backend = (io: Server, emitter: TEmitter) => {
      io.on(SOCKET_CONNECTION_STRING, (socket) => {
        const emit = (data: TTransmittedData) => {
          socket.emit(eventString, JSON.parse(stringifyCircularJSON(data)));
        };
        callback(emitter, emit);
      });
    };

    const onEventEmit =
      (socket?: Socket) => (callback: (data: TTransmittedData) => void) => {
        if (!socket || !socket.connected) {
          throw new BlocksWebsocketError('Socket is not connected');
        }
        socket.on(eventString, callback);
      };

    count++;
    return { backend, onEventEmit };
  };
};
