import type { IBlocksNode } from './i-blocks-node.ts';

export interface ISerialisable {
  toJson(): IBlocksNode;
}
