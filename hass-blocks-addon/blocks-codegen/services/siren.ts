import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  interface TurnOnSiren {
    /**
     * The tone to emit. When `available_tones` property is a map, either the key or the value can be used. Must be supported by the integration
     */
    tone?: string;
    /**
     * The volume. 0 is inaudible, 1 is the maximum volume. Must be supported by the integration
     */
    volume_level?: number;
    /**
     * Number of seconds the sound is played. Must be supported by the integration
     */
    duration?: string;
  }

  /**
   * Turns the siren on
   */
  var turnOnSiren: (
    target: IEntity<`siren.${string}`> | IArea<string>,
    params?: TurnOnSiren,
  ) => Block<Partial<TurnOnSiren> | undefined, void>;

  /**
   * Turns the siren off
   */
  var turnOffSiren: (
    target: IEntity<`siren.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;

  /**
   * Toggles the siren on/off
   */
  var toggleSiren: (
    target: IEntity<`siren.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;
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

globalThis.turnOffSiren = (target) =>
  serviceCall({
    name: `Call siren.turn_off`,
    params: {
      domain: 'siren',
      service: 'turn_off',
    },
    target,
  });

globalThis.toggleSiren = (target) =>
  serviceCall({
    name: `Call siren.toggle`,
    params: {
      domain: 'siren',
      service: 'toggle',
    },
    target,
  });
