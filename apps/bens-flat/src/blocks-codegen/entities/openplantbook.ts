import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var searchResultOpenplantbook: IEntity<`openplantbook.${string}`>;
}

globalThis.searchResultOpenplantbook = entity('openplantbook.search_result');
