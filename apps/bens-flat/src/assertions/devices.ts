import { ifStateIs } from '@hass-blocks/blocks';
import { entities } from '../constants.ts';
const { appleTv } = entities;

export const appleTvIsOnStandby = ifStateIs(appleTv, 'on');
