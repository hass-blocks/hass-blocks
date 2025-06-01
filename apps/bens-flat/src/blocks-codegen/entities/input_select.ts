import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Scenes
   */
  var scenesInputSelect: IEntity<`input_select.scenes`>;
  /**
   * Hue Scenes Available in the Living Room
   */
  var livingRoomScenesInputSelect: IEntity<`input_select.living_room_scenes`>;
}

globalThis.scenesInputSelect = entity('input_select.scenes', 'Scenes');
globalThis.livingRoomScenesInputSelect = entity(
  'input_select.living_room_scenes',
  'Hue Scenes Available in the Living Room',
);
