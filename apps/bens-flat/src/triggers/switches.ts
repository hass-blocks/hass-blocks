import { stateTurns } from '@hass-blocks/blocks';
import { homeMode } from '../entities.ts';

export const homeModeTurnsOff = stateTurns(homeMode, 'off');
export const homeModeTurnsOn = stateTurns(homeMode, 'on');
