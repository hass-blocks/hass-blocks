import { ifStateIsNot } from '@hass-blocks/blocks';
import { entities } from '../constants.ts';

const { me } = entities;

export const ifIamOut = ifStateIsNot(me, 'home');
