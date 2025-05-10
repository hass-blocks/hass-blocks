import { Block } from '@core';
import type { IHass, BlockOutput, IBaseBlockConfig } from '@types';
import { md5 } from '@utils';

/**
 * @public
 *
 * Configuration object for an assertion block
 */
export interface IAssertionConfig<I, O> extends IBaseBlockConfig {
  /**
   * When this block is executed by an automation it should return a boolean
   * either as the direct return value, or as the 'result' property on an object.
   *
   * If that value is false, it will indicate to the execution engine that the automation
   * should finish
   */
  readonly predicate: (
    client: IHass,
    input?: I,
  ) =>
    | Promise<boolean>
    | boolean
    | { result: boolean; output: O }
    | Promise<{ result: boolean; output: O }>;
}

export class Assertion<I = void, O = void> extends Block<I, O> {
  public constructor(public config: IAssertionConfig<I, O>) {
    super(config.id ?? md5(config.name), config.targets);
    this.name = this.config.name;
  }
  public readonly name: string;

  public override typeString = 'assertion';

  public override async run(client: IHass, input: I): Promise<BlockOutput<O>> {
    const callbackResult = this.config.predicate(client, input);

    const result =
      callbackResult instanceof Promise ? await callbackResult : callbackResult;

    return typeof result === 'object'
      ? {
          outputType: 'conditional',
          continue: true,
          conditionResult: result.result,
          output: result.output,
        }
      : {
          outputType: 'conditional',
          continue: true,
          conditionResult: result,
          output: undefined as O,
        };
  }
}

/**
 * @public
 *
 * An assertion is a block which can decide whether or not
 * an automation should continue based on the result of a predicate
 */
export const assertion = <I = void, O = void>(
  config: IAssertionConfig<I, O>,
): Block<I, O> => {
  return new Assertion(config);
};
