import { serviceCall, ITarget } from '@hass-blocks/core';

export interface SetValueTimeProps {
  /**
   * The time to set.
   */
  time: string;
}

/**
 * Sets the time.
 */
export const setValueTime = (target: ITarget, params: SetValueTimeProps) =>
  serviceCall({
    name: `Call time.set_value`,
    params: {
      domain: 'time',
      service: 'set_value',
      service_data: params,
    },
    target,
  });
