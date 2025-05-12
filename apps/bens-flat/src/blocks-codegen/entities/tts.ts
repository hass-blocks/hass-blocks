import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var homeAssistantCloudTts: ITarget;
  var openaiTtsOnyxTts: ITarget;
}

globalThis.homeAssistantCloudTts = entity('tts.home_assistant_cloud');
globalThis.openaiTtsOnyxTts = entity('tts.openai_tts_onyx');
