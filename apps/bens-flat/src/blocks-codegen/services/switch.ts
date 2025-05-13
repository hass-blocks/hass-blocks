import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Turns a switch off.
   */
  var turnOffSwitch: (
    target: IEntity<`switch.${string}`> | IArea,
    params?: TurnOffSwitchProps,
  ) => Block;
  /**
   * Turns a switch on.
   */
  var turnOnSwitch: (
    target: IEntity<`switch.${string}`> | IArea,
    params?: TurnOnSwitchProps,
  ) => Block;
  /**
   * Toggles a switch on/off.
   */
  var toggleSwitch: (
    target: IEntity<`switch.${string}`> | IArea,
    params?: ToggleSwitchProps,
  ) => Block;
}

export interface TurnOffSwitchProps {}

globalThis.turnOffSwitch = (
  target: IEntity<`switch.${string}`> | IArea,
  params?: TurnOffSwitchProps,
) =>
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

globalThis.turnOnSwitch = (
  target: IEntity<`switch.${string}`> | IArea,
  params?: TurnOnSwitchProps,
) =>
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

globalThis.toggleSwitch = (
  target: IEntity<`switch.${string}`> | IArea,
  params?: ToggleSwitchProps,
) =>
  serviceCall({
    name: `Call switch.toggle`,
    params: {
      domain: 'switch',
      service: 'toggle',
      service_data: params,
    },
    target,
  });
