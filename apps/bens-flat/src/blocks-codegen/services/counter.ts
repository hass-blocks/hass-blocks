import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  /**
   * Increments a counter by its step size
   */
  var incrementCounter: (
    target: IEntity<`counter.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;

  /**
   * Decrements a counter by its step size
   */
  var decrementCounter: (
    target: IEntity<`counter.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;

  /**
   * Resets a counter to its initial value
   */
  var resetCounter: (
    target: IEntity<`counter.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;

  interface SetValueCounter {
    /**
     * The new counter value the entity should be set to
     */
    value: number;
  }

  /**
   * Sets the counter to a specific value
   */
  var setValueCounter: (
    target: IEntity<`counter.${string}`> | IArea<string>,
    params: SetValueCounter,
  ) => Block<Partial<SetValueCounter> | undefined, void>;
}

globalThis.incrementCounter = (target) =>
  serviceCall({
    name: `Call counter.increment`,
    params: {
      domain: 'counter',
      service: 'increment',
    },
    target,
  });

globalThis.decrementCounter = (target) =>
  serviceCall({
    name: `Call counter.decrement`,
    params: {
      domain: 'counter',
      service: 'decrement',
    },
    target,
  });

globalThis.resetCounter = (target) =>
  serviceCall({
    name: `Call counter.reset`,
    params: {
      domain: 'counter',
      service: 'reset',
    },
    target,
  });

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
