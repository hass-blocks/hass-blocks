import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  /**
   * Turns climate device on
   */
  var turnOnClimate: (
    target: IEntity<`climate.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;

  /**
   * Turns climate device off
   */
  var turnOffClimate: (
    target: IEntity<`climate.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;

  /**
   * Toggles climate device, from on to off, or off to on
   */
  var toggleClimate: (
    target: IEntity<`climate.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;

  interface SetHvacModeClimate {
    /**
     * HVAC operation mode
     */
    hvac_mode?: never;
  }

  /**
   * Sets HVAC operation mode
   */
  var setHvacModeClimate: (
    target: IEntity<`climate.${string}`> | IArea<string>,
    params?: SetHvacModeClimate,
  ) => Block<Partial<SetHvacModeClimate> | undefined, void>;

  interface SetPresetModeClimate {
    /**
     * Preset mode
     */
    preset_mode: string;
  }

  /**
   * Sets preset mode
   */
  var setPresetModeClimate: (
    target: IEntity<`climate.${string}`> | IArea<string>,
    params: SetPresetModeClimate,
  ) => Block<Partial<SetPresetModeClimate> | undefined, void>;

  interface SetTemperatureClimate {
    /**
     * The temperature setpoint
     */
    temperature?: number;
    /**
     * The max temperature setpoint
     */
    target_temp_high?: number;
    /**
     * The min temperature setpoint
     */
    target_temp_low?: number;
    /**
     * HVAC operation mode
     */
    hvac_mode?: never;
  }

  /**
   * Sets the temperature setpoint
   */
  var setTemperatureClimate: (
    target: IEntity<`climate.${string}`> | IArea<string>,
    params?: SetTemperatureClimate,
  ) => Block<Partial<SetTemperatureClimate> | undefined, void>;

  interface SetHumidityClimate {
    /**
     * Target humidity
     */
    humidity: number;
  }

  /**
   * Sets target humidity
   */
  var setHumidityClimate: (
    target: IEntity<`climate.${string}`> | IArea<string>,
    params: SetHumidityClimate,
  ) => Block<Partial<SetHumidityClimate> | undefined, void>;

  interface SetFanModeClimate {
    /**
     * Fan operation mode
     */
    fan_mode: string;
  }

  /**
   * Sets fan operation mode
   */
  var setFanModeClimate: (
    target: IEntity<`climate.${string}`> | IArea<string>,
    params: SetFanModeClimate,
  ) => Block<Partial<SetFanModeClimate> | undefined, void>;

  interface SetSwingModeClimate {
    /**
     * Swing operation mode
     */
    swing_mode: string;
  }

  /**
   * Sets swing operation mode
   */
  var setSwingModeClimate: (
    target: IEntity<`climate.${string}`> | IArea<string>,
    params: SetSwingModeClimate,
  ) => Block<Partial<SetSwingModeClimate> | undefined, void>;

  interface SetSwingHorizontalModeClimate {
    /**
     * Horizontal swing operation mode
     */
    swing_horizontal_mode: string;
  }

  /**
   * Sets horizontal swing operation mode
   */
  var setSwingHorizontalModeClimate: (
    target: IEntity<`climate.${string}`> | IArea<string>,
    params: SetSwingHorizontalModeClimate,
  ) => Block<Partial<SetSwingHorizontalModeClimate> | undefined, void>;
}

globalThis.turnOnClimate = (target) =>
  serviceCall({
    name: `Call climate.turn_on`,
    params: {
      domain: 'climate',
      service: 'turn_on',
    },
    target,
  });

globalThis.turnOffClimate = (target) =>
  serviceCall({
    name: `Call climate.turn_off`,
    params: {
      domain: 'climate',
      service: 'turn_off',
    },
    target,
  });

globalThis.toggleClimate = (target) =>
  serviceCall({
    name: `Call climate.toggle`,
    params: {
      domain: 'climate',
      service: 'toggle',
    },
    target,
  });

globalThis.setHvacModeClimate = (target, params) =>
  serviceCall({
    name: `Call climate.set_hvac_mode`,
    params: {
      domain: 'climate',
      service: 'set_hvac_mode',
      service_data: params,
    },
    target,
  });

globalThis.setPresetModeClimate = (target, params) =>
  serviceCall({
    name: `Call climate.set_preset_mode`,
    params: {
      domain: 'climate',
      service: 'set_preset_mode',
      service_data: params,
    },
    target,
  });

globalThis.setTemperatureClimate = (target, params) =>
  serviceCall({
    name: `Call climate.set_temperature`,
    params: {
      domain: 'climate',
      service: 'set_temperature',
      service_data: params,
    },
    target,
  });

globalThis.setHumidityClimate = (target, params) =>
  serviceCall({
    name: `Call climate.set_humidity`,
    params: {
      domain: 'climate',
      service: 'set_humidity',
      service_data: params,
    },
    target,
  });

globalThis.setFanModeClimate = (target, params) =>
  serviceCall({
    name: `Call climate.set_fan_mode`,
    params: {
      domain: 'climate',
      service: 'set_fan_mode',
      service_data: params,
    },
    target,
  });

globalThis.setSwingModeClimate = (target, params) =>
  serviceCall({
    name: `Call climate.set_swing_mode`,
    params: {
      domain: 'climate',
      service: 'set_swing_mode',
      service_data: params,
    },
    target,
  });

globalThis.setSwingHorizontalModeClimate = (target, params) =>
  serviceCall({
    name: `Call climate.set_swing_horizontal_mode`,
    params: {
      domain: 'climate',
      service: 'set_swing_horizontal_mode',
      service_data: params,
    },
    target,
  });
