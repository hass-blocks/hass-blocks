import { serviceCall, ITarget } from '@hass-blocks/core';

export interface SpeakTtsProps {
  /**
   * Media players to play the message.
   */
  media_player_entity_id: string;
  /**
   * The text you want to convert into speech so that you can listen to it on your device.
   */
  message: string;
  /**
   * Stores this message locally so that when the text is requested again, the output can be produced more quickly.
   */
  cache?: boolean;
  /**
   * Language to use for speech generation.
   */
  language?: string;
  /**
   * A dictionary containing integration-specific options.
   */
  options?: never;
}

/**
 * Speaks something using text-to-speech on a media player.
 */
export const speakTts = (target: ITarget, params: SpeakTtsProps) =>
  serviceCall({
    name: `Call tts.speak`,
    params: {
      domain: 'tts',
      service: 'speak',
      service_data: params,
    },
    target,
  });

/**
 * Removes all cached text-to-speech files and purges the memory.
 */
export const clearCacheTts = (target: ITarget) =>
  serviceCall({
    name: `Call tts.clear_cache`,
    params: {
      domain: 'tts',
      service: 'clear_cache',
    },
  });

export interface GoogleTranslateSayTtsProps {
  entity_id: string;
  message: string;
  cache?: boolean;
  language?: string;
  options?: never;
}

/**
 * Say something using text-to-speech on a media player with google_translate.
 */
export const googleTranslateSayTts = (
  target: ITarget,
  params: GoogleTranslateSayTtsProps,
) =>
  serviceCall({
    name: `Call tts.google_translate_say`,
    params: {
      domain: 'tts',
      service: 'google_translate_say',
      service_data: params,
    },
  });

export interface CloudSayTtsProps {
  entity_id: string;
  message: string;
  cache?: boolean;
  language?: string;
  options?: never;
}

/**
 * Say something using text-to-speech on a media player with cloud.
 */
export const cloudSayTts = (target: ITarget, params: CloudSayTtsProps) =>
  serviceCall({
    name: `Call tts.cloud_say`,
    params: {
      domain: 'tts',
      service: 'cloud_say',
      service_data: params,
    },
  });
