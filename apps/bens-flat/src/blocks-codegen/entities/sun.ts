import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var sunSun: IEntity<`sun.${string}`>;
}

globalThis.sunSun = entity('sun.sun');
