import { Block, BlockExecutionMode, Executor } from '@core';
import type {
  ContinueOutput,
  IBaseBlockConfig,
  StopOutput,
  IRunContext,
} from '@types';
import { md5 } from '@utils';

/**
 * @public
 *
 * Configuration for loop block
 */
export interface ILoopConfig<TInput = void, TOutput = void, TBlockOutput = void>
  extends IBaseBlockConfig {
  /**
   * Will execute this assertion for each iteration of the loop. If it succeeds, the 'then' block is executed
   */
  while: Block<TInput | TBlockOutput, TOutput>;

  /**
   * Block to be executed
   */
  then: Block<TOutput, TBlockOutput>;
}

/**
 * @public
 *
 * Configuration for loop block (do-while variant)
 */
export interface IDoWhileConfig<
  TInput = void,
  TOutput = void,
  TBlockOutput = void,
> extends IBaseBlockConfig {
  /**
   * Will execute this assertion for each iteration of the loop. If it succeeds, the 'then' block is executed
   */
  while: Block<TBlockOutput, TOutput>;

  /**
   * Block to be executed
   */
  do: Block<TInput | TOutput, TBlockOutput>;
}

class Loop<TInput = void, TOutput = void, TActionOutput = void> extends Block<
  TInput,
  TOutput
> {
  public override name: string;

  public override type = 'loop';

  public constructor(
    public readonly config:
      | ILoopConfig<TInput, TOutput, TActionOutput>
      | IDoWhileConfig<TInput, TOutput, TActionOutput>,
  ) {
    super(config.id ?? md5(config.name), config.targets, [
      'then' in config ? config.then : config.do,
      config.while,
    ]);
    this.name = this.config.name;
  }

  public override async run({
    hass,
    input,
    events,
    triggerId,
  }: IRunContext<TInput>) {
    if (!events) {
      throw new Error('You must supply an event bus');
    }

    if (!triggerId) {
      throw new Error('You must supply a trigger id');
    }

    let assertionExecutor = new Executor<TInput | TActionOutput, TOutput>(
      [this.config.while],
      hass,
      events,
      triggerId,
      input,
      BlockExecutionMode.Sequence,
    );

    if ('then' in this.config) {
      await assertionExecutor.run();
    }
    let [result] =
      'then' in this.config ? await assertionExecutor.finished() : [undefined];

    if ('then' in this.config && (!result || result?.continue === false)) {
      return { continue: false } as StopOutput;
    }

    let nextActionInput = result && 'output' in result && result.output;

    while (
      (result?.continue &&
        result.outputType === 'conditional' &&
        result.conditionResult === true) ||
      ('do' in this.config && !result)
    ) {
      const actionExecutor = new Executor<
        TOutput | TInput | TActionOutput,
        TActionOutput
      >(
        ['then' in this.config ? this.config.then : this.config.do],
        hass,
        events,
        triggerId,
        nextActionInput || input,
        BlockExecutionMode.Sequence,
      );

      await actionExecutor.run();
      const [actionResult] = await actionExecutor.finished();

      const lastActionOutput = actionResult?.continue
        ? actionResult.output
        : undefined;

      assertionExecutor = new Executor<TInput | TActionOutput, TOutput>(
        [this.config.while],
        hass,
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

      nextActionInput = result.output;
    }

    if (!nextActionInput) {
      return { continue: false } satisfies StopOutput;
    }

    const returnVal: ContinueOutput<TOutput> = {
      continue: true,
      outputType: 'block',
      output: nextActionInput,
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
export function loop<TInput = void, TOutput = void, TBlockOutput = void>(
  config: ILoopConfig<TInput, TOutput, TBlockOutput>,
): Block<TInput, TOutput>;

/**
 * @public
 * Continues to execute a block until an assertion fails (do-while variant)
 *
 * @param config - Configuration for loop
 */
export function loop<TInput = void, TOutput = void, TBlockOutput = void>(
  config: IDoWhileConfig<TInput, TOutput, TBlockOutput>,
): Block<TInput, TOutput>;

export function loop<TInput = void, TOutput = void, TBlockOutput = void>(
  config:
    | ILoopConfig<TInput, TOutput, TBlockOutput>
    | IDoWhileConfig<TInput, TOutput, TBlockOutput>,
): Block<TInput, TOutput> {
  return new Loop<TInput, TOutput, TBlockOutput>(config);
}
