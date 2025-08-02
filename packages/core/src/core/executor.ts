import EventEmitter from 'node:events';

import type { BlockOutput, Runnable, IHass, IEventBus } from '@types';
import { ExecutionAbortedError } from '@errors';
import type { Block } from './block.ts';
import { Queue } from './queue.ts';
import { BlockLifecyleManager } from './block-lifecycle-manager.ts';

const EXECUTOR_FINISHED = 'executor-finished';
const EXECUTOR_ABORTED = 'executor-aborted';

export enum BlockExecutionMode {
  Parallel = 'Parallel',
  Sequence = 'Sequence',
}

type Result = BlockOutput<unknown> & { success: boolean };
type Output<O> = (BlockOutput<O> & { success: boolean }) | undefined;

/**
 * Responsible for executing groups of blocks and emitting the associated events for
 * each execution.
 */
export class Executor<I, O> implements Runnable {
  private executionQueue: Queue<BlockLifecyleManager>;
  protected bus = new EventEmitter();
  private result: Output<O>[] | undefined;

  private aborted = false;

  public constructor(
    sequence: Block<unknown, unknown>[],
    private client: IHass,
    private events: IEventBus,
    public triggerId: string,
    private input?: I,
    private executionMode?: BlockExecutionMode,
    private parent?: Block<unknown, unknown>,
  ) {
    if (sequence.length === 0) {
      throw new Error('Cannot create executor with empty sequence');
    }

    const queueItems = sequence.map(
      (block) => new BlockLifecyleManager(events, triggerId, block, parent),
    );

    this.executionQueue = new Queue(...queueItems);
  }

  private async runPromiseOrRejectWhenAborted<T>(
    promiseFunction: () => Promise<T>,
  ): Promise<T> {
    const result = promiseFunction();
    return await new Promise<T>((accept, reject) => {
      let cleanedUp = false;

      const cleanup = () => {
        if (!cleanedUp) {
          this.bus.off(EXECUTOR_ABORTED, waitForAbortCallback);
          cleanedUp = true;
        }
      };

      const waitForAbortCallback = () => {
        cleanup();
        reject(new ExecutionAbortedError('Sequence was aborted'));
      };

      result
        .then((result) => {
          cleanup();
          accept(result);
        })
        .catch((error: unknown) => {
          cleanup();
          const errorInstance =
            error instanceof Error ? error : new Error(String(error));
          reject(errorInstance);
        });

      this.bus.on(EXECUTOR_ABORTED, waitForAbortCallback);
    });
  }

  private async executeBlock<TInput = unknown, TOutput = unknown>(
    lifecycleManager: BlockLifecyleManager<TInput, TOutput>,
    input: TInput,
  ): Promise<BlockOutput<TOutput> & { success: boolean }> {
    try {
      if (this.aborted) {
        throw new ExecutionAbortedError('Sequence was aborted');
      }

      lifecycleManager.started();

      const runner =
        <Input, Output>(block: Block<Input, Output>) =>
        async (input: Input) => {
          const childLifecycleManager = new BlockLifecyleManager(
            this.events,
            this.triggerId,
            block,
            lifecycleManager.block,
          );
          return await this.executeBlock<Input, Output>(
            childLifecycleManager,
            input,
          );
        };

      const result = await this.runPromiseOrRejectWhenAborted(
        async () =>
          await lifecycleManager.block.run({
            hass: this.client,
            input,
            events: this.events,
            triggerId: this.triggerId,
            runner,
          }),
      );

      lifecycleManager.finished(result);

      return { ...result, success: true };
    } catch (error) {
      const errorInstance =
        error instanceof Error ? error : new Error(String(error));
      if (errorInstance instanceof ExecutionAbortedError) {
        lifecycleManager.aborted();
      } else {
        lifecycleManager.failed(errorInstance);
      }
      return { continue: false, success: false };
    }
  }

  public emitPendingMessages() {
    this.executionQueue.toArray().forEach((manager) => manager.pending());
  }

  private async waitOrAbort(lastResultPromise: Promise<Result>) {
    const lastResult = await lastResultPromise;
    const blockIndicatedToStop = !lastResult.continue;

    const conditionalBlockFailed =
      lastResult.continue &&
      lastResult.outputType === 'conditional' &&
      !lastResult.conditionResult;

    if (blockIndicatedToStop || conditionalBlockFailed) {
      this.abort();
    }

    return lastResult;
  }

  /**
   * Run blocks associated with this executor. Call `finished()` to get the execution outcome
   */
  public async run(): Promise<void> {
    let lastResult: Result | undefined;
    const resultPromises: Promise<Result | undefined>[] = [];
    this.emitPendingMessages();

    while (this.executionQueue.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const blockManager = this.executionQueue.pop()!;

      const lastResultPromise = this.executeBlock(
        blockManager,
        (lastResult?.continue && lastResult.output) ?? this.input,
      );

      resultPromises.push(lastResultPromise);

      if (this.executionMode === BlockExecutionMode.Sequence) {
        lastResult = await this.waitOrAbort(lastResultPromise);
      }
    }

    if (this.executionMode === BlockExecutionMode.Parallel) {
      const result = await Promise.all(resultPromises);
      this.result = result as Output<O>[];
    } else {
      this.result = [{ ...(lastResult as BlockOutput<O>), success: true }];
    }

    this.bus.emit(EXECUTOR_FINISHED);
  }

  public async finished() {
    return new Promise<Output<O>[]>((accept, reject) => {
      if (this.result) {
        accept(this.result);
      } else {
        const cleanup = () => {
          this.bus.off(EXECUTOR_FINISHED, finishedCallback);
          this.bus.off(EXECUTOR_ABORTED, abortedCallback);
        };

        const finishedCallback = () => {
          cleanup();
          if (this.result) {
            accept(this.result);
          } else {
            reject(
              new Error(
                'Sequence finished without a result. This is probably a programming error',
              ),
            );
          }
        };

        const abortedCallback = () => {
          cleanup();
          reject(new ExecutionAbortedError(this.parent?.name ?? ''));
        };

        this.bus.on(EXECUTOR_ABORTED, abortedCallback);
        this.bus.on(EXECUTOR_FINISHED, finishedCallback);
      }
    });
  }

  public abort() {
    this.aborted = true;
    this.bus.emit(EXECUTOR_ABORTED);
  }

  public async destroy(): Promise<void> {
    this.bus.removeAllListeners();
  }

  public getListenerCount(event: string): number {
    return this.bus.listenerCount(event);
  }
}
