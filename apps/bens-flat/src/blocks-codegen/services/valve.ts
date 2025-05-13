import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Opens a valve.
   */
  var openValveValve: (
    target: IEntity<`valve.${string}`> | IArea,
    params?: OpenValveValveProps,
  ) => Block;
  /**
   * Closes a valve.
   */
  var closeValveValve: (
    target: IEntity<`valve.${string}`> | IArea,
    params?: CloseValveValveProps,
  ) => Block;
  /**
   * Moves a valve to a specific position.
   */
  var setValvePositionValve: (
    target: IEntity<`valve.${string}`> | IArea,
    params: SetValvePositionValveProps,
  ) => Block;
  /**
   * Stops the valve movement.
   */
  var stopValveValve: (
    target: IEntity<`valve.${string}`> | IArea,
    params?: StopValveValveProps,
  ) => Block;
  /**
   * Toggles a valve open/closed.
   */
  var toggleValve: (
    target: IEntity<`valve.${string}`> | IArea,
    params?: ToggleValveProps,
  ) => Block;
}

export interface OpenValveValveProps {}

globalThis.openValveValve = (
  target: IEntity<`valve.${string}`> | IArea,
  params?: OpenValveValveProps,
) =>
  serviceCall({
    name: `Call valve.open_valve`,
    params: {
      domain: 'valve',
      service: 'open_valve',
      service_data: params,
    },
    target,
  });

export interface CloseValveValveProps {}

globalThis.closeValveValve = (
  target: IEntity<`valve.${string}`> | IArea,
  params?: CloseValveValveProps,
) =>
  serviceCall({
    name: `Call valve.close_valve`,
    params: {
      domain: 'valve',
      service: 'close_valve',
      service_data: params,
    },
    target,
  });

export interface SetValvePositionValveProps {
  /**
   * Target position.
   */
  position: number;
}

globalThis.setValvePositionValve = (
  target: IEntity<`valve.${string}`> | IArea,
  params: SetValvePositionValveProps,
) =>
  serviceCall({
    name: `Call valve.set_valve_position`,
    params: {
      domain: 'valve',
      service: 'set_valve_position',
      service_data: params,
    },
    target,
  });

export interface StopValveValveProps {}

globalThis.stopValveValve = (
  target: IEntity<`valve.${string}`> | IArea,
  params?: StopValveValveProps,
) =>
  serviceCall({
    name: `Call valve.stop_valve`,
    params: {
      domain: 'valve',
      service: 'stop_valve',
      service_data: params,
    },
    target,
  });

export interface ToggleValveProps {}

globalThis.toggleValve = (
  target: IEntity<`valve.${string}`> | IArea,
  params?: ToggleValveProps,
) =>
  serviceCall({
    name: `Call valve.toggle`,
    params: {
      domain: 'valve',
      service: 'toggle',
      service_data: params,
    },
    target,
  });
