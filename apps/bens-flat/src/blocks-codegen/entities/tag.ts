import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var bedroomChargerTag: ITarget;
}

globalThis.bedroomChargerTag = entity('tag.bedroom_charger');
