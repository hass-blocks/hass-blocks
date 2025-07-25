import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  interface SpeakTts {
    /**
     * Media players to play the message
     */
    media_player_entity_id: string;
    /**
     * The text you want to convert into speech so that you can listen to it on your device
     */
    message: string;
    /**
     * Stores this message locally so that when the text is requested again, the output can be produced more quickly
     */
    cache?: boolean;
    /**
     * Language to use for speech generation
     */
    language?: string;
    /**
     * A dictionary containing integration-specific options
     */
    options?: Record<string, unknown>;
  }

  /**
   * Speaks something using text-to-speech on a media player
   */
  var speakTts: (
    target: IEntity<`tts.${string}`> | IArea<string>,
    params: SpeakTts,
  ) => Block<Partial<SpeakTts> | undefined, void>;

  /**
   * Removes all cached text-to-speech files and purges the memory
   */
  var clearCacheTts: () => Block<Partial<unknown> | undefined, void>;

  interface GoogleTranslateSayTts {
    entity_id: string;
    message: string;
    cache?: boolean;
    language?: string;
    options?: Record<string, unknown>;
  }

  /**
   * Say something using text-to-speech on a media player with google_translate
   */
  var googleTranslateSayTts: (
    params: GoogleTranslateSayTts,
  ) => Block<Partial<GoogleTranslateSayTts> | undefined, void>;

  interface CloudSayTts {
    entity_id: string;
    message: string;
    cache?: boolean;
    language?: string;
    options?: Record<string, unknown>;
  }

  /**
   * Say something using text-to-speech on a media player with cloud
   */
  var cloudSayTts: (
    params: CloudSayTts,
  ) => Block<Partial<CloudSayTts> | undefined, void>;
}

globalThis.speakTts = (target, params) =>
  serviceCall({
    name: `Call tts.speak`,
    params: {
      domain: 'tts',
      service: 'speak',
      service_data: params,
    },
    target,
  });

globalThis.clearCacheTts = () =>
  serviceCall({
    name: `Call tts.clear_cache`,
    params: {
      domain: 'tts',
      service: 'clear_cache',
    },
  });

globalThis.googleTranslateSayTts = (params) =>
  serviceCall({
    name: `Call tts.google_translate_say`,
    params: {
      domain: 'tts',
      service: 'google_translate_say',
      service_data: params,
    },
  });

globalThis.cloudSayTts = (params) =>
  serviceCall({
    name: `Call tts.cloud_say`,
    params: {
      domain: 'tts',
      service: 'cloud_say',
      service_data: params,
    },
  });
