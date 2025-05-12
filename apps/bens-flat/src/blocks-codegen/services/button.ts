import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Press the button entity.
   */
  var pressButton: (target: ITarget, params?: PressButtonProps) => Block;
}

export interface PressButtonProps {}

globalThis.pressButton = (target: ITarget, params?: PressButtonProps) =>
  serviceCall({
    name: `Call button.press`,
    params: {
      domain: 'button',
      service: 'press',
      service_data: params,
    },
    target,
  });
