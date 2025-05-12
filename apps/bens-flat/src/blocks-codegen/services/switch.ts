import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Turns a switch off.
   */
  var turnOffSwitch: (target: ITarget, params?: TurnOffSwitchProps) => Block;
  /**
   * Turns a switch on.
   */
  var turnOnSwitch: (target: ITarget, params?: TurnOnSwitchProps) => Block;
  /**
   * Toggles a switch on/off.
   */
  var toggleSwitch: (target: ITarget, params?: ToggleSwitchProps) => Block;
}

export interface TurnOffSwitchProps {}

globalThis.turnOffSwitch = (target: ITarget, params?: TurnOffSwitchProps) =>
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

globalThis.turnOnSwitch = (target: ITarget, params?: TurnOnSwitchProps) =>
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

globalThis.toggleSwitch = (target: ITarget, params?: ToggleSwitchProps) =>
  serviceCall({
    name: `Call switch.toggle`,
    params: {
      domain: 'switch',
      service: 'toggle',
      service_data: params,
    },
    target,
  });
