import type { Server } from 'socket.io';
import { SOCKET_CONNECTION_STRING, stringifyCircularJSON } from '@core';

export const makeEventForwarderBackend =
  <TEmitter, TTransmittedData>(
    eventString: string,
    callback: (input: TEmitter, emit: (data: TTransmittedData) => void) => void,
  ) =>
  (io: Server, emitter: TEmitter) => {
    io.on(SOCKET_CONNECTION_STRING, (socket) => {
      const emit = (data: TTransmittedData) => {
        const dataToEmit =
          typeof data === 'object'
            ? JSON.parse(stringifyCircularJSON(data))
            : data;
        socket.emit(eventString, dataToEmit);
      };
      callback(emitter, emit);
    });
  };
