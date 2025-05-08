import { ifStateIs } from '@hass-blocks/blocks';
import { entities } from '../constants.ts';
const { appleTv } = entities.media_player;

export const appleTvIsOnStandby = ifStateIs(appleTv.id, 'on');
