import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var playstationAvatarImage: IEntity<`image.playstation_avatar`>;
}

globalThis.playstationAvatarImage = entity('image.playstation_avatar');
