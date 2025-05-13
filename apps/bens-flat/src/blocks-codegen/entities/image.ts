import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var playstationAvatarImage: IEntity<`image.${string}`>;
}

globalThis.playstationAvatarImage = entity('image.playstation_avatar');
