import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var homeAssistantCloudStt: ITarget;
  var fasterWhisperStt: ITarget;
}

globalThis.homeAssistantCloudStt = entity('stt.home_assistant_cloud');
globalThis.fasterWhisperStt = entity('stt.faster_whisper');
