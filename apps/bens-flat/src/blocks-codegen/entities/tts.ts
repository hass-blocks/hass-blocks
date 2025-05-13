import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var homeAssistantCloudTts: IEntity<`tts.${string}`>;
  var openaiTtsOnyxTts: IEntity<`tts.${string}`>;
}

globalThis.homeAssistantCloudTts = entity('tts.home_assistant_cloud');
globalThis.openaiTtsOnyxTts = entity('tts.openai_tts_onyx');
