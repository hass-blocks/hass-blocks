import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  /**
   * Opens a valve.
   */
  var openValve: (
    target: IEntity<`valve.${string}`> | IArea<string>,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Closes a valve.
   */
  var closeValve: (
    target: IEntity<`valve.${string}`> | IArea<string>,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface SetValvePosition {
    /**
     * Target position.
     */
    position: number;
  }

  /**
   * Moves a valve to a specific position.
   */
  var setValvePosition: (
    target: IEntity<`valve.${string}`> | IArea<string>,
    params: SetValvePosition,
  ) => Block<Partial<ServiceCallArgs<SetValvePosition>> | undefined, void>;

  /**
   * Stops the valve movement.
   */
  var stopValve: (
    target: IEntity<`valve.${string}`> | IArea<string>,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Toggles a valve open/closed.
   */
  var toggleValve: (
    target: IEntity<`valve.${string}`> | IArea<string>,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;
}

globalThis.openValve = (target) =>
  serviceCall({
    name: `Call valve.open_valve`,
    params: {
      domain: 'valve',
      service: 'open_valve',
    },
    target,
  });

globalThis.closeValve = (target) =>
  serviceCall({
    name: `Call valve.close_valve`,
    params: {
      domain: 'valve',
      service: 'close_valve',
    },
    target,
  });

globalThis.setValvePosition = (target, params) =>
  serviceCall({
    name: `Call valve.set_valve_position`,
    params: {
      domain: 'valve',
      service: 'set_valve_position',
      service_data: params,
    },
    target,
  });

globalThis.stopValve = (target) =>
  serviceCall({
    name: `Call valve.stop_valve`,
    params: {
      domain: 'valve',
      service: 'stop_valve',
    },
    target,
  });

globalThis.toggleValve = (target) =>
  serviceCall({
    name: `Call valve.toggle`,
    params: {
      domain: 'valve',
      service: 'toggle',
    },
    target,
  });
