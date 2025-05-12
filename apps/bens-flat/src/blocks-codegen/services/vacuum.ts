import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Starts or resumes the cleaning task.
   */
  var startVacuum: (target: ITarget, params?: StartVacuumProps) => Block;
  /**
   * Pauses the cleaning task.
   */
  var pauseVacuum: (target: ITarget, params?: PauseVacuumProps) => Block;
  /**
   * Tells the vacuum cleaner to return to its dock.
   */
  var returnToBaseVacuum: (
    target: ITarget,
    params?: ReturnToBaseVacuumProps,
  ) => Block;
  /**
   * Tells the vacuum cleaner to do a spot clean-up.
   */
  var cleanSpotVacuum: (
    target: ITarget,
    params?: CleanSpotVacuumProps,
  ) => Block;
  /**
   * Locates the vacuum cleaner robot.
   */
  var locateVacuum: (target: ITarget, params?: LocateVacuumProps) => Block;
  /**
   * Stops the current cleaning task.
   */
  var stopVacuum: (target: ITarget, params?: StopVacuumProps) => Block;
  /**
   * Sets the fan speed of the vacuum cleaner.
   */
  var setFanSpeedVacuum: (
    target: ITarget,
    params: SetFanSpeedVacuumProps,
  ) => Block;
  /**
   * Sends a command to the vacuum cleaner.
   */
  var sendCommandVacuum: (
    target: ITarget,
    params: SendCommandVacuumProps,
  ) => Block;
}

export interface StartVacuumProps {}

globalThis.startVacuum = (target: ITarget, params?: StartVacuumProps) =>
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

globalThis.pauseVacuum = (target: ITarget, params?: PauseVacuumProps) =>
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

globalThis.returnToBaseVacuum = (
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

globalThis.cleanSpotVacuum = (target: ITarget, params?: CleanSpotVacuumProps) =>
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

globalThis.locateVacuum = (target: ITarget, params?: LocateVacuumProps) =>
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

globalThis.stopVacuum = (target: ITarget, params?: StopVacuumProps) =>
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

globalThis.setFanSpeedVacuum = (
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

globalThis.sendCommandVacuum = (
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
