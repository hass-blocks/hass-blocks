import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var frontDoorLock: ITarget;
}

globalThis.frontDoorLock = entity('lock.front_door');
