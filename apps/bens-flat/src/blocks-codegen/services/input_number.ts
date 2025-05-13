import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Reloads helpers from the YAML-configuration.
   */
  var reloadInputNumber: () => Block;
  /**
   * Sets the value.
   */
  var setValueInputNumber: (
    target: IEntity<`input_number.${string}`> | IArea,
    params: SetValueInputNumberProps,
  ) => Block;
  /**
   * Increments the current value by 1 step.
   */
  var incrementInputNumber: (
    target: IEntity<`input_number.${string}`> | IArea,
    params?: IncrementInputNumberProps,
  ) => Block;
  /**
   * Decrements the current value by 1 step.
   */
  var decrementInputNumber: (
    target: IEntity<`input_number.${string}`> | IArea,
    params?: DecrementInputNumberProps,
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

export interface SetValueInputNumberProps {
  /**
   * The target value.
   */
  value: number;
}

globalThis.setValueInputNumber = (
  target: IEntity<`input_number.${string}`> | IArea,
  params: SetValueInputNumberProps,
) =>
  serviceCall({
    name: `Call input_number.set_value`,
    params: {
      domain: 'input_number',
      service: 'set_value',
      service_data: params,
    },
    target,
  });

export interface IncrementInputNumberProps {}

globalThis.incrementInputNumber = (
  target: IEntity<`input_number.${string}`> | IArea,
  params?: IncrementInputNumberProps,
) =>
  serviceCall({
    name: `Call input_number.increment`,
    params: {
      domain: 'input_number',
      service: 'increment',
      service_data: params,
    },
    target,
  });

export interface DecrementInputNumberProps {}

globalThis.decrementInputNumber = (
  target: IEntity<`input_number.${string}`> | IArea,
  params?: DecrementInputNumberProps,
) =>
  serviceCall({
    name: `Call input_number.decrement`,
    params: {
      domain: 'input_number',
      service: 'decrement',
      service_data: params,
    },
    target,
  });
