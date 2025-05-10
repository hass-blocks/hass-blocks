import { mockEventData } from '@home-assistant';
import type { SubscribeToEventsMessage } from '@websocket-client';

import { delay } from '../index.ts';
import type { Socket } from './socket.ts';
import { send } from './send.ts';

export const handleSubscribe = async (
  socket: Socket,
  message: SubscribeToEventsMessage,
) => {
  send(socket, {
    id: message.id,
    type: 'result',
    success: true,
    result: null,
  });

  const ONE_SECOND = 1000;

  await delay(2 * ONE_SECOND);

  send(socket, { id: message.id, type: 'event', event: mockEventData });
};
