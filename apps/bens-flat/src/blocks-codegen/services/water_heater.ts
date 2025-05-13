import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  /**
   * Turns water heater on.
   */
  var turnOnWaterHeater: (
    target: IEntity<`water_heater.${string}`> | IArea,
  ) => Block;

  /**
   * Turns water heater off.
   */
  var turnOffWaterHeater: (
    target: IEntity<`water_heater.${string}`> | IArea,
  ) => Block;

  interface SetAwayModeWaterHeaterProps {
    /**
     * New value of away mode.
     */
    away_mode: boolean;
  }

  /**
   * Turns away mode on/off.
   */
  var setAwayModeWaterHeater: (
    target: IEntity<`water_heater.${string}`> | IArea,
    params?: SetAwayModeWaterHeaterProps,
  ) => Block;

  interface SetTemperatureWaterHeaterProps {
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
  var setTemperatureWaterHeater: (
    target: IEntity<`water_heater.${string}`> | IArea,
    params?: SetTemperatureWaterHeaterProps,
  ) => Block;

  interface SetOperationModeWaterHeaterProps {
    /**
     * New value of the operation mode. For a list of possible modes, refer to the integration documentation.
     */
    operation_mode: string;
  }

  /**
   * Sets the operation mode.
   */
  var setOperationModeWaterHeater: (
    target: IEntity<`water_heater.${string}`> | IArea,
    params?: SetOperationModeWaterHeaterProps,
  ) => Block;
}

globalThis.turnOnWaterHeater = (target) =>
  serviceCall({
    name: `Call water_heater.turn_on`,
    params: {
      domain: 'water_heater',
      service: 'turn_on',
    },
    target,
  });

globalThis.turnOffWaterHeater = (target) =>
  serviceCall({
    name: `Call water_heater.turn_off`,
    params: {
      domain: 'water_heater',
      service: 'turn_off',
    },
    target,
  });

globalThis.setAwayModeWaterHeater = (target, params) =>
  serviceCall({
    name: `Call water_heater.set_away_mode`,
    params: {
      domain: 'water_heater',
      service: 'set_away_mode',
      service_data: params,
    },
    target,
  });

globalThis.setTemperatureWaterHeater = (target, params) =>
  serviceCall({
    name: `Call water_heater.set_temperature`,
    params: {
      domain: 'water_heater',
      service: 'set_temperature',
      service_data: params,
    },
    target,
  });

globalThis.setOperationModeWaterHeater = (target, params) =>
  serviceCall({
    name: `Call water_heater.set_operation_mode`,
    params: {
      domain: 'water_heater',
      service: 'set_operation_mode',
      service_data: params,
    },
    target,
  });
