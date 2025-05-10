import { type ITarget, serviceCall } from '@hass-blocks/core';

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
  target: ITarget,
  mediaContentId: string,
  mediaContentType: string,
) =>
  serviceCall({
    name: 'Play music',
    target,
    params: {
      domain: 'media_player',
      service: 'play_media',
      service_data: {
        announce: false,
        media_contend_id: mediaContentId,
        media_content_type: mediaContentType,
      },
    },
  });
