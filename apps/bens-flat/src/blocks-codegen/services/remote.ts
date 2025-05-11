import { serviceCall, ITarget } from '@hass-blocks/core';

export interface TurnOffRemoteProps {}

/**
 * Sends the turn off command.
 */
export const turnOffRemote = (target: ITarget, params?: TurnOffRemoteProps) =>
  serviceCall({
    name: `Call remote.turn_off`,
    params: {
      domain: 'remote',
      service: 'turn_off',
      service_data: params,
    },
    target,
  });

export interface TurnOnRemoteProps {
  /**
   * Activity ID or activity name to be started.
   */
  activity?: string;
}

/**
 * Sends the turn on command.
 */
export const turnOnRemote = (target: ITarget, params?: TurnOnRemoteProps) =>
  serviceCall({
    name: `Call remote.turn_on`,
    params: {
      domain: 'remote',
      service: 'turn_on',
      service_data: params,
    },
    target,
  });

export interface ToggleRemoteProps {}

/**
 * Sends the toggle command.
 */
export const toggleRemote = (target: ITarget, params?: ToggleRemoteProps) =>
  serviceCall({
    name: `Call remote.toggle`,
    params: {
      domain: 'remote',
      service: 'toggle',
      service_data: params,
    },
    target,
  });

export interface SendCommandRemoteProps {
  /**
   * Device ID to send command to.
   */
  device?: string;
  /**
   * A single command or a list of commands to send.
   */
  command: never;
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
export const sendCommandRemote = (
  target: ITarget,
  params: SendCommandRemoteProps,
) =>
  serviceCall({
    name: `Call remote.send_command`,
    params: {
      domain: 'remote',
      service: 'send_command',
      service_data: params,
    },
    target,
  });

export interface LearnCommandRemoteProps {
  /**
   * Device ID to learn command from.
   */
  device?: string;
  /**
   * A single command or a list of commands to learn.
   */
  command?: never;
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
export const learnCommandRemote = (
  target: ITarget,
  params?: LearnCommandRemoteProps,
) =>
  serviceCall({
    name: `Call remote.learn_command`,
    params: {
      domain: 'remote',
      service: 'learn_command',
      service_data: params,
    },
    target,
  });

export interface DeleteCommandRemoteProps {
  /**
   * Device from which commands will be deleted.
   */
  device?: string;
  /**
   * The single command or the list of commands to be deleted.
   */
  command: never;
}

/**
 * Deletes a command or a list of commands from the database.
 */
export const deleteCommandRemote = (
  target: ITarget,
  params: DeleteCommandRemoteProps,
) =>
  serviceCall({
    name: `Call remote.delete_command`,
    params: {
      domain: 'remote',
      service: 'delete_command',
      service_data: params,
    },
    target,
  });
