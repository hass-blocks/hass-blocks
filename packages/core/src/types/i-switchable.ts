import type { IBlock } from './i-block.ts';
import type { ITarget } from './i-target.ts';

/**
 * An entity target that can be switched on and off
 */
export interface ISwitchable extends ITarget {
  switchOn: () => IBlock<void, void>;
  switchOff: () => IBlock<void, void>;
}
