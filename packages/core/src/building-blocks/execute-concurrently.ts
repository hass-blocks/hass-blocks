import { type EventBus, BlockExecutionMode, Executor, Block } from '@core';
import type { BlockOutput, IHass, IFullBlocksClient } from '@types';
import { mapAsync, md5 } from '@utils';

import type { GetOutputs, InputType } from './valid-input-output-sequence.ts';
import type { IMQTTConnection } from '@hass-blocks/hass-mqtt';

class ExecuteConcurrently<
  A extends readonly Block<unknown, unknown>[],
  O extends GetOutputs<A>,
  I = void,
> extends Block<I, O> {
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
    input: I,
    events?: EventBus,
    triggerId?: string,
  ): Promise<BlockOutput<O>> {
    if (!events) {
      throw new Error('Must configure an event bus');
    }

    if (!triggerId) {
      throw new Error('Must pass a triggerId');
    }

    const executor = new Executor<I, O>(
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
      output: successes as unknown as O,
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
  A extends readonly Block<unknown, unknown>[],
  O extends GetOutputs<A>,
  I = InputType<A[number]>,
>(
  ...actions: A
): Block<I, O> => {
  return new ExecuteConcurrently<A, O, I>({
    name: 'Execute Concurrently',
    actions,
  });
};
