import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var openwakewordWakeWord: IEntity<`wake_word.${string}`>;
}

globalThis.openwakewordWakeWord = entity('wake_word.openwakeword');
