import { ifStateIs } from '@hass-blocks/blocks';
import { appleTv } from '../entities.ts';

export const appleTvIsOnStandby = ifStateIs(appleTv, 'on');
