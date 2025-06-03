import type { Socket } from 'socket.io-client';

export type EventForwarderClientHandler<TTransmittedData> = (
  socket?: Socket,
) => (callback: (data: TTransmittedData) => void) => void;
