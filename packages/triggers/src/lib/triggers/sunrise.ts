import { trigger } from '@hass-blocks/core';
import { removeUndefined, type TimeHHMMSS } from '@utils';

/**
 * @public
 *
 * Configuration for the sunrise trigger
 */
export interface SunriseProps {
  /**
   * Optional time offset. e.g. '-00:45:00' will trigger 45 minutes before sunrise. Can be
   * supplied as a number of seconds or in hh:mm:ss format
   */
  offset: TimeHHMMSS | number;
}

/**
 * @public
 *
 * Fires when the sun rises
 */
export const sunRises = (props?: SunriseProps) =>
  trigger({
    name: 'When the sun rises',
    trigger: removeUndefined({
      platform: 'sun',
      event: 'sunrise',
      ...props,
    }),
  });
