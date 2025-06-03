import type { Server } from 'socket.io';

export type ForwarderHandler<TEmitter> = (
  server: Server,
  emitter: TEmitter,
) => void;
