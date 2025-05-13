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
  var reloadInputButton: () => Block;

  /**
   * Mimics the physical button press on the device.
   */
  var pressInputButton: (
    target: IEntity<`input_button.${string}`> | IArea,
  ) => Block;
}

globalThis.reloadInputButton = () =>
  serviceCall({
    name: `Call input_button.reload`,
    params: {
      domain: 'input_button',
      service: 'reload',
    },
  });

globalThis.pressInputButton = (target) =>
  serviceCall({
    name: `Call input_button.press`,
    params: {
      domain: 'input_button',
      service: 'press',
    },
    target,
  });
