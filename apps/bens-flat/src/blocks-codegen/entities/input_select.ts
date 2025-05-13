import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var scenesInputSelect: IEntity<`input_select.${string}`>;
  var livingRoomScenesInputSelect: IEntity<`input_select.${string}`>;
}

globalThis.scenesInputSelect = entity('input_select.scenes');
globalThis.livingRoomScenesInputSelect = entity(
  'input_select.living_room_scenes',
);
