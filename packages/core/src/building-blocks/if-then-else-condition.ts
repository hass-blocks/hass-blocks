import { type EventBus, Block } from '@core';
import { AssertionError } from '@errors';
import type { BlockOutput, IBaseBlockConfig, IHass } from '@types';
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

  public override typeString = 'if-then-else';

  public constructor(
    public readonly config: IIfThenElseConditionConfig<
      TInput,
      TThenInput,
      TElseInput,
      TThenOutput,
      TElseOutput
    >,
  ) {
    super(config.id ?? md5(config.name), config.targets, [
      config.assertion,
      config.then,
      config.else,
    ]);
    this.name = this.config.name;
  }

  public override async run(
    client: IHass,
    input: TInput,
    events?: EventBus,
    triggerId?: string,
  ): Promise<BlockOutput<TThenOutput | TElseOutput>> {
    const assertionResult = await this.config.assertion.run(client, input);

    if (!assertionResult.continue) {
      return { continue: false };
    }

    if (assertionResult.outputType !== 'conditional') {
      throw new AssertionError(
        `Block in the 'assertion' property must return a conditional result`,
      );
    }

    const branchExecutedResult = assertionResult.conditionResult
      ? await this.config.then.run(
          client,
          assertionResult.output,
          events,
          triggerId,
        )
      : await this.config.else.run(
          client,
          assertionResult.output,
          events,
          triggerId,
        );

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
