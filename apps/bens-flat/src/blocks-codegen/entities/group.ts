import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var benGroup: ITarget;
}

globalThis.benGroup = entity('group.ben');
