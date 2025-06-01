import { trigger } from '@hass-blocks/core';

/**
 * @public
 *
 * Configuration for the sunrise trigger
 */
export interface SunriseProps {
  /**
   * Optional time offset. e.g. '-00:45:00' will trigger 45 minutes before sunrise
   */
  offset?: string;
}
/**
 * @public
 *
 * Fires when the sun rises
 */
export const sunRises = () =>
  trigger({
    name: 'When the sun rises',
    trigger: {
      platform: 'sun',
      event: 'sunrise',
    },
  });
