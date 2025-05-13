import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var sunSun: IEntity<`sun.sun`>;
}

globalThis.sunSun = entity('sun.sun');
