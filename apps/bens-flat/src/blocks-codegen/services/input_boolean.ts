import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Reloads helpers from the YAML-configuration.
   */
  var reloadInputBoolean: (target: ITarget) => Block;
  /**
   * Turns on the helper.
   */
  var turnOnInputBoolean: (
    target: ITarget,
    params?: TurnOnInputBooleanProps,
  ) => Block;
  /**
   * Turns off the helper.
   */
  var turnOffInputBoolean: (
    target: ITarget,
    params?: TurnOffInputBooleanProps,
  ) => Block;
  /**
   * Toggles the helper on/off.
   */
  var toggleInputBoolean: (
    target: ITarget,
    params?: ToggleInputBooleanProps,
  ) => Block;
}

globalThis.reloadInputBoolean = (target: ITarget) =>
  serviceCall({
    name: `Call input_boolean.reload`,
    params: {
      domain: 'input_boolean',
      service: 'reload',
    },
  });

export interface TurnOnInputBooleanProps {}

globalThis.turnOnInputBoolean = (
  target: ITarget,
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
  target: ITarget,
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
  target: ITarget,
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
