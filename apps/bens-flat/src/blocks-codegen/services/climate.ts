import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  /**
   * Turns climate device on.
   */
  var turnOnClimate: (target: IEntity<`climate.${string}`> | IArea) => Block;

  /**
   * Turns climate device off.
   */
  var turnOffClimate: (target: IEntity<`climate.${string}`> | IArea) => Block;

  /**
   * Toggles climate device, from on to off, or off to on.
   */
  var toggleClimate: (target: IEntity<`climate.${string}`> | IArea) => Block;

  interface SetHvacModeClimateProps {
    /**
     * HVAC operation mode.
     */
    hvac_mode?: never;
  }

  /**
   * Sets HVAC operation mode.
   */
  var setHvacModeClimate: (
    target: IEntity<`climate.${string}`> | IArea,
    params?: SetHvacModeClimateProps,
  ) => Block;

  interface SetPresetModeClimateProps {
    /**
     * Preset mode.
     */
    preset_mode: string;
  }

  /**
   * Sets preset mode.
   */
  var setPresetModeClimate: (
    target: IEntity<`climate.${string}`> | IArea,
    params: SetPresetModeClimateProps,
  ) => Block;

  interface SetAuxHeatClimateProps {
    /**
     * New value of auxiliary heater.
     */
    aux_heat: boolean;
  }

  /**
   * Turns auxiliary heater on/off.
   */
  var setAuxHeatClimate: (
    target: IEntity<`climate.${string}`> | IArea,
    params: SetAuxHeatClimateProps,
  ) => Block;

  interface SetTemperatureClimateProps {
    /**
     * The temperature setpoint.
     */
    temperature?: number;
    /**
     * The max temperature setpoint.
     */
    target_temp_high?: number;
    /**
     * The min temperature setpoint.
     */
    target_temp_low?: number;
    /**
     * HVAC operation mode.
     */
    hvac_mode?: never;
  }

  /**
   * Sets the temperature setpoint.
   */
  var setTemperatureClimate: (
    target: IEntity<`climate.${string}`> | IArea,
    params?: SetTemperatureClimateProps,
  ) => Block;

  interface SetHumidityClimateProps {
    /**
     * Target humidity.
     */
    humidity: number;
  }

  /**
   * Sets target humidity.
   */
  var setHumidityClimate: (
    target: IEntity<`climate.${string}`> | IArea,
    params: SetHumidityClimateProps,
  ) => Block;

  interface SetFanModeClimateProps {
    /**
     * Fan operation mode.
     */
    fan_mode: string;
  }

  /**
   * Sets fan operation mode.
   */
  var setFanModeClimate: (
    target: IEntity<`climate.${string}`> | IArea,
    params: SetFanModeClimateProps,
  ) => Block;

  interface SetSwingModeClimateProps {
    /**
     * Swing operation mode.
     */
    swing_mode: string;
  }

  /**
   * Sets swing operation mode.
   */
  var setSwingModeClimate: (
    target: IEntity<`climate.${string}`> | IArea,
    params: SetSwingModeClimateProps,
  ) => Block;

  interface SetSwingHorizontalModeClimateProps {
    /**
     * Horizontal swing operation mode.
     */
    swing_horizontal_mode: string;
  }

  /**
   * Sets horizontal swing operation mode.
   */
  var setSwingHorizontalModeClimate: (
    target: IEntity<`climate.${string}`> | IArea,
    params: SetSwingHorizontalModeClimateProps,
  ) => Block;
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

globalThis.setAuxHeatClimate = (target, params) =>
  serviceCall({
    name: `Call climate.set_aux_heat`,
    params: {
      domain: 'climate',
      service: 'set_aux_heat',
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
