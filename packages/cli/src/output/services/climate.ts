import { serviceCall, ITarget } from '@hass-blocks/core';

export interface TurnOnClimateProps {
  target: ITarget;
}

/**
 * Turns climate device on.
 */
export const turnOnClimate = ({ target, ...params }: TurnOnClimateProps) =>
  serviceCall({
    name: `Call climate.turn_on`,
    params: {
      domain: 'climate',
      service: 'turn_on',
      service_data: params,
    },
    target,
  });

export interface TurnOffClimateProps {
  target: ITarget;
}

/**
 * Turns climate device off.
 */
export const turnOffClimate = ({ target, ...params }: TurnOffClimateProps) =>
  serviceCall({
    name: `Call climate.turn_off`,
    params: {
      domain: 'climate',
      service: 'turn_off',
      service_data: params,
    },
    target,
  });

export interface ToggleClimateProps {
  target: ITarget;
}

/**
 * Toggles climate device, from on to off, or off to on.
 */
export const toggleClimate = ({ target, ...params }: ToggleClimateProps) =>
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
  target: ITarget;
}

/**
 * Sets HVAC operation mode.
 */
export const setHvacModeClimate = ({
  target,
  ...params
}: SetHvacModeClimateProps) =>
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
  target: ITarget;
}

/**
 * Sets preset mode.
 */
export const setPresetModeClimate = ({
  target,
  ...params
}: SetPresetModeClimateProps) =>
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
  target: ITarget;
}

/**
 * Turns auxiliary heater on/off.
 */
export const setAuxHeatClimate = ({
  target,
  ...params
}: SetAuxHeatClimateProps) =>
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
  target: ITarget;
}

/**
 * Sets the temperature setpoint.
 */
export const setTemperatureClimate = ({
  target,
  ...params
}: SetTemperatureClimateProps) =>
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
  target: ITarget;
}

/**
 * Sets target humidity.
 */
export const setHumidityClimate = ({
  target,
  ...params
}: SetHumidityClimateProps) =>
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
  target: ITarget;
}

/**
 * Sets fan operation mode.
 */
export const setFanModeClimate = ({
  target,
  ...params
}: SetFanModeClimateProps) =>
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
  target: ITarget;
}

/**
 * Sets swing operation mode.
 */
export const setSwingModeClimate = ({
  target,
  ...params
}: SetSwingModeClimateProps) =>
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
  target: ITarget;
}

/**
 * Sets horizontal swing operation mode.
 */
export const setSwingHorizontalModeClimate = ({
  target,
  ...params
}: SetSwingHorizontalModeClimateProps) =>
  serviceCall({
    name: `Call climate.set_swing_horizontal_mode`,
    params: {
      domain: 'climate',
      service: 'set_swing_horizontal_mode',
      service_data: params,
    },
    target,
  });
