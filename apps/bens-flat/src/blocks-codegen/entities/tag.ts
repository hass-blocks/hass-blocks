import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var bedroomChargerTag: IEntity<`tag.${string}`>;
}

globalThis.bedroomChargerTag = entity('tag.bedroom_charger');
