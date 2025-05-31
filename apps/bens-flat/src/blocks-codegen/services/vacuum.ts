import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  /**
   * Starts or resumes the cleaning task.
   */
  var startVacuum: (
    target: IEntity<`vacuum.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Pauses the cleaning task.
   */
  var pauseVacuum: (
    target: IEntity<`vacuum.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Tells the vacuum cleaner to return to its dock.
   */
  var returnToBaseVacuum: (
    target: IEntity<`vacuum.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Tells the vacuum cleaner to do a spot clean-up.
   */
  var cleanSpotVacuum: (
    target: IEntity<`vacuum.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Locates the vacuum cleaner robot.
   */
  var locateVacuum: (
    target: IEntity<`vacuum.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Stops the current cleaning task.
   */
  var stopVacuum: (
    target: IEntity<`vacuum.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface SetFanSpeedVacuumProps {
    /**
     * Fan speed. The value depends on the integration. Some integrations have speed steps, like 'medium'. Some use a percentage, between 0 and 100.
     */
    fan_speed: string;
  }

  /**
   * Sets the fan speed of the vacuum cleaner.
   */
  var setFanSpeedVacuum: (
    target: IEntity<`vacuum.${string}`> | IArea,
    params: SetFanSpeedVacuumProps,
  ) => Block<
    Partial<ServiceCallArgs<SetFanSpeedVacuumProps>> | undefined,
    void
  >;

  interface SendCommandVacuumProps {
    /**
     * Command to execute. The commands are integration-specific.
     */
    command: string;
    /**
     * Parameters for the command. The parameters are integration-specific.
     */
    params?: Record<string, unknown>;
  }

  /**
   * Sends a command to the vacuum cleaner.
   */
  var sendCommandVacuum: (
    target: IEntity<`vacuum.${string}`> | IArea,
    params: SendCommandVacuumProps,
  ) => Block<
    Partial<ServiceCallArgs<SendCommandVacuumProps>> | undefined,
    void
  >;
}

globalThis.startVacuum = (target) =>
  serviceCall({
    name: `Call vacuum.start`,
    params: {
      domain: 'vacuum',
      service: 'start',
    },
    target,
  });

globalThis.pauseVacuum = (target) =>
  serviceCall({
    name: `Call vacuum.pause`,
    params: {
      domain: 'vacuum',
      service: 'pause',
    },
    target,
  });

globalThis.returnToBaseVacuum = (target) =>
  serviceCall({
    name: `Call vacuum.return_to_base`,
    params: {
      domain: 'vacuum',
      service: 'return_to_base',
    },
    target,
  });

globalThis.cleanSpotVacuum = (target) =>
  serviceCall({
    name: `Call vacuum.clean_spot`,
    params: {
      domain: 'vacuum',
      service: 'clean_spot',
    },
    target,
  });

globalThis.locateVacuum = (target) =>
  serviceCall({
    name: `Call vacuum.locate`,
    params: {
      domain: 'vacuum',
      service: 'locate',
    },
    target,
  });

globalThis.stopVacuum = (target) =>
  serviceCall({
    name: `Call vacuum.stop`,
    params: {
      domain: 'vacuum',
      service: 'stop',
    },
    target,
  });

globalThis.setFanSpeedVacuum = (target, params) =>
  serviceCall({
    name: `Call vacuum.set_fan_speed`,
    params: {
      domain: 'vacuum',
      service: 'set_fan_speed',
      service_data: params,
    },
    target,
  });

globalThis.sendCommandVacuum = (target, params) =>
  serviceCall({
    name: `Call vacuum.send_command`,
    params: {
      domain: 'vacuum',
      service: 'send_command',
      service_data: params,
    },
    target,
  });
