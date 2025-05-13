import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  /**
   * Resets all counters of a utility meter.
   */
  var resetUtilityMeter: (target: IEntity<`select.${string}`> | IArea) => Block;

  interface CalibrateUtilityMeterProps {
    /**
     * Value to which set the meter.
     */
    value: string;
  }

  /**
   * Calibrates a utility meter sensor.
   */
  var calibrateUtilityMeter: (
    target: IEntity<`sensor.${string}`> | IArea,
    params?: CalibrateUtilityMeterProps,
  ) => Block;
}

globalThis.resetUtilityMeter = (target) =>
  serviceCall({
    name: `Call utility_meter.reset`,
    params: {
      domain: 'utility_meter',
      service: 'reset',
    },
    target,
  });

globalThis.calibrateUtilityMeter = (target, params) =>
  serviceCall({
    name: `Call utility_meter.calibrate`,
    params: {
      domain: 'utility_meter',
      service: 'calibrate',
      service_data: params,
    },
    target,
  });
