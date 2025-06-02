import { Block } from '@core';
import type { BlockOutput, IBaseBlockConfig, IRunContext } from '@types';
import { md5 } from '@utils';

/**
 * @public
 *
 * Configuration object for an assertion block
 */
export interface IAssertionConfig<TInput, TOutput> extends IBaseBlockConfig {
  /**
   * When this block is executed by an automation it should return a boolean
   * either as the direct return value, or as the 'result' property on an object.
   *
   * If that value is false, it will indicate to the execution engine that the automation
   * should finish
   */
  readonly predicate: (
    context: IRunContext<TInput>,
  ) =>
    | Promise<boolean>
    | boolean
    | { result: boolean; output: TOutput }
    | Promise<{ result: boolean; output: TOutput }>;
}

export class Assertion<TInput = void, TOutput = void> extends Block<
  TInput,
  TOutput
> {
  public constructor(public config: IAssertionConfig<TInput, TOutput>) {
    super(config.id ?? md5(config.name), config.targets);
    this.name = this.config.name;
  }
  public readonly name: string;

  public override type = 'assertion';

  public override async run(
    context: IRunContext<TInput>,
  ): Promise<BlockOutput<TOutput>> {
    const callbackResult = this.config.predicate(context);

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
          output: undefined as TOutput,
        };
  }
}

/**
 * @public
 *
 * An assertion is a block which can decide whether or not
 * an automation should continue based on the result of a predicate
 */
export const assertion = <TInput = void, TOutput = void>(
  config: IAssertionConfig<TInput, TOutput>,
): Block<TInput, TOutput> => {
  return new Assertion(config);
};
