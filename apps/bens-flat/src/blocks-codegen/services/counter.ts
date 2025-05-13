import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Increments a counter by its step size.
   */
  var incrementCounter: (
    target: IEntity<`counter.${string}`> | IArea,
    params?: IncrementCounterProps,
  ) => Block;
  /**
   * Decrements a counter by its step size.
   */
  var decrementCounter: (
    target: IEntity<`counter.${string}`> | IArea,
    params?: DecrementCounterProps,
  ) => Block;
  /**
   * Resets a counter to its initial value.
   */
  var resetCounter: (
    target: IEntity<`counter.${string}`> | IArea,
    params?: ResetCounterProps,
  ) => Block;
  /**
   * Sets the counter to a specific value.
   */
  var setValueCounter: (
    target: IEntity<`counter.${string}`> | IArea,
    params: SetValueCounterProps,
  ) => Block;
}

export interface IncrementCounterProps {}

globalThis.incrementCounter = (target, params) =>
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

globalThis.decrementCounter = (target, params) =>
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

globalThis.resetCounter = (target, params) =>
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

globalThis.setValueCounter = (target, params) =>
  serviceCall({
    name: `Call counter.set_value`,
    params: {
      domain: 'counter',
      service: 'set_value',
      service_data: params,
    },
    target,
  });
