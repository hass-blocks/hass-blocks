import { Logger } from '../types/index.ts';

const defaultLogger: Logger = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  trace: () => {},

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  debug: () => {},

  info: (message: string) => {
    console.log(message);
  },

  warn: (message: string) => {
    console.log(message);
  },

  error: (message: string) => {
    console.log(message);
  },

  fatal: (message: string) => {
    console.log(message);
  },
};

export const getLogger = (logger?: Logger) => {
  return logger ?? defaultLogger;
};
