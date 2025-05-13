import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var frontDoorLock: IEntity<`lock.${string}`>;
}

globalThis.frontDoorLock = entity('lock.front_door');
