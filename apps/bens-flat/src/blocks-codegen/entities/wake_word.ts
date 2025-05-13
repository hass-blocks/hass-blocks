import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var openwakewordWakeWord: IEntity<`wake_word.openwakeword`>;
}

globalThis.openwakewordWakeWord = entity('wake_word.openwakeword');
