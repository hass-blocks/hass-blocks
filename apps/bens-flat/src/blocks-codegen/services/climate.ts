import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Turns climate device on.
   */
  var turnOnClimate: (
    target: IEntity<`climate.${string}`> | IArea,
    params?: TurnOnClimateProps,
  ) => Block;
  /**
   * Turns climate device off.
   */
  var turnOffClimate: (
    target: IEntity<`climate.${string}`> | IArea,
    params?: TurnOffClimateProps,
  ) => Block;
  /**
   * Toggles climate device, from on to off, or off to on.
   */
  var toggleClimate: (
    target: IEntity<`climate.${string}`> | IArea,
    params?: ToggleClimateProps,
  ) => Block;
  /**
   * Sets HVAC operation mode.
   */
  var setHvacModeClimate: (
    target: IEntity<`climate.${string}`> | IArea,
    params?: SetHvacModeClimateProps,
  ) => Block;
  /**
   * Sets preset mode.
   */
  var setPresetModeClimate: (
    target: IEntity<`climate.${string}`> | IArea,
    params: SetPresetModeClimateProps,
  ) => Block;
  /**
   * Turns auxiliary heater on/off.
   */
  var setAuxHeatClimate: (
    target: IEntity<`climate.${string}`> | IArea,
    params: SetAuxHeatClimateProps,
  ) => Block;
  /**
   * Sets the temperature setpoint.
   */
  var setTemperatureClimate: (
    target: IEntity<`climate.${string}`> | IArea,
    params?: SetTemperatureClimateProps,
  ) => Block;
  /**
   * Sets target humidity.
   */
  var setHumidityClimate: (
    target: IEntity<`climate.${string}`> | IArea,
    params: SetHumidityClimateProps,
  ) => Block;
  /**
   * Sets fan operation mode.
   */
  var setFanModeClimate: (
    target: IEntity<`climate.${string}`> | IArea,
    params: SetFanModeClimateProps,
  ) => Block;
  /**
   * Sets swing operation mode.
   */
  var setSwingModeClimate: (
    target: IEntity<`climate.${string}`> | IArea,
    params: SetSwingModeClimateProps,
  ) => Block;
  /**
   * Sets horizontal swing operation mode.
   */
  var setSwingHorizontalModeClimate: (
    target: IEntity<`climate.${string}`> | IArea,
    params: SetSwingHorizontalModeClimateProps,
  ) => Block;
}

export interface TurnOnClimateProps {}

globalThis.turnOnClimate = (target, params) =>
  serviceCall({
    name: `Call climate.turn_on`,
    params: {
      domain: 'climate',
      service: 'turn_on',
      service_data: params,
    },
    target,
  });

export interface TurnOffClimateProps {}

globalThis.turnOffClimate = (target, params) =>
  serviceCall({
    name: `Call climate.turn_off`,
    params: {
      domain: 'climate',
      service: 'turn_off',
      service_data: params,
    },
    target,
  });

export interface ToggleClimateProps {}

globalThis.toggleClimate = (target, params) =>
  serviceCall({
    name: `Call climate.toggle`,
    params: {
      domain: 'climate',
      service: 'toggle',
      service_data: params,
    },
    target,
  });

export interface SetHvacModeClimateProps {
  /**
   * HVAC operation mode.
   */
  hvac_mode?: never;
}

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

export interface SetPresetModeClimateProps {
  /**
   * Preset mode.
   */
  preset_mode: string;
}

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

export interface SetAuxHeatClimateProps {
  /**
   * New value of auxiliary heater.
   */
  aux_heat: boolean;
}

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

export interface SetTemperatureClimateProps {
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

export interface SetHumidityClimateProps {
  /**
   * Target humidity.
   */
  humidity: number;
}

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

export interface SetFanModeClimateProps {
  /**
   * Fan operation mode.
   */
  fan_mode: string;
}

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

export interface SetSwingModeClimateProps {
  /**
   * Swing operation mode.
   */
  swing_mode: string;
}

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

export interface SetSwingHorizontalModeClimateProps {
  /**
   * Horizontal swing operation mode.
   */
  swing_horizontal_mode: string;
}

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
