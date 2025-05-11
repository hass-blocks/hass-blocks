import { serviceCall, ITarget } from '@hass-blocks/core';

/**
 * Reloads helpers from the YAML-configuration.
 */
export const reloadInputBoolean = (target: ITarget) =>
  serviceCall({
    name: `Call input_boolean.reload`,
    params: {
      domain: 'input_boolean',
      service: 'reload',
    },
  });

export interface TurnOnInputBooleanProps {}

/**
 * Turns on the helper.
 */
export const turnOnInputBoolean = (
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

/**
 * Turns off the helper.
 */
export const turnOffInputBoolean = (
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

/**
 * Toggles the helper on/off.
 */
export const toggleInputBoolean = (
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
