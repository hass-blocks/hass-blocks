import { afterEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import type { Runnable } from '@types';
import { ExecutionAbortedError } from '@errors';

import { RunQueue } from './run-queue.ts';

afterEach(() => {
  vi.resetAllMocks();
});

describe('RunQueue', () => {
  it('should abort all queued items when abortAll is called', () => {
    const mockRunnable1 = mock<Runnable>();
    const mockRunnable2 = mock<Runnable>();

    const queue = new RunQueue();

    queue.enqueue(mockRunnable1);
    queue.enqueue(mockRunnable2);

    queue.abortAll();

    expect(mockRunnable1.abort).toHaveBeenCalled();
    expect(mockRunnable2.abort).toHaveBeenCalled();
  });

  it('should handle ExecutionAbortedError without re-throwing', async () => {
    const mockRunnable = mock<Runnable>();
    mockRunnable.run.mockRejectedValue(new ExecutionAbortedError('test'));

    const queue = new RunQueue();
    queue.enqueue(mockRunnable);

    await new Promise((resolve) => setTimeout(resolve, 10));

    expect(mockRunnable.run).toHaveBeenCalled();

    queue.shutdown();
  });

  it('should stop processing new items after shutdown', async () => {
    const queue = new RunQueue();

    queue.shutdown();

    const mockRunnable = mock<Runnable>();
    queue.enqueue(mockRunnable);

    await new Promise((resolve) => setTimeout(resolve, 10));

    expect(mockRunnable.run).not.toHaveBeenCalled();
  });

  it('should re-throw non-ExecutionAbortedError errors', async () => {
    const testError = new Error('Non-abort error');
    const mockRunnable = mock<Runnable>();
    mockRunnable.run.mockRejectedValue(testError);

    const queue = new RunQueue();

    const originalUnhandledRejection = process.listeners('unhandledRejection');
    let caughtError: Error | undefined;

    process.removeAllListeners('unhandledRejection');
    process.on('unhandledRejection', (error) => {
      caughtError = error as Error;
    });

    queue.enqueue(mockRunnable);
    await new Promise((resolve) => setTimeout(resolve, 50));
    queue.shutdown();

    originalUnhandledRejection.forEach((listener) => {
      process.on('unhandledRejection', listener);
    });

    expect(mockRunnable.run).toHaveBeenCalled();
    expect(caughtError?.message).toBe('Non-abort error');
  });

  it('should handle abortAll when no current runnable is executing', () => {
    const queue = new RunQueue();

    queue.abortAll();

    queue.shutdown();
  });
});
