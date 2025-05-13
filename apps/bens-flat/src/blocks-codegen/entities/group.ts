import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var benGroup: IEntity<`group.${string}`>;
}

globalThis.benGroup = entity('group.ben');
