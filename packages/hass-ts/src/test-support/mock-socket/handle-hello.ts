import type { HelloCommand } from '@websocket-client';
import { send } from './send.ts';
import type { Socket } from './socket.ts';

export const handleHello = (socket: Socket, message: HelloCommand) => {
  send(socket, {
    id: message.id,
    type: 'result',
    success: true,
    result: {
      message: 'hey!',
    },
  });
};
