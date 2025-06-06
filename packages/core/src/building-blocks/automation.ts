import { Executor, BlockExecutionMode, RunQueue, Block } from '@core';
import { ExecutionAbortedError } from '@errors';
import { md5 } from '@utils';

import {
  type BlockOutput,
  type ITrigger,
  type IBaseBlockConfig,
  type IRunContext,
  ExecutionMode,
  type IFullBlocksClient,
  type IMutableNode,
} from '@types';

import type {
  GetSequenceInput,
  GetSequenceOutput,
  ValidateSequence,
  BlockRetainType,
} from '@sequence-validator';
import type { IMQTTConnection } from '@hass-blocks/hass-mqtt';

/**
 * @public
 *
 * Configuration object for automation blocks
 */
export interface IAutomationConfig<
  TSequence extends readonly Block<unknown, unknown>[],
  TInput = GetSequenceInput<TSequence>,
  TOutput = GetSequenceOutput<TSequence>,
> extends IBaseBlockConfig {
  /**
   * Sequence of blocks to execute when the trigger is fired
   */
  then:
    | (BlockRetainType<TSequence> &
        TSequence &
        ValidateSequence<TInput, TOutput, TSequence>)
    | Block<TInput, TOutput>;

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
  const TSequence extends readonly Block<unknown, unknown>[],
  TInput = GetSequenceInput<TSequence>,
  TOutput = GetSequenceOutput<TSequence>,
> extends Block<TInput, TOutput> {
  public readonly name: string;

  private runQueue = new RunQueue();

  public constructor(
    public config: IAutomationConfig<TSequence, TInput, TOutput>,
  ) {
    super(config.id ?? md5(config.name), config.targets, config.when);
    this.name = this.config.name;
  }

  public override type = 'automation';

  public override addNext(node?: IMutableNode): void {
    this.linkContainedNodes(node);
  }

  private linkContainedNodes(nextNode?: IMutableNode) {
    const trigger = this.hasTrigger()
      ? Array.isArray(this.trigger)
        ? this.trigger
        : [this.trigger]
      : [];
    const toLink: IMutableNode[] = [
      ...trigger,
      ...(Array.isArray(this.config.then)
        ? this.config.then
        : [this.config.then]),
      ...(nextNode ? [nextNode] : []),
    ];

    const [first] = toLink;

    if (first) {
      this.addChild(first);
    }

    this.linkNodes(...toLink);
  }

  public override async initialise(
    client: IFullBlocksClient,
    mqtt: IMQTTConnection,
  ): Promise<void> {
    this.linkContainedNodes();
    await super.initialise(client, mqtt);
  }

  public override async run({
    hass,
    input,
    events,
    triggerId,
  }: IRunContext<TInput>): Promise<BlockOutput<TOutput>> {
    if (!events) {
      throw new Error('You must supply an event bus');
    }

    if (!triggerId) {
      throw new Error('You must supply a trigger id');
    }

    try {
      const executor = new Executor<TInput, TOutput>(
        [
          ...(Array.isArray(this.config.then)
            ? this.config.then
            : [this.config.then]),
        ],
        hass,
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
  const TSequence extends readonly Block<unknown, unknown>[],
  TInput = GetSequenceInput<TSequence>,
  TOutput = GetSequenceOutput<TSequence>,
>(
  config: IAutomationConfig<TSequence, TInput, TOutput>,
): Block<TInput, TOutput> => {
  return new Automation<TSequence, TInput, TOutput>(config);
};
