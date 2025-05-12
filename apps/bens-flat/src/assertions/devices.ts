import { stateIs } from '@hass-blocks/blocks';
import { appleTv } from '../entities.ts';

export const appleTvIsOnStandby = stateIs(appleTv, 'on');
