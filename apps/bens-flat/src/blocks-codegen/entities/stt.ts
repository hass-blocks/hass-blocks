import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var homeAssistantCloudStt: IEntity<`stt.${string}`>;
  var fasterWhisperStt: IEntity<`stt.${string}`>;
}

globalThis.homeAssistantCloudStt = entity('stt.home_assistant_cloud');
globalThis.fasterWhisperStt = entity('stt.faster_whisper');
