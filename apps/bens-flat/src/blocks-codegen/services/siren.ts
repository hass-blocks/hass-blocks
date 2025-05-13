import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Turns the siren on.
   */
  var turnOnSiren: (
    target: IEntity<`siren.${string}`> | IArea,
    params?: TurnOnSirenProps,
  ) => Block;
  /**
   * Turns the siren off.
   */
  var turnOffSiren: (
    target: IEntity<`siren.${string}`> | IArea,
    params?: TurnOffSirenProps,
  ) => Block;
  /**
   * Toggles the siren on/off.
   */
  var toggleSiren: (
    target: IEntity<`siren.${string}`> | IArea,
    params?: ToggleSirenProps,
  ) => Block;
}

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

globalThis.turnOnSiren = (target, params) =>
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

globalThis.turnOffSiren = (target, params) =>
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

globalThis.toggleSiren = (target, params) =>
  serviceCall({
    name: `Call siren.toggle`,
    params: {
      domain: 'siren',
      service: 'toggle',
      service_data: params,
    },
    target,
  });
