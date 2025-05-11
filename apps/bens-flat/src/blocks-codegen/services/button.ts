import { serviceCall, ITarget } from '@hass-blocks/core';

export interface PressButtonProps {}

/**
 * Press the button entity.
 */
export const pressButton = (target: ITarget, params?: PressButtonProps) =>
  serviceCall({
    name: `Call button.press`,
    params: {
      domain: 'button',
      service: 'press',
      service_data: params,
    },
    target,
  });
