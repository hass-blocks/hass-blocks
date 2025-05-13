import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var benGroup: IEntity<`group.ben`>;
}

globalThis.benGroup = entity('group.ben');
