import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var homeAssistantCloudStt: IEntity<`stt.home_assistant_cloud`>;
  var fasterWhisperStt: IEntity<`stt.faster_whisper`>;
}

globalThis.homeAssistantCloudStt = entity('stt.home_assistant_cloud');
globalThis.fasterWhisperStt = entity('stt.faster_whisper');
