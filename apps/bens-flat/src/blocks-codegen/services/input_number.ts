import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Reloads helpers from the YAML-configuration.
   */
  var reloadInputNumber: (target: ITarget) => Block;
  /**
   * Sets the value.
   */
  var setValueInputNumber: (
    target: ITarget,
    params: SetValueInputNumberProps,
  ) => Block;
  /**
   * Increments the current value by 1 step.
   */
  var incrementInputNumber: (
    target: ITarget,
    params?: IncrementInputNumberProps,
  ) => Block;
  /**
   * Decrements the current value by 1 step.
   */
  var decrementInputNumber: (
    target: ITarget,
    params?: DecrementInputNumberProps,
  ) => Block;
}

globalThis.reloadInputNumber = (target: ITarget) =>
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
  target: ITarget,
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
  target: ITarget,
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
  target: ITarget,
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
