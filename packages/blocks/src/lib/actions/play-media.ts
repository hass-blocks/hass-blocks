import { serviceCall } from '@hass-blocks/core';
import type { Which } from '../types/index.ts';

/**
 * @public
 *
 * Start playing media on a given media player
 *
 * @param target - What media player to start
 * @param mediaContentId - The content id to play
 * @param mediaContentType - The type of media to play
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
        announc: false,
        media_contend_id: mediaContentId,
        media_content_type: mediaContentType,
      },
    },
  });
