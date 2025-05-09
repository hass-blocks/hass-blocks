import type { IBlock } from './i-block.ts';
import type { IBlocksNode } from './i-blocks-node.ts';
import type { IEventBus } from './i-event-bus.ts';
import type { IFullBlocksClient } from './i-full-blocks-client.ts';

/**
 * @public
 *
 * An object representing a Home Assistant trigger
 */
export interface ITrigger extends IBlocksNode {
  /**
   * Register the trigger with a Home Assistant client so that it actually fires when
   * the conditions are met
   *
   * @param client - An initialied blocks client
   * @param block - The block that will be executed when the trigger is fired
   * @param events - The internal event bus
   */
  attachToClient(
    client: IFullBlocksClient,
    block: IBlock<unknown, unknown>,
    events: IEventBus,
  ): Promise<void>;
}
