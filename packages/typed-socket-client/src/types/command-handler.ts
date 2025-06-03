import type { Server } from 'socket.io';
import type { ILogger } from './i-logger.ts';

export type CommandHandler<TData> = (
  server: Server,
  data: TData,
  logger: ILogger,
) => void;
