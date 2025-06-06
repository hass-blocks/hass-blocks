import type { IBlocksNode } from './i-blocks-node.ts';

/**
 * @public
 *
 * A node that can be serialised to JSON
 */
export interface ISerialisable {
  /**
   * Return a JSON representation of this block
   */
  toJson(): IBlocksNode;
}
