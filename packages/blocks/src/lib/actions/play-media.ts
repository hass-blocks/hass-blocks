import { serviceCall } from '@hass-blocks/core';
import { Which } from '../types/index.ts';

/**
 * Start playing media on a given media player
 *
 * @param - The idea of the media player to start
 * @param - The content id to play
 * @param - The type of media to play
 */
export const playMedia = (
  target: Which,
  mediaContentId: string,
  mediaContentType: string,
) =>
  serviceCall({
    name: 'Play music',
    params: {
      target,
      domain: 'media_player',
      service: 'play_media',
      service_data: {
        media_contend_id: mediaContentId,
        media_content_type: mediaContentType,
      },
    },
  });
