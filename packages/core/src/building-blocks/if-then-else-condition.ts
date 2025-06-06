import { Block, BlockExecutionMode, Executor } from '@core';
import { AssertionError } from '@errors';
import type {
  BlockOutput,
  IBaseBlockConfig,
  IMutableNode,
  IRunContext,
} from '@types';
import { md5 } from '@utils';

/**
 * @public
 *
 * Configuration object for a condition block
 */
export interface IIfThenElseConditionConfig<
  TInput,
  TThenInput,
  TElseInput,
  TThenOutput,
  TElseOutput,
> extends IBaseBlockConfig {
  /**
   * The result of this assertion decides which branch to take
   */
  readonly assertion:
    | Block<TInput, TThenInput & TElseInput>
    | Block<TInput, void>;

  /**
   * Execute this block if the predicate passes
   */
  readonly then: Block<TThenInput | void, TThenOutput>;

  /**
   * Execute this block if the predicate fails
   */
  readonly else: Block<TElseInput | void, TElseOutput>;
}

/**
 * @public
 *
 * Use in combination with an {@link Assertion} block to implement branching logic in your automations.
 * Supply two blocks and execute either one of them depending on the result of the assertion
 */
export class IfThenElseCondition<
  TInput,
  TThenInput,
  TElseInput,
  TThenOutput,
  TElseOutput,
> extends Block<TInput, TThenOutput | TElseOutput> {
  public override name: string;

  public override type = 'if-then-else';

  public constructor(
    public readonly config: IIfThenElseConditionConfig<
      TInput,
      TThenInput,
      TElseInput,
      TThenOutput,
      TElseOutput
    >,
  ) {
    super(config.id ?? md5(config.name), config.targets);
    this.name = this.config.name;
  }

  public override addNext(node?: IMutableNode): void {
    this.addChild(this.config.assertion);
    this.config.assertion.addNext(this.config.then);
    this.config.assertion.addNext(this.config.else);
    this.config.then.addNext(node);
    this.config.else.addNext(node);
  }

  public override async run({
    input,
    events,
    triggerId,
    hass,
  }: IRunContext<TInput>): Promise<BlockOutput<TThenOutput | TElseOutput>> {
    if (!events) {
      throw new Error('Event bus must be initialised!');
    }

    if (!triggerId) {
      throw new Error('Trigger id');
    }

    const assertionExecutor = new Executor<
      TInput,
      (TThenInput & TElseInput) | void
    >(
      [this.config.assertion],
      hass,
      events,
      triggerId,
      input,
      BlockExecutionMode.Sequence,
    );

    await assertionExecutor.run();
    const [assertionResult] = await assertionExecutor.finished();

    if (!assertionResult?.continue) {
      return { continue: false };
    }

    if (assertionResult.outputType !== 'conditional') {
      throw new AssertionError(
        `Block in the 'assertion' property must return a conditional result`,
      );
    }

    const branchExecutor = new Executor<
      TThenInput | TElseInput | void,
      TThenOutput | TElseOutput
    >(
      [assertionResult.conditionResult ? this.config.then : this.config.else],
      hass,
      events,
      triggerId,
      assertionResult.output,
      BlockExecutionMode.Sequence,
    );

    await branchExecutor.run();
    const [branchExecutedResult] = await branchExecutor.finished();

    if (!branchExecutedResult) {
      throw new Error("Branch didn't return a valid response!");
    }

    return branchExecutedResult;
  }
}

/**
 * @public
 *
 * Use in combination with an {@link assertion} block to implement branching logic in your automations.
 * Supply two blocks and execute either one of them depending on the result of the assertion
 */
export const when = <TInput, TThenInput, TElseInput, TThenOutput, TElseOutput>(
  assertion: IIfThenElseConditionConfig<
    TInput,
    TThenInput,
    TElseInput,
    TThenOutput,
    TElseOutput
  >['assertion'],
  config: Omit<
    IIfThenElseConditionConfig<
      TInput,
      TThenInput,
      TElseInput,
      TThenOutput,
      TElseOutput
    >,
    'assertion' | 'name'
  >,
): Block<TInput, TThenOutput | TElseOutput> => {
  return new IfThenElseCondition<
    TInput,
    TThenInput,
    TElseInput,
    TThenOutput,
    TElseOutput
  >({
    ...config,
    assertion,
    name: `when ${assertion.name} then`,
  });
};
