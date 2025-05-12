import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Sets the value of a number.
   */
  var setValueNumber: (target: ITarget, params: SetValueNumberProps) => Block;
}

export interface SetValueNumberProps {
  /**
   * The target value to set.
   */
  value: string;
}

globalThis.setValueNumber = (target: ITarget, params: SetValueNumberProps) =>
  serviceCall({
    name: `Call number.set_value`,
    params: {
      domain: 'number',
      service: 'set_value',
      service_data: params,
    },
    target,
  });
