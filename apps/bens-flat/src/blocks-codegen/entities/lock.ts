import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var frontDoorLock: IEntity<`lock.front_door`>;
}

globalThis.frontDoorLock = entity('lock.front_door');
