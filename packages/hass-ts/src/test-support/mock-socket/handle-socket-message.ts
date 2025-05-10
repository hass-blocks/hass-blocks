import type { MessageToServer } from '@websocket-client';
import { safeJsonParse } from '@utils';

import { handleAuth } from './handle-auth.ts';
import { handleHello } from './handle-hello.ts';
import type { Socket } from './socket.ts';
import { handleSubscribe } from './handle-subscribe.ts';
import { handleThrow } from './handle-throw.ts';

export const handleSocketMessage = async (
  socket: Socket,
  data: Buffer | ArrayBuffer | Buffer[],
  token: string,
  version: string,
  sessionNumber: number,
) => {
  if (!(data instanceof Buffer)) {
    return;
  }
  const text = data.toString('utf-8');

  const message = safeJsonParse<MessageToServer>(text);

  switch (message.type) {
    case 'auth':
      handleAuth(socket, message, token, version, sessionNumber);
      break;

    case 'hello':
      handleHello(socket, message);
      break;

    case 'subscribe_events':
      await handleSubscribe(socket, message);
      break;

    case 'throw':
      handleThrow(socket, message);
  }
};
