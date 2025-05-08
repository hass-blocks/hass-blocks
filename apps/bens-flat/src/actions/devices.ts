import { entities } from '../constants.ts';
import { waitUntilStateIsNot } from '@hass-blocks/blocks';

const { appleTv } = entities;

export const waitUntilAppleTvFinishesTurningOn = waitUntilStateIsNot(
  appleTv,
  'standby',
  3,
);
