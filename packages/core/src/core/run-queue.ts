import { Queue } from 'queue-typescript';

import { ExecutionAbortedError } from '@errors';
import type { Runnable } from '@types';

export class RunQueue {
  private queue = new Queue<Runnable>();

  private current: { abort: () => void } | undefined;

  public constructor() {
    void this.startLoop();
  }

  public enqueue(runnable: Runnable) {
    this.queue.enqueue(runnable);
  }

  public abortAll() {
    this.current?.abort();
    while (this.queue.length > 0) {
      const runnable = this.queue.dequeue();
      runnable.abort();
    }
  }

  private async startLoop() {
    while (true) {
      while (this.queue.length > 0) {
        try {
          const runnable = this.queue.dequeue();
          this.current = runnable;
          await runnable.run();
        } catch (error) {
          if (!(error instanceof ExecutionAbortedError)) {
            throw error;
          }
        } finally {
          this.current = undefined;
        }
      }

      await this.wait();
    }
  }

  private async wait() {
    await new Promise((accept) => setTimeout(accept, 1));
  }
}
