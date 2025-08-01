import { afterEach, describe, expect, it, vi } from 'vitest';

import { createDefaultLogger } from './create-default-logger.ts';

afterEach(() => {
  vi.resetAllMocks();
});

describe('createDefaultLogger', () => {
  it('should create logger with trace as NOOP function', () => {
    const logger = createDefaultLogger();

    expect(logger.trace).toBeTypeOf('function');
    expect(logger.trace('test message')).toBeUndefined();
  });

  it('should create logger with debug as NOOP function', () => {
    const logger = createDefaultLogger();

    expect(logger.debug).toBeTypeOf('function');
    expect(logger.debug('test message')).toBeUndefined();
  });

  it('should create logger with info that calls console.log with emoji', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {
      // NOOP
    });

    const logger = createDefaultLogger();
    logger.info('test message');

    expect(consoleSpy).toHaveBeenCalledWith('😀 test message');

    consoleSpy.mockRestore();
  });

  it('should create logger with warn that calls console.log with emoji', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {
      // NOOP
    });

    const logger = createDefaultLogger();
    logger.warn('test warning');

    expect(consoleSpy).toHaveBeenCalledWith('😔 test warning');

    consoleSpy.mockRestore();
  });

  it('should create logger with error that calls console.log with emoji', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {
      // NOOP
    });

    const logger = createDefaultLogger();
    logger.error('test error');

    expect(consoleSpy).toHaveBeenCalledWith('😡 test error');

    consoleSpy.mockRestore();
  });

  it('should create logger with fatal that calls console.log with emoji', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {
      // NOOP
    });

    const logger = createDefaultLogger();
    logger.fatal('test fatal');

    expect(consoleSpy).toHaveBeenCalledWith('💀 test fatal');

    consoleSpy.mockRestore();
  });
});
