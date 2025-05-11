import { serviceCall, ITarget } from '@hass-blocks/core';

/**
 * Reloads helpers from the YAML-configuration.
 */
export const reloadInputNumber = (target: ITarget) =>
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

/**
 * Sets the value.
 */
export const setValueInputNumber = (
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

/**
 * Increments the current value by 1 step.
 */
export const incrementInputNumber = (
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

/**
 * Decrements the current value by 1 step.
 */
export const decrementInputNumber = (
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
