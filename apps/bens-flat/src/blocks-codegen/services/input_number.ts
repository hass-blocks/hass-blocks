import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  /**
   * Reloads helpers from the YAML-configuration.
   */
  var reloadInputNumber: () => Block;

  interface SetValueInputNumberProps {
    /**
     * The target value.
     */
    value: number;
  }

  /**
   * Sets the value.
   */
  var setValueInputNumber: (
    target: IEntity<`input_number.${string}`> | IArea,
    params?: SetValueInputNumberProps,
  ) => Block;

  /**
   * Increments the current value by 1 step.
   */
  var incrementInputNumber: (
    target: IEntity<`input_number.${string}`> | IArea,
  ) => Block;

  /**
   * Decrements the current value by 1 step.
   */
  var decrementInputNumber: (
    target: IEntity<`input_number.${string}`> | IArea,
  ) => Block;
}

globalThis.reloadInputNumber = () =>
  serviceCall({
    name: `Call input_number.reload`,
    params: {
      domain: 'input_number',
      service: 'reload',
    },
  });

globalThis.setValueInputNumber = (target, params) =>
  serviceCall({
    name: `Call input_number.set_value`,
    params: {
      domain: 'input_number',
      service: 'set_value',
      service_data: params,
    },
    target,
  });

globalThis.incrementInputNumber = (target) =>
  serviceCall({
    name: `Call input_number.increment`,
    params: {
      domain: 'input_number',
      service: 'increment',
    },
    target,
  });

globalThis.decrementInputNumber = (target) =>
  serviceCall({
    name: `Call input_number.decrement`,
    params: {
      domain: 'input_number',
      service: 'decrement',
    },
    target,
  });
