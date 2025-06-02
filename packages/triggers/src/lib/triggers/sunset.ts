import { trigger } from '@hass-blocks/core';
import type { TimeHHMMSS } from '@utils';

/**
 * @public
 *
 * Configuration for the sunset trigger
 */
export interface SunsetProps {
  /**
   * Optional time offset. e.g. '-00:45:00' will trigger 45 minutes before sunset. Can
   * be supplied as number of seconds or in hh:mm:ss format
   */
  offset: TimeHHMMSS | number;
}

/**
 * Fires when the sun sets

 * @public
 */
export const sunSets = (props?: SunsetProps) =>
  trigger({
    name: 'When the sun sets',
    trigger: {
      platform: 'sun',
      event: 'sunset',
      ...props,
    },
  });

sunSets();
