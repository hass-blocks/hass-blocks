import type { GetOutputs } from './valid-input-output-sequence.ts';

import {
  type EventBus,
  BlockExecutionMode,
  Executor,
  Block,
} from '../core/index.ts';
import type { BlockOutput, IHass } from '../types/index.ts';
import { mapAsync, md5 } from '../utils/index.ts';

class ExecuteConcurrently<
  A extends readonly Block<unknown, unknown>[],
  I = void,
  O = void,
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
    super(config.id ?? md5(config.name), undefined);
    this.name = this.config.name;
  }

  public override async validate(client: IHass) {
    await mapAsync(
      this.config.actions,
      async (action) => await action.validate(client),
    );
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

    const failed = results.find((result) => !result?.continue);

    if (failed) {
      return { continue: false };
    }

    const successes = results.flatMap((result) =>
      result?.success && result.continue ? [result] : [],
    );

    const outputs = successes.map(
      (success) => success.output,
    ) as unknown as GetOutputs<A>;

    return { continue: true, output: outputs as O, outputType: 'block' };
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
  I = void,
  O = void,
>(
  ...actions: A
): Block<I, O> => {
  return new ExecuteConcurrently<A, I, O>({
    name: 'Execute Concurrently',
    actions,
  });
};
