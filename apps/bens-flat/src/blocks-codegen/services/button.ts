import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  /**
   * Press the button entity.
   */
  var pressButton: (target: IEntity<`button.${string}`> | IArea) => Block;
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
