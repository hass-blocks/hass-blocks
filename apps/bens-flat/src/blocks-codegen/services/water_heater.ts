import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Turns water heater on.
   */
  var turnOnWaterHeater: (
    target: ITarget,
    params?: TurnOnWaterHeaterProps,
  ) => Block;
  /**
   * Turns water heater off.
   */
  var turnOffWaterHeater: (
    target: ITarget,
    params?: TurnOffWaterHeaterProps,
  ) => Block;
  /**
   * Turns away mode on/off.
   */
  var setAwayModeWaterHeater: (
    target: ITarget,
    params: SetAwayModeWaterHeaterProps,
  ) => Block;
  /**
   * Sets the target temperature.
   */
  var setTemperatureWaterHeater: (
    target: ITarget,
    params: SetTemperatureWaterHeaterProps,
  ) => Block;
  /**
   * Sets the operation mode.
   */
  var setOperationModeWaterHeater: (
    target: ITarget,
    params: SetOperationModeWaterHeaterProps,
  ) => Block;
}

export interface TurnOnWaterHeaterProps {}

globalThis.turnOnWaterHeater = (
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

globalThis.turnOffWaterHeater = (
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

globalThis.setAwayModeWaterHeater = (
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

globalThis.setTemperatureWaterHeater = (
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

globalThis.setOperationModeWaterHeater = (
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
