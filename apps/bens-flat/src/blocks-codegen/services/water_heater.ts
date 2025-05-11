import { serviceCall, ITarget } from '@hass-blocks/core';

export interface TurnOnWaterHeaterProps {}

/**
 * Turns water heater on.
 */
export const turnOnWaterHeater = (
  target: ITarget,
  params?: TurnOnWaterHeaterProps,
) =>
  serviceCall({
    name: `Call water_heater.turn_on`,
    params: {
      domain: 'water_heater',
      service: 'turn_on',
      service_data: params,
    },
    target,
  });

export interface TurnOffWaterHeaterProps {}

/**
 * Turns water heater off.
 */
export const turnOffWaterHeater = (
  target: ITarget,
  params?: TurnOffWaterHeaterProps,
) =>
  serviceCall({
    name: `Call water_heater.turn_off`,
    params: {
      domain: 'water_heater',
      service: 'turn_off',
      service_data: params,
    },
    target,
  });

export interface SetAwayModeWaterHeaterProps {
  /**
   * New value of away mode.
   */
  away_mode: boolean;
}

/**
 * Turns away mode on/off.
 */
export const setAwayModeWaterHeater = (
  target: ITarget,
  params: SetAwayModeWaterHeaterProps,
) =>
  serviceCall({
    name: `Call water_heater.set_away_mode`,
    params: {
      domain: 'water_heater',
      service: 'set_away_mode',
      service_data: params,
    },
    target,
  });

export interface SetTemperatureWaterHeaterProps {
  /**
   * New target temperature for the water heater.
   */
  temperature: number;
  /**
   * New value of the operation mode. For a list of possible modes, refer to the integration documentation.
   */
  operation_mode?: string;
}

/**
 * Sets the target temperature.
 */
export const setTemperatureWaterHeater = (
  target: ITarget,
  params: SetTemperatureWaterHeaterProps,
) =>
  serviceCall({
    name: `Call water_heater.set_temperature`,
    params: {
      domain: 'water_heater',
      service: 'set_temperature',
      service_data: params,
    },
    target,
  });

export interface SetOperationModeWaterHeaterProps {
  /**
   * New value of the operation mode. For a list of possible modes, refer to the integration documentation.
   */
  operation_mode: string;
}

/**
 * Sets the operation mode.
 */
export const setOperationModeWaterHeater = (
  target: ITarget,
  params: SetOperationModeWaterHeaterProps,
) =>
  serviceCall({
    name: `Call water_heater.set_operation_mode`,
    params: {
      domain: 'water_heater',
      service: 'set_operation_mode',
      service_data: params,
    },
    target,
  });
