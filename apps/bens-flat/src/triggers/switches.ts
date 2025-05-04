import { stateTurns } from '@hass-blocks/blocks';
import { entities } from '../constants.ts';

const { homeMode } = entities.switch;

export const homeModeTurnsOff = stateTurns(homeMode.id, 'off');
export const homeModeTurnsOn = stateTurns(homeMode.id, 'on');
