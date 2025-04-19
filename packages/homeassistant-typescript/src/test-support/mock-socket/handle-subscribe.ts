import { mockEventData } from '../../lib/core/client/index.ts';
import { delay } from '../index.ts';

import { Socket } from './socket.ts';
import { send } from './send.ts';
import { SubscribeToEventsMessage } from '../../lib/core/index.ts';

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
