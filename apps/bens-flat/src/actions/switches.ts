import { turnSwitch } from '@hass-blocks/blocks';
import { entities } from '../constants.ts';

const { homeMode, tv } = entities;

export const turnHomeModeOff = turnSwitch(homeMode, 'off');
export const turnHomeModeOn = turnSwitch(homeMode, 'on');
export const turnOffTv = turnSwitch(tv, 'off');
