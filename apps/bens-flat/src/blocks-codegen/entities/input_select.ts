import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var scenesInputSelect: IEntity<`input_select.scenes`>;
  var livingRoomScenesInputSelect: IEntity<`input_select.living_room_scenes`>;
}

globalThis.scenesInputSelect = entity('input_select.scenes');
globalThis.livingRoomScenesInputSelect = entity(
  'input_select.living_room_scenes',
);
