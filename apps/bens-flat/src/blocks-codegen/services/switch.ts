import { serviceCall, ITarget } from '@hass-blocks/core';

export interface TurnOffSwitchProps {}

/**
 * Turns a switch off.
 */
export const turnOffSwitch = (target: ITarget, params?: TurnOffSwitchProps) =>
  serviceCall({
    name: `Call switch.turn_off`,
    params: {
      domain: 'switch',
      service: 'turn_off',
      service_data: params,
    },
    target,
  });

export interface TurnOnSwitchProps {}

/**
 * Turns a switch on.
 */
export const turnOnSwitch = (target: ITarget, params?: TurnOnSwitchProps) =>
  serviceCall({
    name: `Call switch.turn_on`,
    params: {
      domain: 'switch',
      service: 'turn_on',
      service_data: params,
    },
    target,
  });

export interface ToggleSwitchProps {}

/**
 * Toggles a switch on/off.
 */
export const toggleSwitch = (target: ITarget, params?: ToggleSwitchProps) =>
  serviceCall({
    name: `Call switch.toggle`,
    params: {
      domain: 'switch',
      service: 'toggle',
      service_data: params,
    },
    target,
  });
