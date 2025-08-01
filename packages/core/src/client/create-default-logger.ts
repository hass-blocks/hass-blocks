import type { ILogger } from '@types';

export const createDefaultLogger = (): ILogger => ({
  trace: () => {
    // NOOP
  },
  debug: () => {
    // NOOP
  },
  info: (message) => console.log(`😀 ${message}`),
  warn: (message) => console.log(`😔 ${message}`),
  error: (message) => console.log(`😡 ${message}`),
  fatal: (message) => console.log(`💀 ${message}`),
});
