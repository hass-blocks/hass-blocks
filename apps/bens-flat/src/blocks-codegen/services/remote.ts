import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  /**
   * Sends the turn off command.
   */
  var turnOffRemote: (
    target: IEntity<`remote.${string}`> | IArea<string>,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface TurnOnRemote {
    /**
     * Activity ID or activity name to be started.
     */
    activity?: string;
  }

  /**
   * Sends the turn on command.
   */
  var turnOnRemote: (
    target: IEntity<`remote.${string}`> | IArea<string>,
    params?: TurnOnRemote,
  ) => Block<Partial<ServiceCallArgs<TurnOnRemote>> | undefined, void>;

  /**
   * Sends the toggle command.
   */
  var toggleRemote: (
    target: IEntity<`remote.${string}`> | IArea<string>,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface SendCommandRemote {
    /**
     * Device ID to send command to.
     */
    device?: string;
    /**
     * A single command or a list of commands to send.
     */
    command: Record<string, unknown>;
    /**
     * The number of times you want to repeat the commands.
     */
    num_repeats?: number;
    /**
     * The time you want to wait in between repeated commands.
     */
    delay_secs?: number;
    /**
     * The time you want to have it held before the release is send.
     */
    hold_secs?: number;
  }

  /**
   * Sends a command or a list of commands to a device.
   */
  var sendCommandRemote: (
    target: IEntity<`remote.${string}`> | IArea<string>,
    params: SendCommandRemote,
  ) => Block<Partial<ServiceCallArgs<SendCommandRemote>> | undefined, void>;

  interface LearnCommandRemote {
    /**
     * Device ID to learn command from.
     */
    device?: string;
    /**
     * A single command or a list of commands to learn.
     */
    command?: Record<string, unknown>;
    /**
     * The type of command to be learned.
     */
    command_type?: never;
    /**
     * If code must be stored as an alternative. This is useful for discrete codes. Discrete codes are used for toggles that only perform one function. For example, a code to only turn a device on. If it is on already, sending the code won't change the state.
     */
    alternative?: boolean;
    /**
     * Timeout for the command to be learned.
     */
    timeout?: number;
  }

  /**
   * Learns a command or a list of commands from a device.
   */
  var learnCommandRemote: (
    target: IEntity<`remote.${string}`> | IArea<string>,
    params?: LearnCommandRemote,
  ) => Block<Partial<ServiceCallArgs<LearnCommandRemote>> | undefined, void>;

  interface DeleteCommandRemote {
    /**
     * Device from which commands will be deleted.
     */
    device?: string;
    /**
     * The single command or the list of commands to be deleted.
     */
    command: Record<string, unknown>;
  }

  /**
   * Deletes a command or a list of commands from the database.
   */
  var deleteCommandRemote: (
    target: IEntity<`remote.${string}`> | IArea<string>,
    params: DeleteCommandRemote,
  ) => Block<Partial<ServiceCallArgs<DeleteCommandRemote>> | undefined, void>;
}

globalThis.turnOffRemote = (target) =>
  serviceCall({
    name: `Call remote.turn_off`,
    params: {
      domain: 'remote',
      service: 'turn_off',
    },
    target,
  });

globalThis.turnOnRemote = (target, params) =>
  serviceCall({
    name: `Call remote.turn_on`,
    params: {
      domain: 'remote',
      service: 'turn_on',
      service_data: params,
    },
    target,
  });

globalThis.toggleRemote = (target) =>
  serviceCall({
    name: `Call remote.toggle`,
    params: {
      domain: 'remote',
      service: 'toggle',
    },
    target,
  });

globalThis.sendCommandRemote = (target, params) =>
  serviceCall({
    name: `Call remote.send_command`,
    params: {
      domain: 'remote',
      service: 'send_command',
      service_data: params,
    },
    target,
  });

globalThis.learnCommandRemote = (target, params) =>
  serviceCall({
    name: `Call remote.learn_command`,
    params: {
      domain: 'remote',
      service: 'learn_command',
      service_data: params,
    },
    target,
  });

globalThis.deleteCommandRemote = (target, params) =>
  serviceCall({
    name: `Call remote.delete_command`,
    params: {
      domain: 'remote',
      service: 'delete_command',
      service_data: params,
    },
    target,
  });
