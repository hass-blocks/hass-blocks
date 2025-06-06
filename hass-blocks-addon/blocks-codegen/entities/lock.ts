import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Front Door
   */
  var frontDoorLock: IEntity<`lock.front_door`>;
}

globalThis.frontDoorLock = entity('lock.front_door', 'Front Door ');
