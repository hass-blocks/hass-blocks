import { waitUntilStateIsNot } from '@hass-blocks/blocks';
import { appleTv } from '../entities.ts';

export const waitUntilAppleTvFinishesTurningOn = waitUntilStateIsNot(
  appleTv,
  'standby',
  3,
);
