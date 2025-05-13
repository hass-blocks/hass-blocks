import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var alicePlant: IEntity<`plant.${string}`>;
}

globalThis.alicePlant = entity('plant.alice');
