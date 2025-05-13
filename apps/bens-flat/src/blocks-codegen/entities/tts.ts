import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var homeAssistantCloudTts: IEntity<`tts.home_assistant_cloud`>;
  var openaiTtsOnyxTts: IEntity<`tts.openai_tts_onyx`>;
}

globalThis.homeAssistantCloudTts = entity('tts.home_assistant_cloud');
globalThis.openaiTtsOnyxTts = entity('tts.openai_tts_onyx');
