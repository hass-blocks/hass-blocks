import type { MessageFromServer } from '@websocket-client';

import type { Socket } from './socket.ts';

export const send = <T extends MessageFromServer>(socket: Socket, data: T) => {
  socket.send(JSON.stringify(data));
};
