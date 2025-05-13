import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Turns the humidifier on.
   */
  var turnOnHumidifier: (
    target: IEntity<`humidifier.${string}`> | IArea,
    params?: TurnOnHumidifierProps,
  ) => Block;
  /**
   * Turns the humidifier off.
   */
  var turnOffHumidifier: (
    target: IEntity<`humidifier.${string}`> | IArea,
    params?: TurnOffHumidifierProps,
  ) => Block;
  /**
   * Toggles the humidifier on/off.
   */
  var toggleHumidifier: (
    target: IEntity<`humidifier.${string}`> | IArea,
    params?: ToggleHumidifierProps,
  ) => Block;
  /**
   * Sets the humidifier operation mode.
   */
  var setModeHumidifier: (
    target: IEntity<`humidifier.${string}`> | IArea,
    params: SetModeHumidifierProps,
  ) => Block;
  /**
   * Sets the target humidity.
   */
  var setHumidityHumidifier: (
    target: IEntity<`humidifier.${string}`> | IArea,
    params: SetHumidityHumidifierProps,
  ) => Block;
}

export interface TurnOnHumidifierProps {}

globalThis.turnOnHumidifier = (target, params) =>
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

globalThis.turnOffHumidifier = (target, params) =>
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

globalThis.toggleHumidifier = (target, params) =>
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

globalThis.setModeHumidifier = (target, params) =>
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

globalThis.setHumidityHumidifier = (target, params) =>
  serviceCall({
    name: `Call humidifier.set_humidity`,
    params: {
      domain: 'humidifier',
      service: 'set_humidity',
      service_data: params,
    },
    target,
  });
