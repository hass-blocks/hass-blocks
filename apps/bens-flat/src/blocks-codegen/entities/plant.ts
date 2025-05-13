import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var alicePlant: IEntity<`plant.alice`>;
}

globalThis.alicePlant = entity('plant.alice');
