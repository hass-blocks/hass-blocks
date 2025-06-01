import { trigger } from '@hass-blocks/core';

/**
 * @public
 *
 * Configuration for the sunset trigger
 */
export interface SunSetProps {
  /**
   * Optional time offset. e.g. '-00:45:00' will trigger 45 minutes before sunset
   */
  offset?: string;
}
/**
 * @public
 *
 * Fires when the sun sets
 */
export const sunset = () =>
  trigger({
    name: 'When the sun sets',
    trigger: {
      platform: 'sun',
      event: 'sunset',
    },
  });
