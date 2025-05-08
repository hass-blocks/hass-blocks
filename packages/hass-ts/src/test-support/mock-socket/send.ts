import type { MessageFromServer } from '../../lib/core/index.ts';
import type { Socket } from './socket.ts';

export const send = <T extends MessageFromServer>(socket: Socket, data: T) => {
  socket.send(JSON.stringify(data));
};
