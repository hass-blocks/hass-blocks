import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Resets all counters of a utility meter.
   */
  var resetUtilityMeter: (
    target: ITarget,
    params?: ResetUtilityMeterProps,
  ) => Block;
  /**
   * Calibrates a utility meter sensor.
   */
  var calibrateUtilityMeter: (
    target: ITarget,
    params: CalibrateUtilityMeterProps,
  ) => Block;
}

export interface ResetUtilityMeterProps {}

globalThis.resetUtilityMeter = (
  target: ITarget,
  params?: ResetUtilityMeterProps,
) =>
  serviceCall({
    name: `Call utility_meter.reset`,
    params: {
      domain: 'utility_meter',
      service: 'reset',
      service_data: params,
    },
    target,
  });

export interface CalibrateUtilityMeterProps {
  /**
   * Value to which set the meter.
   */
  value: string;
}

globalThis.calibrateUtilityMeter = (
  target: ITarget,
  params: CalibrateUtilityMeterProps,
) =>
  serviceCall({
    name: `Call utility_meter.calibrate`,
    params: {
      domain: 'utility_meter',
      service: 'calibrate',
      service_data: params,
    },
    target,
  });
