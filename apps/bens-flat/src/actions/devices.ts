import { waitUntilStateIsNot } from '@hass-blocks/blocks';

export const waitUntilAppleTvFinishesTurningOn = waitUntilStateIsNot(
  bensAppleTvMediaPlayer,
  'standby',
  3,
);
