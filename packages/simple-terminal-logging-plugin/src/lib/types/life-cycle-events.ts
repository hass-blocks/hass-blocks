import {
  BlockStarted,
  BlockFinished,
  SequenceAborted,
  BlockFailed,
} from '@hass-blocks/blocks';

export type LifeCycleEvent =
  | BlockFailed
  | BlockStarted
  | BlockFinished
  | SequenceAborted;
