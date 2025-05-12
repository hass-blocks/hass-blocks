import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var alicePlant: ITarget;
}

globalThis.alicePlant = entity('plant.alice');
