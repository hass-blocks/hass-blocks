import { EventBus, Block } from '../core/index.ts';
import { AssertionError } from '../errors/index.ts';
import { BlockOutput, IHass } from '../types/index.ts';
import { md5 } from '../utils/index.ts';

/**
 * @public
 */
export type IConditionPredicate<PO = void, I = void> = (
  client: IHass,
  input?: I,
) =>
  | Promise<boolean>
  | boolean
  | { result: boolean; output: PO }
  | Promise<{ result: boolean; output: PO }>;

/**
 * @public
 * 
 * Configuration object for a condition block
 */
export interface IIfThenElseConditionConfig<
  TO = void,
  EO = void,
  PO = void,
  I = void,
> {
  /**
   * Block name
   */
  readonly name: string;

  /**
   * Unique identifier for this block. Will use a hash of the name if not provided
   */
  readonly id?: string;

  /**
   * The result of this assertion decides which branch to take
   */
  readonly assertion: Block<I, PO>;

  /**
   * Execute this block if the predicate passes
   */
  readonly then: Block<PO, TO>;

  /**
   * Execute this block if the predicate fails
   */
  readonly else: Block<PO, EO>;
}

/**
 * @public
 *
 * Use in combination with an {@link Assertion} block to implement branching logic in your automations.
 * Supply two blocks and execute either one of them depending on the result of the assertion
 */
export class IfThenElseCondition<
  TO = void,
  EO = void,
  PO = void,
  I = void,
> extends Block<I, TO | EO> {
  public override name: string;

  public override typeString = 'if-then-else';

  public constructor(
    public readonly config: IIfThenElseConditionConfig<TO, EO, PO, I>,
  ) {
    super(config.id ?? md5(config.name), [
      config.assertion,
      config.then,
      config.else,
    ]);
    this.name = this.config.name;
  }

  public override async run(
    client: IHass,
    input: I,
    events?: EventBus,
    triggerId?: string,
  ): Promise<BlockOutput<TO | EO>> {
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
export const when = <TO = void, EO = void, PO = void, I = void>(
  config: IIfThenElseConditionConfig<TO, EO, PO, I>,
): Block<I, TO | EO> => {
  return new IfThenElseCondition(config);
};
