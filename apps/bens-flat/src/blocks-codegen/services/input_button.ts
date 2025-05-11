import { serviceCall, ITarget } from '@hass-blocks/core';

/**
 * Reloads helpers from the YAML-configuration.
 */
export const reloadInputButton = (target: ITarget) =>
  serviceCall({
    name: `Call input_button.reload`,
    params: {
      domain: 'input_button',
      service: 'reload',
    },
  });

export interface PressInputButtonProps {}

/**
 * Mimics the physical button press on the device.
 */
export const pressInputButton = (
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
