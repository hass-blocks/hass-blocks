import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var openwakewordWakeWord: ITarget;
}

globalThis.openwakewordWakeWord = entity('wake_word.openwakeword');
