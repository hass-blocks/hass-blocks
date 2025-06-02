import { Block } from '@core';
import type { BlockOutput, IBaseBlockConfig, IRunContext } from '@types';
import { md5 } from '@utils';

/**
 * @public
 *
 * Configuration object for action blocks
 */
export interface IActionConfig<TInput = void, TOutput = void>
  extends IBaseBlockConfig {
  /**
   * This callback will be executed when an automation runs this block
   */
  callback:
    | ((context: IRunContext<TInput>) => TOutput)
    | ((context: IRunContext<TInput>) => Promise<TOutput>);
}

export class Action<TInput = void, TOutput = void>
  extends Block<TInput, TOutput>
  implements Block<TInput, TOutput>
{
  public readonly name: string;
  public constructor(public readonly config: IActionConfig<TInput, TOutput>) {
    super(config.id ?? md5(config.name), config.targets);
    this.name = this.config.name;
  }

  public override readonly type: string = 'action';

  public override async run(
    context: IRunContext<TInput>,
  ): Promise<BlockOutput<TOutput>> {
    const callbackResult = this.config.callback(context);
    const result =
      callbackResult instanceof Promise ? await callbackResult : callbackResult;

    return { output: result, continue: true, outputType: 'block' };
  }
}

/**
 * @public
 *
 * A generic block that represents some kind of action
 *
 * @example
 * ```TypeScript
 *
 * import { action } from "@hass-blocks/core"
 *
 * const turnOnLivingRoomLights = action({
 *   name: `Turn on lights`,
 *   callback: async (hass) => {
 *      await hass.callService({
 *        domain: 'light',
 *        service: 'turn_on',
 *        target: {
 *          entity_id: 'light.living_room'
 *        }
 *      })
 *   },
 * });
 * ```
 *
 * @param config - configuration for the action
 */
export const action = <TInput = void, TOutput = void>(
  config: IActionConfig<TInput, TOutput>,
): Block<TInput, TOutput> => {
  return new Action(config);
};
