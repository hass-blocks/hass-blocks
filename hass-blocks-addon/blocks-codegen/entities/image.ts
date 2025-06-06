import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Avatar
   */
  var playstationAvatarImage: IEntity<`image.playstation_avatar`>;
}

globalThis.playstationAvatarImage = entity(
  'image.playstation_avatar',
  'Avatar',
);
