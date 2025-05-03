import { Block } from '../core/index.ts';
import {
  BlockOutput,
  IHass,
  IEventBus,
  IBaseBlockConfig,
} from '../types/index.ts';
import { md5 } from '../utils/index.ts';

/**
 * @public
 *
 * Configuration object for action blocks
 */
export interface IActionConfig<I = void, O = void> extends IBaseBlockConfig {
  /**
   * This callback will be executed when an automation runs this block
   */
  callback:
    | ((client: IHass, input: I) => O)
    | ((client: IHass, input: I) => Promise<O>);
}

export class Action<I = void, O = void>
  extends Block<I, O>
  implements Block<I, O>
{
  public readonly name: string;
  public constructor(public readonly config: IActionConfig<I, O>) {
    super(config.id ?? md5(config.name));
    this.name = this.config.name;
  }

  public override readonly typeString: string = 'action';

  public override async run(
    client: IHass,
    input: I,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _events?: IEventBus,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _triggerId?: string,
  ): Promise<BlockOutput<O>> {
    const callbackResult = this.config.callback(client, input);
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
export const action = <I = void, O = void>(
  config: IActionConfig<I, O>,
): Block<I, O> => {
  return new Action(config);
};
