import { Block, BlockExecutionMode, Executor } from '@core';
import type {
  ContinueOutput,
  IBaseBlockConfig,
  IEventBus,
  IHass,
  StopOutput,
} from '@types';
import { md5 } from '@utils';

/**
 * @public
 *
 * Configuration for loop block
 */
export interface ILoopConfig<I = void, AO = void, O = void>
  extends IBaseBlockConfig {
  /**
   * Will execute this assertion for each iteration of the loop. If it succeeds, the 'then' block is executed
   */
  while: Block<I | O, AO>;

  /**
   * Block to be executed
   */
  then: Block<AO, O>;
}

class Loop<I = void, AO = void, O = void> extends Block<I, AO> {
  public override name: string;

  public override typeString = 'loop';

  public constructor(public readonly config: ILoopConfig<I, AO, O>) {
    super(config.id ?? md5(config.name), config.targets, [
      config.then,
      config.while,
    ]);
    this.name = this.config.name;
  }

  public override async run(
    client: IHass,
    input: I,
    events?: IEventBus,
    triggerId?: string,
  ) {
    if (!events) {
      throw new Error('You must supply an event bus');
    }

    if (!triggerId) {
      throw new Error('You must supply a trigger id');
    }

    let assertionExecutor = new Executor<I | O, AO>(
      [this.config.while],
      client,
      events,
      triggerId,
      input,
      BlockExecutionMode.Sequence,
    );

    await assertionExecutor.run();
    let [result] = await assertionExecutor.finished();

    if (!result || result?.continue === false) {
      return { continue: false } as StopOutput;
    }

    let lastAssertionOutput: AO | O = result.output;

    while (
      result?.continue &&
      result.outputType === 'conditional' &&
      result.conditionResult === true
    ) {
      const actionExecutor = new Executor<AO, O>(
        [this.config.then],
        client,
        events,
        triggerId,
        lastAssertionOutput,
        BlockExecutionMode.Sequence,
      );

      await actionExecutor.run();
      const [actionResult] = await actionExecutor.finished();

      const lastActionOutput = actionResult?.continue
        ? actionResult.output
        : undefined;

      assertionExecutor = new Executor<I | O, AO>(
        [this.config.while],
        client,
        events,
        triggerId,
        lastActionOutput,
        BlockExecutionMode.Sequence,
      );

      await assertionExecutor.run();
      [result] = await assertionExecutor.finished();

      if (result?.continue === false) {
        return { continue: false } satisfies StopOutput;
      }

      if (!result) {
        return { continue: false } satisfies StopOutput;
      }

      lastAssertionOutput = result.output;
    }

    const returnVal: ContinueOutput<AO> = {
      continue: true,
      outputType: 'block',
      output: lastAssertionOutput,
    };

    return returnVal;
  }
}

/**
 * @public
 * Continues to execute a block until an assertion fails
 *
 * @param config - Configuration for loop
 */
export const loop = <I = void, AO = void, O = void>(
  config: ILoopConfig<I, AO, O>,
): Block<I, AO> => {
  return new Loop<I, AO, O>(config);
};
