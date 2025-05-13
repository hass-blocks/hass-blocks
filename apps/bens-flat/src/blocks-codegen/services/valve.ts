import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  /**
   * Opens a valve.
   */
  var openValveValve: (target: IEntity<`valve.${string}`> | IArea) => Block;

  /**
   * Closes a valve.
   */
  var closeValveValve: (target: IEntity<`valve.${string}`> | IArea) => Block;

  interface SetValvePositionValveProps {
    /**
     * Target position.
     */
    position: number;
  }

  /**
   * Moves a valve to a specific position.
   */
  var setValvePositionValve: (
    target: IEntity<`valve.${string}`> | IArea,
    params?: SetValvePositionValveProps,
  ) => Block;

  /**
   * Stops the valve movement.
   */
  var stopValveValve: (target: IEntity<`valve.${string}`> | IArea) => Block;

  /**
   * Toggles a valve open/closed.
   */
  var toggleValve: (target: IEntity<`valve.${string}`> | IArea) => Block;
}

globalThis.openValveValve = (target) =>
  serviceCall({
    name: `Call valve.open_valve`,
    params: {
      domain: 'valve',
      service: 'open_valve',
    },
    target,
  });

globalThis.closeValveValve = (target) =>
  serviceCall({
    name: `Call valve.close_valve`,
    params: {
      domain: 'valve',
      service: 'close_valve',
    },
    target,
  });

globalThis.setValvePositionValve = (target, params) =>
  serviceCall({
    name: `Call valve.set_valve_position`,
    params: {
      domain: 'valve',
      service: 'set_valve_position',
      service_data: params,
    },
    target,
  });

globalThis.stopValveValve = (target) =>
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
