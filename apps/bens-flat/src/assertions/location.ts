import { ifStateIsNot } from '@hass-blocks/blocks';
import { entities } from '../constants.ts';

const { me } = entities.person;

export const ifIamOut = ifStateIsNot(me.id, 'home');
