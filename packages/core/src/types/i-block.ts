import type { BlockOutput } from './block-output.ts';
import type { IBlocksNode } from './i-blocks-node.ts';
import type { IRunContext } from './i-run-context.ts';
import type { ITrigger } from './i-trigger.ts';

/**
 * @public
 *
 * The abstract base class that all blocks inherit from
 */
export interface IBlock<I = void, O = void> extends IBlocksNode {
  /**
   * Triggers that are currently registered with this block
   */
  trigger: ITrigger | ITrigger[];

  /**
   * String that identifies the kind of block
   */
  type: string;

  /**
   * Called by the framework when the block is executed
   *
   * @param client - An initialised blocks client,
   * @param input - The input for this block - usually the output from the last one
   * @param events - An initialised event bus
   * @param triggerId - a uuid trigger id, unique to this particular trigger sequence
   */
  run(context: IRunContext<I>): Promise<BlockOutput<O>> | BlockOutput<O>;
}
