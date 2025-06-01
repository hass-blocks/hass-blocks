import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Tag 7c22c031-8ab1-4e65-929c-2f63c9716902
   */
  var bedroomChargerTag: IEntity<`tag.bedroom_charger`>;
}

globalThis.bedroomChargerTag = entity(
  'tag.bedroom_charger',
  'Tag 7c22c031-8ab1-4e65-929c-2f63c9716902',
);
