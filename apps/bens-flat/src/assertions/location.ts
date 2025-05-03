import { ifStateIsNot } from '@hass-blocks/blocks';
import { entities } from 'src/constants.ts';

const { me } = entities.person;

export const ifIamOut = ifStateIsNot(me.id, 'home');
