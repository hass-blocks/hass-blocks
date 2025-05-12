import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var scenesInputSelect: ITarget;
  var livingRoomScenesInputSelect: ITarget;
}

globalThis.scenesInputSelect = entity('input_select.scenes');
globalThis.livingRoomScenesInputSelect = entity(
  'input_select.living_room_scenes',
);
