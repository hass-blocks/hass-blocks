import { ITarget } from '@hass-blocks/core';
import { switchThing } from './switch-thing.ts';

/**
 * @public
 *
 * Turn a climate on or off
 *
 * @param target - The targeted climate entity
 * @param onOrOff - Whether to turn it on or off
 */
export const switchClimate = (target: ITarget, onOrOff: 'on' | 'off') =>
  switchThing(target, onOrOff, 'climate');
