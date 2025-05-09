import { stateTurns } from '@hass-blocks/blocks';
import { entities } from '../constants.ts';

const { homeMode } = entities;

export const homeModeTurnsOff = stateTurns(homeMode, 'off');
export const homeModeTurnsOn = stateTurns(homeMode, 'on');
