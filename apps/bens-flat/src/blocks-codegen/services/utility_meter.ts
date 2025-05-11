import { serviceCall, ITarget } from '@hass-blocks/core';

export interface ResetUtilityMeterProps {}

/**
 * Resets all counters of a utility meter.
 */
export const resetUtilityMeter = (
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

/**
 * Calibrates a utility meter sensor.
 */
export const calibrateUtilityMeter = (
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
