import { serviceCall, ITarget } from '@hass-blocks/core';

export interface TurnOnHumidifierProps {}

/**
 * Turns the humidifier on.
 */
export const turnOnHumidifier = (
  target: ITarget,
  params?: TurnOnHumidifierProps,
) =>
  serviceCall({
    name: `Call humidifier.turn_on`,
    params: {
      domain: 'humidifier',
      service: 'turn_on',
      service_data: params,
    },
    target,
  });

export interface TurnOffHumidifierProps {}

/**
 * Turns the humidifier off.
 */
export const turnOffHumidifier = (
  target: ITarget,
  params?: TurnOffHumidifierProps,
) =>
  serviceCall({
    name: `Call humidifier.turn_off`,
    params: {
      domain: 'humidifier',
      service: 'turn_off',
      service_data: params,
    },
    target,
  });

export interface ToggleHumidifierProps {}

/**
 * Toggles the humidifier on/off.
 */
export const toggleHumidifier = (
  target: ITarget,
  params?: ToggleHumidifierProps,
) =>
  serviceCall({
    name: `Call humidifier.toggle`,
    params: {
      domain: 'humidifier',
      service: 'toggle',
      service_data: params,
    },
    target,
  });

export interface SetModeHumidifierProps {
  /**
   * Operation mode. For example, "normal", "eco", or "away". For a list of possible values, refer to the integration documentation.
   */
  mode: string;
}

/**
 * Sets the humidifier operation mode.
 */
export const setModeHumidifier = (
  target: ITarget,
  params: SetModeHumidifierProps,
) =>
  serviceCall({
    name: `Call humidifier.set_mode`,
    params: {
      domain: 'humidifier',
      service: 'set_mode',
      service_data: params,
    },
    target,
  });

export interface SetHumidityHumidifierProps {
  /**
   * Target humidity.
   */
  humidity: number;
}

/**
 * Sets the target humidity.
 */
export const setHumidityHumidifier = (
  target: ITarget,
  params: SetHumidityHumidifierProps,
) =>
  serviceCall({
    name: `Call humidifier.set_humidity`,
    params: {
      domain: 'humidifier',
      service: 'set_humidity',
      service_data: params,
    },
    target,
  });
