import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Ben
   */
  var benGroup: IEntity<`group.ben`>;
}

globalThis.benGroup = entity('group.ben', 'Ben');
