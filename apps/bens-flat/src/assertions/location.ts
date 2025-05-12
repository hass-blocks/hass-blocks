import { stateIsNot } from '@hass-blocks/blocks';
import { me } from '../entities.ts';

export const ifIamOut = stateIsNot(me, 'home');
