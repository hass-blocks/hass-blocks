import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Press the button entity.
   */
  var pressButton: (
    target: IEntity<`button.${string}`> | IArea,
    params?: PressButtonProps,
  ) => Block;
}

export interface PressButtonProps {}

globalThis.pressButton = (
  target: IEntity<`button.${string}`> | IArea,
  params?: PressButtonProps,
) =>
  serviceCall({
    name: `Call button.press`,
    params: {
      domain: 'button',
      service: 'press',
      service_data: params,
    },
    target,
  });
