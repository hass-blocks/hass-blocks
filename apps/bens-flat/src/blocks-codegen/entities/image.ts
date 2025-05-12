import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var playstationAvatarImage: ITarget;
}

globalThis.playstationAvatarImage = entity('image.playstation_avatar');
