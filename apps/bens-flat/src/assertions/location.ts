import { ifStateIsNot } from '@hass-blocks/blocks';
import { me } from '../entities.ts';

export const ifIamOut = ifStateIsNot(me, 'home');
