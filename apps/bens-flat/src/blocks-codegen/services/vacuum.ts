import { serviceCall, ITarget } from '@hass-blocks/core';

export interface StartVacuumProps {}

/**
 * Starts or resumes the cleaning task.
 */
export const startVacuum = (target: ITarget, params?: StartVacuumProps) =>
  serviceCall({
    name: `Call vacuum.start`,
    params: {
      domain: 'vacuum',
      service: 'start',
      service_data: params,
    },
    target,
  });

export interface PauseVacuumProps {}

/**
 * Pauses the cleaning task.
 */
export const pauseVacuum = (target: ITarget, params?: PauseVacuumProps) =>
  serviceCall({
    name: `Call vacuum.pause`,
    params: {
      domain: 'vacuum',
      service: 'pause',
      service_data: params,
    },
    target,
  });

export interface ReturnToBaseVacuumProps {}

/**
 * Tells the vacuum cleaner to return to its dock.
 */
export const returnToBaseVacuum = (
  target: ITarget,
  params?: ReturnToBaseVacuumProps,
) =>
  serviceCall({
    name: `Call vacuum.return_to_base`,
    params: {
      domain: 'vacuum',
      service: 'return_to_base',
      service_data: params,
    },
    target,
  });

export interface CleanSpotVacuumProps {}

/**
 * Tells the vacuum cleaner to do a spot clean-up.
 */
export const cleanSpotVacuum = (
  target: ITarget,
  params?: CleanSpotVacuumProps,
) =>
  serviceCall({
    name: `Call vacuum.clean_spot`,
    params: {
      domain: 'vacuum',
      service: 'clean_spot',
      service_data: params,
    },
    target,
  });

export interface LocateVacuumProps {}

/**
 * Locates the vacuum cleaner robot.
 */
export const locateVacuum = (target: ITarget, params?: LocateVacuumProps) =>
  serviceCall({
    name: `Call vacuum.locate`,
    params: {
      domain: 'vacuum',
      service: 'locate',
      service_data: params,
    },
    target,
  });

export interface StopVacuumProps {}

/**
 * Stops the current cleaning task.
 */
export const stopVacuum = (target: ITarget, params?: StopVacuumProps) =>
  serviceCall({
    name: `Call vacuum.stop`,
    params: {
      domain: 'vacuum',
      service: 'stop',
      service_data: params,
    },
    target,
  });

export interface SetFanSpeedVacuumProps {
  /**
   * Fan speed. The value depends on the integration. Some integrations have speed steps, like 'medium'. Some use a percentage, between 0 and 100.
   */
  fan_speed: string;
}

/**
 * Sets the fan speed of the vacuum cleaner.
 */
export const setFanSpeedVacuum = (
  target: ITarget,
  params: SetFanSpeedVacuumProps,
) =>
  serviceCall({
    name: `Call vacuum.set_fan_speed`,
    params: {
      domain: 'vacuum',
      service: 'set_fan_speed',
      service_data: params,
    },
    target,
  });

export interface SendCommandVacuumProps {
  /**
   * Command to execute. The commands are integration-specific.
   */
  command: string;
  /**
   * Parameters for the command. The parameters are integration-specific.
   */
  params?: never;
}

/**
 * Sends a command to the vacuum cleaner.
 */
export const sendCommandVacuum = (
  target: ITarget,
  params: SendCommandVacuumProps,
) =>
  serviceCall({
    name: `Call vacuum.send_command`,
    params: {
      domain: 'vacuum',
      service: 'send_command',
      service_data: params,
    },
    target,
  });
