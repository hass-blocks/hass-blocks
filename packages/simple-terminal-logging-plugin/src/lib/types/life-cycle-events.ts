import {
  BlockStarted,
  BlockFinished,
  SequenceAborted,
  BlockFailed,
} from '@hass-blocks/core';

export type LifeCycleEvent =
  | BlockFailed
  | BlockStarted
  | BlockFinished
  | SequenceAborted;
