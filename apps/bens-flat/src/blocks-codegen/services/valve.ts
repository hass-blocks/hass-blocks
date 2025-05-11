import { serviceCall, ITarget } from '@hass-blocks/core';

export interface OpenValveValveProps {}

/**
 * Opens a valve.
 */
export const openValveValve = (target: ITarget, params?: OpenValveValveProps) =>
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

/**
 * Closes a valve.
 */
export const closeValveValve = (
  target: ITarget,
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

/**
 * Moves a valve to a specific position.
 */
export const setValvePositionValve = (
  target: ITarget,
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

/**
 * Stops the valve movement.
 */
export const stopValveValve = (target: ITarget, params?: StopValveValveProps) =>
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

/**
 * Toggles a valve open/closed.
 */
export const toggleValve = (target: ITarget, params?: ToggleValveProps) =>
  serviceCall({
    name: `Call valve.toggle`,
    params: {
      domain: 'valve',
      service: 'toggle',
      service_data: params,
    },
    target,
  });
