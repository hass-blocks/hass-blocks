import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var searchResultOpenplantbook: ITarget;
}

globalThis.searchResultOpenplantbook = entity('openplantbook.search_result');
