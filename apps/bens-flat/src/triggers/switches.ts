import { stateTurns } from '@hass-blocks/blocks';
import { entities } from 'src/constants.ts';

const { homeMode } = entities.switch;

export const homeModeTurnsOff = stateTurns(homeMode.id, 'off');
export const homeModeTurnsOn = stateTurns(homeMode.id, 'on');
