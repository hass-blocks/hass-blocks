import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var searchResultOpenplantbook: IEntity<`openplantbook.search_result`>;
}

globalThis.searchResultOpenplantbook = entity('openplantbook.search_result');
