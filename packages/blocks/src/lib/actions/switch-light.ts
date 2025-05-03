import { serviceCall } from '@hass-blocks/core';

/**
 * @public
 *
 * The target of a service call within Home Assistant
 */
export interface Which {
  /**
   * Entity id of the service call
   */
  entity_id?: string;

  /**
   * Area id of the service call - will normally apply the action to all associated
   * entities within that area
   */
  area_id?: string;
}

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
