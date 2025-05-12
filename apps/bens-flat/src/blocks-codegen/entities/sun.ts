import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var sunSun: ITarget;
}

globalThis.sunSun = entity('sun.sun');
