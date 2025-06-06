import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Home Assistant Cloud
   */
  var homeAssistantCloudStt: IEntity<`stt.home_assistant_cloud`>;
  /**
   * faster-whisper
   */
  var fasterWhisperStt: IEntity<`stt.faster_whisper`>;
}

globalThis.homeAssistantCloudStt = entity(
  'stt.home_assistant_cloud',
  'Home Assistant Cloud',
);
globalThis.fasterWhisperStt = entity('stt.faster_whisper', 'faster-whisper');
