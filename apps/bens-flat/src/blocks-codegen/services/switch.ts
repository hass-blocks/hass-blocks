import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  /**
   * Turns a switch off.
   */
  var turnOffSwitch: (
    target: IEntity<`switch.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Turns a switch on.
   */
  var turnOnSwitch: (
    target: IEntity<`switch.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Toggles a switch on/off.
   */
  var toggleSwitch: (
    target: IEntity<`switch.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;
}

globalThis.turnOffSwitch = (target) =>
  serviceCall({
    name: `Call switch.turn_off`,
    params: {
      domain: 'switch',
      service: 'turn_off',
    },
    target,
  });

globalThis.turnOnSwitch = (target) =>
  serviceCall({
    name: `Call switch.turn_on`,
    params: {
      domain: 'switch',
      service: 'turn_on',
    },
    target,
  });

globalThis.toggleSwitch = (target) =>
  serviceCall({
    name: `Call switch.toggle`,
    params: {
      domain: 'switch',
      service: 'toggle',
    },
    target,
  });
