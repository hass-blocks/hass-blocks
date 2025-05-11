import { serviceCall, ITarget } from '@hass-blocks/core';

export interface TurnOnSirenProps {
  /**
   * The tone to emit. When `available_tones` property is a map, either the key or the value can be used. Must be supported by the integration.
   */
  tone?: string;
  /**
   * The volume. 0 is inaudible, 1 is the maximum volume. Must be supported by the integration.
   */
  volume_level?: number;
  /**
   * Number of seconds the sound is played. Must be supported by the integration.
   */
  duration?: string;
}

/**
 * Turns the siren on.
 */
export const turnOnSiren = (target: ITarget, params?: TurnOnSirenProps) =>
  serviceCall({
    name: `Call siren.turn_on`,
    params: {
      domain: 'siren',
      service: 'turn_on',
      service_data: params,
    },
    target,
  });

export interface TurnOffSirenProps {}

/**
 * Turns the siren off.
 */
export const turnOffSiren = (target: ITarget, params?: TurnOffSirenProps) =>
  serviceCall({
    name: `Call siren.turn_off`,
    params: {
      domain: 'siren',
      service: 'turn_off',
      service_data: params,
    },
    target,
  });

export interface ToggleSirenProps {}

/**
 * Toggles the siren on/off.
 */
export const toggleSiren = (target: ITarget, params?: ToggleSirenProps) =>
  serviceCall({
    name: `Call siren.toggle`,
    params: {
      domain: 'siren',
      service: 'toggle',
      service_data: params,
    },
    target,
  });
