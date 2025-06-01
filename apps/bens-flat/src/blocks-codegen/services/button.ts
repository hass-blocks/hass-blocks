import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  /**
   * Press the button entity.
   */
  var pressButton: (
    target: IEntity<`button.${string}`> | IArea<string>,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;
}

globalThis.pressButton = (target) =>
  serviceCall({
    name: `Call button.press`,
    params: {
      domain: 'button',
      service: 'press',
    },
    target,
  });
