import { entities } from '../constants.ts';
import { waitUntilStateIsNot } from '@hass-blocks/blocks';

const { appleTv } = entities.media_player;

export const waitUntilAppleTvFinishesTurningOn = waitUntilStateIsNot(
  appleTv.id,
  'standby',
  3,
);
