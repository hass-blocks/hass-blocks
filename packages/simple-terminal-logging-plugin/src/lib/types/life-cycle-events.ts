import {
  BlockStarted,
  BlockFinished,
  BlockPending,
  SequenceAborted,
  BlockFailed,
} from '@hass-blocks/blocks';

export type LifeCycleEvent =
  | BlockFailed
  | BlockStarted
  | BlockFinished
  | BlockPending
  | SequenceAborted;
