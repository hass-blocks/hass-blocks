import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Reloads helpers from the YAML-configuration.
   */
  var reloadInputBoolean: () => Block;
  /**
   * Turns on the helper.
   */
  var turnOnInputBoolean: (
    target: IEntity<`input_boolean.${string}`> | IArea,
    params?: TurnOnInputBooleanProps,
  ) => Block;
  /**
   * Turns off the helper.
   */
  var turnOffInputBoolean: (
    target: IEntity<`input_boolean.${string}`> | IArea,
    params?: TurnOffInputBooleanProps,
  ) => Block;
  /**
   * Toggles the helper on/off.
   */
  var toggleInputBoolean: (
    target: IEntity<`input_boolean.${string}`> | IArea,
    params?: ToggleInputBooleanProps,
  ) => Block;
}

globalThis.reloadInputBoolean = () =>
  serviceCall({
    name: `Call input_boolean.reload`,
    params: {
      domain: 'input_boolean',
      service: 'reload',
    },
  });

export interface TurnOnInputBooleanProps {}

globalThis.turnOnInputBoolean = (
  target: IEntity<`input_boolean.${string}`> | IArea,
  params?: TurnOnInputBooleanProps,
) =>
  serviceCall({
    name: `Call input_boolean.turn_on`,
    params: {
      domain: 'input_boolean',
      service: 'turn_on',
      service_data: params,
    },
    target,
  });

export interface TurnOffInputBooleanProps {}

globalThis.turnOffInputBoolean = (
  target: IEntity<`input_boolean.${string}`> | IArea,
  params?: TurnOffInputBooleanProps,
) =>
  serviceCall({
    name: `Call input_boolean.turn_off`,
    params: {
      domain: 'input_boolean',
      service: 'turn_off',
      service_data: params,
    },
    target,
  });

export interface ToggleInputBooleanProps {}

globalThis.toggleInputBoolean = (
  target: IEntity<`input_boolean.${string}`> | IArea,
  params?: ToggleInputBooleanProps,
) =>
  serviceCall({
    name: `Call input_boolean.toggle`,
    params: {
      domain: 'input_boolean',
      service: 'toggle',
      service_data: params,
    },
    target,
  });
