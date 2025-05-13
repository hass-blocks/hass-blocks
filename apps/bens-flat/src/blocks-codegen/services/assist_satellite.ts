import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Lets a satellite announce a message.
   */
  var announceAssistSatellite: (
    target: IEntity<`assist_satellite.${string}`> | IArea,
    params?: AnnounceAssistSatelliteProps,
  ) => Block;
  /**
   * Starts a conversation from a satellite.
   */
  var startConversationAssistSatellite: (
    target: IEntity<`assist_satellite.${string}`> | IArea,
    params?: StartConversationAssistSatelliteProps,
  ) => Block;
}

export interface AnnounceAssistSatelliteProps {
  /**
   * The message to announce.
   */
  message?: string;
  /**
   * The media ID to announce instead of using text-to-speech.
   */
  media_id?: string;
  /**
   * Play a sound before the announcement.
   */
  preannounce?: boolean;
  /**
   * Custom media ID to play before the announcement.
   */
  preannounce_media_id?: string;
}

globalThis.announceAssistSatellite = (
  target: IEntity<`assist_satellite.${string}`> | IArea,
  params?: AnnounceAssistSatelliteProps,
) =>
  serviceCall({
    name: `Call assist_satellite.announce`,
    params: {
      domain: 'assist_satellite',
      service: 'announce',
      service_data: params,
    },
    target,
  });

export interface StartConversationAssistSatelliteProps {
  /**
   * The message to start with.
   */
  start_message?: string;
  /**
   * The media ID to start with instead of using text-to-speech.
   */
  start_media_id?: string;
  /**
   * Provide background information to the AI about the request.
   */
  extra_system_prompt?: string;
  /**
   * Play a sound before the start message or media.
   */
  preannounce?: boolean;
  /**
   * Custom media ID to play before the start message or media.
   */
  preannounce_media_id?: string;
}

globalThis.startConversationAssistSatellite = (
  target: IEntity<`assist_satellite.${string}`> | IArea,
  params?: StartConversationAssistSatelliteProps,
) =>
  serviceCall({
    name: `Call assist_satellite.start_conversation`,
    params: {
      domain: 'assist_satellite',
      service: 'start_conversation',
      service_data: params,
    },
    target,
  });
