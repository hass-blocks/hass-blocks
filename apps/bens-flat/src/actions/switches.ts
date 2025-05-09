import { turnSwitch } from '@hass-blocks/blocks';
import { homeMode, tv } from '../entities.ts';

export const turnHomeModeOff = turnSwitch(homeMode, 'off');
export const turnHomeModeOn = turnSwitch(homeMode, 'on');
export const turnOffTv = turnSwitch(tv, 'off');
