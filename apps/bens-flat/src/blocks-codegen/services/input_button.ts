import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Reloads helpers from the YAML-configuration.
   */
  var reloadInputButton: (target: ITarget) => Block;
  /**
   * Mimics the physical button press on the device.
   */
  var pressInputButton: (
    target: ITarget,
    params?: PressInputButtonProps,
  ) => Block;
}

globalThis.reloadInputButton = (target: ITarget) =>
  serviceCall({
    name: `Call input_button.reload`,
    params: {
      domain: 'input_button',
      service: 'reload',
    },
  });

export interface PressInputButtonProps {}

globalThis.pressInputButton = (
  target: ITarget,
  params?: PressInputButtonProps,
) =>
  serviceCall({
    name: `Call input_button.press`,
    params: {
      domain: 'input_button',
      service: 'press',
      service_data: params,
    },
    target,
  });
