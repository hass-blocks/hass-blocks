import { serviceCall } from '@hass-blocks/core';
import { Which } from '../types/index.ts';

/**
 * @public
 *
 * Factory function which creates a service call block to turn lights on or off
 *
 * @param target - Target of switch light service
 * @param onOrOff - Whether to switch the light on or off
 */
export const switchLight = (target: Which, onOrOff: 'on' | 'off') => {
  const service = onOrOff === 'on' ? 'turn_on' : 'turn_off';
  return serviceCall({
    name: `Switch light ${onOrOff}`,
    params: {
      domain: 'light',
      service,
      target,
    },
  });
};
