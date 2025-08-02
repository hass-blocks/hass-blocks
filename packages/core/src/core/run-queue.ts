import { ExecutionAbortedError } from '@errors';
import type { Runnable } from '@types';

import { Queue } from './queue.ts';

export class RunQueue {
  private queue = new Queue<Runnable>();

  private current: { abort: () => void } | undefined;

  private running = true;

  public constructor() {
    void this.startLoop();
  }

  public enqueue(runnable: Runnable) {
    if (this.running) {
      this.queue.push(runnable);
    }
  }

  public abortAll() {
    this.current?.abort();
    while (this.queue.length > 0) {
      const runnable = this.queue.pop();
      runnable?.abort();
    }
  }

  public shutdown() {
    this.running = false;
    this.abortAll();
  }

  private async startLoop() {
    while (this.running) {
      while (this.queue.length > 0 && this.running) {
        try {
          const runnable = this.queue.pop();
          this.current = runnable;
          await runnable?.run();
        } catch (error) {
          if (!(error instanceof ExecutionAbortedError)) {
            throw error;
          }
        } finally {
          this.current = undefined;
        }
      }

      if (this.running) {
        await this.wait();
      }
    }
  }

  private async wait() {
    await new Promise((accept) => setTimeout(accept, 1));
  }
}
