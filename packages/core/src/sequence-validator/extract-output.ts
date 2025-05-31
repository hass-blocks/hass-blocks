import type { BlockOutput, StopOutput } from '@types';

/**
 * @public
 *
 * Given the return type of a block, extract its output type
 */
export type ExtractOutput<TAny> =
  TAny extends Promise<infer TPromiseType>
    ? ExtractOutput<TPromiseType>
    : TAny extends Exclude<BlockOutput<infer TBlockType>, StopOutput>
      ? TBlockType
      : never;
