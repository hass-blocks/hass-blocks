import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
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
    params?: PressInputButtonProps,
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

export interface PressInputButtonProps {}

globalThis.pressInputButton = (target, params) =>
  serviceCall({
    name: `Call input_button.press`,
    params: {
      domain: 'input_button',
      service: 'press',
      service_data: params,
    },
    target,
  });
