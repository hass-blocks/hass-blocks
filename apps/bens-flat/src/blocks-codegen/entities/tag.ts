import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var bedroomChargerTag: IEntity<`tag.bedroom_charger`>;
}

globalThis.bedroomChargerTag = entity('tag.bedroom_charger');
