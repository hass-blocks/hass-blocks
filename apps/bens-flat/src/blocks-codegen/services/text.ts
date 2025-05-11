import { serviceCall, ITarget } from '@hass-blocks/core';

export interface SetValueTextProps {
  /**
   * Enter your text.
   */
  value: string;
}

/**
 * Sets the value.
 */
export const setValueText = (target: ITarget, params: SetValueTextProps) =>
  serviceCall({
    name: `Call text.set_value`,
    params: {
      domain: 'text',
      service: 'set_value',
      service_data: params,
    },
    target,
  });
