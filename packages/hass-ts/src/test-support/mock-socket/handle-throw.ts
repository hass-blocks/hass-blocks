import type { ThrowCommand, ErrorResult } from '../../lib/core/index.ts';
import { TEST_ERROR_CODE, TEST_ERROR_MESSAGE } from '../index.ts';

import type { Socket } from './socket.ts';
import { send } from './send.ts';

export const handleThrow = (socket: Socket, message: ThrowCommand): void => {
  send<ErrorResult>(socket, {
    id: message.id,
    type: 'result',
    success: false,
    error: {
      code: TEST_ERROR_CODE,
      message: TEST_ERROR_MESSAGE,
    },
  });
};
