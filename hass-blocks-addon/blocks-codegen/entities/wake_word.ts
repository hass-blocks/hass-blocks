import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * openwakeword
   */
  var openwakewordWakeWord: IEntity<`wake_word.openwakeword`>;
}

globalThis.openwakewordWakeWord = entity(
  'wake_word.openwakeword',
  'openwakeword',
);
