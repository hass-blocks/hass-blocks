import { waitUntilStateIsNot } from '@hass-blocks/blocks';

export const waitUntilAppleTvFinishesTurningOn = waitUntilStateIsNot(
  bensAppleTv,
  'standby',
  3,
);
