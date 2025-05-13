import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  /**
   * Reloads helpers from the YAML-configuration.
   */
  var reloadInputBoolean: () => Block;

  /**
   * Turns on the helper.
   */
  var turnOnInputBoolean: (
    target: IEntity<`input_boolean.${string}`> | IArea,
  ) => Block;

  /**
   * Turns off the helper.
   */
  var turnOffInputBoolean: (
    target: IEntity<`input_boolean.${string}`> | IArea,
  ) => Block;

  /**
   * Toggles the helper on/off.
   */
  var toggleInputBoolean: (
    target: IEntity<`input_boolean.${string}`> | IArea,
  ) => Block;
}

globalThis.reloadInputBoolean = () =>
  serviceCall({
    name: `Call input_boolean.reload`,
    params: {
      domain: 'input_boolean',
      service: 'reload',
    },
  });

globalThis.turnOnInputBoolean = (target) =>
  serviceCall({
    name: `Call input_boolean.turn_on`,
    params: {
      domain: 'input_boolean',
      service: 'turn_on',
    },
    target,
  });

globalThis.turnOffInputBoolean = (target) =>
  serviceCall({
    name: `Call input_boolean.turn_off`,
    params: {
      domain: 'input_boolean',
      service: 'turn_off',
    },
    target,
  });

globalThis.toggleInputBoolean = (target) =>
  serviceCall({
    name: `Call input_boolean.toggle`,
    params: {
      domain: 'input_boolean',
      service: 'toggle',
    },
    target,
  });
