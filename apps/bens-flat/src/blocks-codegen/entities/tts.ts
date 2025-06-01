import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Home Assistant Cloud
   */
  var homeAssistantCloudTts: IEntity<`tts.home_assistant_cloud`>;
  /**
   * OpenAI TTS (api.openai.com, tts-1, onyx) TTS-1
   */
  var openaiTtsOnyxTts: IEntity<`tts.openai_tts_onyx`>;
}

globalThis.homeAssistantCloudTts = entity(
  'tts.home_assistant_cloud',
  'Home Assistant Cloud',
);
globalThis.openaiTtsOnyxTts = entity(
  'tts.openai_tts_onyx',
  'OpenAI TTS (api.openai.com, tts-1, onyx) TTS-1',
);
