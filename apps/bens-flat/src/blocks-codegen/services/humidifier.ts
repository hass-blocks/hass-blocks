import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  /**
   * Turns the humidifier on.
   */
  var turnOnHumidifier: (
    target: IEntity<`humidifier.${string}`> | IArea<string>,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Turns the humidifier off.
   */
  var turnOffHumidifier: (
    target: IEntity<`humidifier.${string}`> | IArea<string>,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Toggles the humidifier on/off.
   */
  var toggleHumidifier: (
    target: IEntity<`humidifier.${string}`> | IArea<string>,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface SetModeHumidifier {
    /**
     * Operation mode. For example, "normal", "eco", or "away". For a list of possible values, refer to the integration documentation.
     */
    mode: string;
  }

  /**
   * Sets the humidifier operation mode.
   */
  var setModeHumidifier: (
    target: IEntity<`humidifier.${string}`> | IArea<string>,
    params: SetModeHumidifier,
  ) => Block<Partial<ServiceCallArgs<SetModeHumidifier>> | undefined, void>;

  interface SetHumidityHumidifier {
    /**
     * Target humidity.
     */
    humidity: number;
  }

  /**
   * Sets the target humidity.
   */
  var setHumidityHumidifier: (
    target: IEntity<`humidifier.${string}`> | IArea<string>,
    params: SetHumidityHumidifier,
  ) => Block<Partial<ServiceCallArgs<SetHumidityHumidifier>> | undefined, void>;
}

globalThis.turnOnHumidifier = (target) =>
  serviceCall({
    name: `Call humidifier.turn_on`,
    params: {
      domain: 'humidifier',
      service: 'turn_on',
    },
    target,
  });

globalThis.turnOffHumidifier = (target) =>
  serviceCall({
    name: `Call humidifier.turn_off`,
    params: {
      domain: 'humidifier',
      service: 'turn_off',
    },
    target,
  });

globalThis.toggleHumidifier = (target) =>
  serviceCall({
    name: `Call humidifier.toggle`,
    params: {
      domain: 'humidifier',
      service: 'toggle',
    },
    target,
  });

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
