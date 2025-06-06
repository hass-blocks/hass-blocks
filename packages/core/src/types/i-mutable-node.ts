import type { IAddable } from './i-addable.ts';
import type { IBlocksNode } from './i-blocks-node.ts';
import type { IInitialisable } from './i-initialisable.ts';
import type { ISerialisable } from './i-serialiseble.ts';

/**
 * @public
 *
 * A node in the blocks graph that is not read only
 */
export type IMutableNode = IBlocksNode &
  ISerialisable &
  IInitialisable &
  IAddable;
