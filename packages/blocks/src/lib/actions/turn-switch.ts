import { type ITarget, serviceCall } from '@hass-blocks/core';

/**
 * @public
 *
 * Factory function which creates a service call block to turn switch on or off
 *
 * @param target - Target of switch service
 * @param onOrOff - Whether to turn the switch on or off
 */
export const turnSwitch = (target: ITarget, onOrOff: 'on' | 'off') => {
  const service = onOrOff === 'on' ? 'turn_on' : 'turn_off';
  return serviceCall({
    name: `Turn switch ${onOrOff}`,
    params: {
      domain: 'switch',
      service,
    },
    target,
  });
};
