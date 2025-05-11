import { serviceCall, ITarget } from '@hass-blocks/core';

export interface SetValueNumberProps {
  /**
   * The target value to set.
   */
  value: string;
}

/**
 * Sets the value of a number.
 */
export const setValueNumber = (target: ITarget, params: SetValueNumberProps) =>
  serviceCall({
    name: `Call number.set_value`,
    params: {
      domain: 'number',
      service: 'set_value',
      service_data: params,
    },
    target,
  });
