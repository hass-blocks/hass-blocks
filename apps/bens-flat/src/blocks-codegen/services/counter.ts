import { serviceCall, ITarget } from '@hass-blocks/core';

export interface IncrementCounterProps {}

/**
 * Increments a counter by its step size.
 */
export const incrementCounter = (
  target: ITarget,
  params?: IncrementCounterProps,
) =>
  serviceCall({
    name: `Call counter.increment`,
    params: {
      domain: 'counter',
      service: 'increment',
      service_data: params,
    },
    target,
  });

export interface DecrementCounterProps {}

/**
 * Decrements a counter by its step size.
 */
export const decrementCounter = (
  target: ITarget,
  params?: DecrementCounterProps,
) =>
  serviceCall({
    name: `Call counter.decrement`,
    params: {
      domain: 'counter',
      service: 'decrement',
      service_data: params,
    },
    target,
  });

export interface ResetCounterProps {}

/**
 * Resets a counter to its initial value.
 */
export const resetCounter = (target: ITarget, params?: ResetCounterProps) =>
  serviceCall({
    name: `Call counter.reset`,
    params: {
      domain: 'counter',
      service: 'reset',
      service_data: params,
    },
    target,
  });

export interface SetValueCounterProps {
  /**
   * The new counter value the entity should be set to.
   */
  value: number;
}

/**
 * Sets the counter to a specific value.
 */
export const setValueCounter = (
  target: ITarget,
  params: SetValueCounterProps,
) =>
  serviceCall({
    name: `Call counter.set_value`,
    params: {
      domain: 'counter',
      service: 'set_value',
      service_data: params,
    },
    target,
  });
