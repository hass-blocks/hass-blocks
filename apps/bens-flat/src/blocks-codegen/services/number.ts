import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  interface SetValueNumberProps {
    /**
     * The target value to set.
     */
    value: string;
  }

  /**
   * Sets the value of a number.
   */
  var setValueNumber: (
    target: IEntity<`number.${string}`> | IArea,
    params?: SetValueNumberProps,
  ) => Block;
}

globalThis.setValueNumber = (target, params) =>
  serviceCall({
    name: `Call number.set_value`,
    params: {
      domain: 'number',
      service: 'set_value',
      service_data: params,
    },
    target,
  });
