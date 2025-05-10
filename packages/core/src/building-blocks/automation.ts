import { Executor, BlockExecutionMode, RunQueue, Block } from '@core';
import { ExecutionAbortedError } from '@errors';
import { md5 } from '@utils';

import {
  type IEventBus,
  type BlockOutput,
  type IHass,
  type ITrigger,
  type IBaseBlockConfig,
  ExecutionMode,
} from '@types';

import type {
  GetSequenceInput,
  GetSequenceOutput,
  BlockRetainType,
  ValidInputOutputSequence,
} from './valid-input-output-sequence.ts';

/**
 * @public
 *
 * Configuration object for automation blocks
 */
export interface IAutomationConfig<
  // biome-ignore lint/suspicious/noExplicitAny: constraint
  A extends readonly any[],
  I = GetSequenceInput<A>,
  O = GetSequenceOutput<A>,
> extends IBaseBlockConfig {
  /**
   * Sequence of blocks to execute when the trigger is fired
   */
  then: BlockRetainType<A> & A & ValidInputOutputSequence<I, O, A>;

  /**
   * Trigger will result in this block being executed
   */
  when?: ITrigger | ITrigger[];

  /**
   * Whether to execute the blocks in sequnce or in parallel
   */
  mode?: ExecutionMode;
}

export class Automation<
  // biome-ignore lint/suspicious/noExplicitAny: type constraint
  const A extends readonly any[],
  I = GetSequenceInput<A>,
  O = GetSequenceOutput<A>,
> extends Block<I, O> {
  public readonly name: string;

  private runQueue = new RunQueue();

  public constructor(public config: IAutomationConfig<A, I, O>) {
    super(config.id ?? md5(config.name), config.targets, [
      ...config.then,
      ...(config.when
        ? Array.isArray(config.when)
          ? config.when
          : [config.when]
        : []),
    ]);
    this.name = this.config.name;
    if (config.when) {
      this.trigger = config.when;
    }
  }

  public override typeString = 'automation';

  public override async run(
    client: IHass,
    input?: I,
    events?: IEventBus,
    triggerId?: string,
  ): Promise<BlockOutput<O>> {
    if (!events) {
      throw new Error('You must supply an event bus');
    }

    if (!triggerId) {
      throw new Error('You must supply a trigger id');
    }

    try {
      const executor = new Executor<I, O>(
        [...this.config.then],
        client,
        events,
        triggerId,
        input,
        BlockExecutionMode.Sequence,
        this,
      );

      const mode = this.config.mode ?? ExecutionMode.Restart;
      switch (mode) {
        case ExecutionMode.Restart:
          this.runQueue.abortAll();
          this.runQueue.enqueue(executor);
          break;

        case ExecutionMode.Queue:
          this.runQueue.enqueue(executor);
          break;

        case ExecutionMode.Parallel:
          await executor.run();
          break;
      }
      const intResult = await executor.finished();
      const [result] = intResult;

      if (!result) {
        throw new Error(
          "Sequence exector resolved but didn't return anything. This is probably a programming error",
        );
      }
      return result;
    } catch (error) {
      if (error instanceof ExecutionAbortedError) {
        return { continue: false };
      }
      throw error;
    }
  }
}

/**
 * @public
 *
 * An automation represents a sequence of actions that can either be executed in sequence
 * or in parallel. When passed into
 */
export const automation = <
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const A extends readonly any[],
  I = GetSequenceInput<A>,
  O = GetSequenceOutput<A>,
>(
  config: IAutomationConfig<A, I, O>,
): Block<I, O> => {
  return new Automation<A, I, O>(config);
};
