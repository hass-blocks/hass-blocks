import type { BlockOutput } from './block-output.ts';
import type { IBlocksNode } from './i-blocks-node.ts';
import type { IEventBus } from './i-event-bus.ts';
import type { IHass } from './i-hass.ts';
import type { ITrigger } from './i-trigger.ts';
import type { SerialisedBlock } from './serialised-block.ts';

/**
 * @public
 *
 * The abstract base class that all blocks inherit from
 */
export interface IBlock<I = void, O = void> extends IBlocksNode {
  /**
   * A JSON representation of the block. Used for websocket and rest serialisation
   */
  toJson(): SerialisedBlock;

  /**
   * String to identify this particular instance of a block. Must be unique
   */
  id: string;

  /**
   * Friendly name for the block - for use in user interfaces
   */
  name: string;

  /**
   * Triggers that are currently registered with this block
   */
  trigger: ITrigger | ITrigger[];

  /**
   * String that identifies the kind of block
   */
  typeString: string;

  /**
   * Called by the framework when the block is executed
   *
   * @param client - An initialised blocks client,
   * @param input - The input for this block - usually the output from the last one
   * @param events - An initialised event bus
   * @param triggerId - a uuid trigger id, unique to this particular trigger sequence
   */
  run(
    hass: IHass,
    input: I,
    events?: IEventBus,
    triggerId?: string,
  ): Promise<BlockOutput<O>> | BlockOutput<O>;
}
