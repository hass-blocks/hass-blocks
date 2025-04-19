import { Block } from '../core/index.ts';
import {
  BlockOutput,
  IBlocksClient,
  IEventBus,
  BaseBlockConfig,
} from '../types/index.ts';
import { md5 } from '../utils/index.ts';

/**
 * @public
 *
 * Parameters configure an action Block
 */
export interface ActionArgs<I = void, O = void> extends BaseBlockConfig {
  /**
   * This callback will be executed when an automation runs this block
   */
  callback:
    | ((client: IBlocksClient, input: I) => O)
    | ((client: IBlocksClient, input: I) => Promise<O>);
}

export class Action<I = void, O = void>
  extends Block<I, O>
  implements Block<I, O>
{
  public readonly name: string;
  public constructor(public readonly config: ActionArgs<I, O>) {
    super(config.id ?? md5(config.name));
    this.name = this.config.name;
  }

  public override readonly typeString: string = 'action';

  public override async run(
    client: IBlocksClient,
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
 */
export const action = <I = void, O = void>(
  config: ActionArgs<I, O>,
): Block<I, O> => {
  return new Action(config);
};
