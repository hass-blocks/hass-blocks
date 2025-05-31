import { type EventBus, BlockExecutionMode, Executor, Block } from '@core';
import type { BlockOutput, IHass, IFullBlocksClient } from '@types';
import type { InputType, OutputType } from '@sequence-validator';
import { mapAsync, md5 } from '@utils';

import type { IMQTTConnection } from '@hass-blocks/hass-mqtt';

class ExecuteConcurrently<
  A extends readonly Block<unknown, unknown>[],
> extends Block<InputType<A[number]>, OutputType<A[number]>[]> {
  public override name: string;

  public override readonly typeString = 'execute-concurrently';

  public constructor(
    public config: {
      name: string;
      id?: string;
      actions: A;
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

  public override async run(
    client: IHass,
    input: InputType<A[number]>,
    events?: EventBus,
    triggerId?: string,
  ): Promise<BlockOutput<OutputType<A[number]>[]>> {
    if (!events) {
      throw new Error('Must configure an event bus');
    }

    if (!triggerId) {
      throw new Error('Must pass a triggerId');
    }

    const executor = new Executor<InputType<A[number]>, OutputType<A[number]>>(
      [...this.config.actions],
      client,
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
export const concurrently = <A extends readonly Block<unknown, unknown>[]>(
  ...actions: A
): Block<InputType<A[number]>, OutputType<A[number]>[]> => {
  return new ExecuteConcurrently<A>({
    name: 'Execute Concurrently',
    actions,
  });
};
