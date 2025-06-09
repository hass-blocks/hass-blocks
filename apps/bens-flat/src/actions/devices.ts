import { waitUntilStateIsNot } from '@hass-blocks/core';

export const waitUntilAppleTvFinishesTurningOn = waitUntilStateIsNot(
  bensAppleTv,
  'standby',
  3,
);
