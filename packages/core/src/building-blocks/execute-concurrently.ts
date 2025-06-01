import { BlockExecutionMode, Executor, Block } from '@core';
import type { BlockOutput, IFullBlocksClient, IRunContext } from '@types';
import type { InputType, OutputType } from '@sequence-validator';
import { mapAsync, md5 } from '@utils';

import type { IMQTTConnection } from '@hass-blocks/hass-mqtt';

class ExecuteConcurrently<
  TCollectionOfBlocks extends readonly Block<unknown, unknown>[],
> extends Block<
  InputType<TCollectionOfBlocks[number]>,
  OutputType<TCollectionOfBlocks[number]>[]
> {
  public override name: string;

  public override readonly typeString = 'execute-concurrently';

  public constructor(
    public config: {
      name: string;
      id?: string;
      actions: TCollectionOfBlocks;
    },
  ) {
    super(config.id ?? md5(config.name), undefined, [...config.actions]);
    this.name = this.config.name;
  }

  public override async initialise(
    client: IFullBlocksClient,
    mqtt: IMQTTConnection,
  ) {
    await mapAsync(this.config.actions, async (action) => {
      await action.initialise(client, mqtt);
    });
  }

  public override async run({
    input,
    hass,
    events,
    triggerId,
  }: IRunContext<InputType<TCollectionOfBlocks[number]>>): Promise<
    BlockOutput<OutputType<TCollectionOfBlocks[number]>[]>
  > {
    if (!events) {
      throw new Error('Must configure an event bus');
    }

    if (!triggerId) {
      throw new Error('Must pass a triggerId');
    }

    const executor = new Executor<
      InputType<TCollectionOfBlocks[number]>,
      OutputType<TCollectionOfBlocks[number]>
    >(
      [...this.config.actions],
      hass,
      events,
      triggerId,
      input,
      BlockExecutionMode.Parallel,
      this,
    );

    void executor.run();

    const results = await executor.finished();

    const successes = results.flatMap((result) =>
      result?.continue ? [result.output] : [],
    );

    if (successes.length !== results.length) {
      return { continue: false };
    }

    return {
      continue: true,
      output: successes,
      outputType: 'block',
    };
  }
}

/**
 * @public
 *
 * When executed, this block will execute all the blocks passed in as the first argument concurrently. Once complete
 * the outputs from all the blocks will be returned as an array
 */
export const concurrently = <
  TCollectionOfBlocks extends readonly Block<unknown, unknown>[],
>(
  ...actions: TCollectionOfBlocks
): Block<
  InputType<TCollectionOfBlocks[number]>,
  OutputType<TCollectionOfBlocks[number]>[]
> => {
  return new ExecuteConcurrently<TCollectionOfBlocks>({
    name: 'Execute Concurrently',
    actions,
  });
};
