import { serviceCall, ITarget } from '@hass-blocks/core';

export interface SearchMusicAssistantProps {
  /**
   * Select the Music Assistant instance to perform the search on.
   */
  config_entry_id: never;
  /**
   * The name/title to search for.
   */
  name: string;
  /**
   * The type of the content to search. Such as artist, album, track, radio, or playlist. All types if omitted.
   */
  media_type?: never;
  /**
   * When specifying a track or album name in the name field, you can optionally restrict results by this artist name.
   */
  artist?: string;
  /**
   * When specifying a track name in the name field, you can optionally restrict results by this album name.
   */
  album?: string;
  /**
   * Maximum number of items to return (per media type).
   */
  limit?: number;
  /**
   * Only include results that are in the library.
   */
  library_only?: boolean;
}

/**
 * Performs a global search on the Music Assistant library and all providers.
 */
export const searchMusicAssistant = (
  target: ITarget,
  params: SearchMusicAssistantProps,
) =>
  serviceCall({
    name: `Call music_assistant.search`,
    params: {
      domain: 'music_assistant',
      service: 'search',
      service_data: params,
    },
  });

export interface GetLibraryMusicAssistantProps {
  /**
   * Select the Music Assistant instance to perform the search on.
   */
  config_entry_id: never;
  /**
   * The media type for which to request details for.
   */
  media_type: never;
  /**
   * Filter items so only favorites items are returned.
   */
  favorite?: boolean;
  /**
   * Optional search string to search through this library.
   */
  search?: string;
  /**
   * Maximum number of items to return.
   */
  limit?: number;
  /**
   * Offset to start the list from.
   */
  offset?: number;
  /**
   * Sort the list by this field.
   */
  order_by?: never;
  /**
   * Filter albums by type.
   */
  album_type?: never;
  /**
   * Only return album artists when listing the artists library items.
   */
  album_artists_only?: boolean;
}

/**
 * Retrieves items from a Music Assistant library.
 */
export const getLibraryMusicAssistant = (
  target: ITarget,
  params: GetLibraryMusicAssistantProps,
) =>
  serviceCall({
    name: `Call music_assistant.get_library`,
    params: {
      domain: 'music_assistant',
      service: 'get_library',
      service_data: params,
    },
  });

export interface PlayMediaMusicAssistantProps {
  /**
   * URI or name of the item you want to play. Specify a list if you want to play/enqueue multiple items.
   */
  media_id: never;
  /**
   * The type of the content to play. Such as artist, album, track or playlist. Will be auto-determined if omitted.
   */
  media_type?: never;
  /**
   * When specifying a track or album by name in the Media ID field, you can optionally restrict results by this artist name.
   */
  artist?: string;
  /**
   * When specifying a track by name in the Media ID field, you can optionally restrict results by this album name.
   */
  album?: string;
  /**
   * If the content should be played now or added to the queue.
   */
  enqueue?: never;
  /**
   * Enable radio mode to auto-generate a playlist based on the selection.
   */
  radio_mode?: boolean;
}

/**
 * Plays media on a Music Assistant player with more fine-grained control options.
 */
export const playMediaMusicAssistant = (
  target: ITarget,
  params: PlayMediaMusicAssistantProps,
) =>
  serviceCall({
    name: `Call music_assistant.play_media`,
    params: {
      domain: 'music_assistant',
      service: 'play_media',
      service_data: params,
    },
    target,
  });

export interface PlayAnnouncementMusicAssistantProps {
  /**
   * URL to the notification sound.
   */
  url: string;
  /**
   * Use pre-announcement sound for the announcement. Omit to use the player default.
   */
  use_pre_announce?: boolean;
  /**
   * Use a forced volume level for the announcement. Omit to use player default.
   */
  announce_volume?: number;
}

/**
 * Plays an announcement on a Music Assistant player with more fine-grained control options.
 */
export const playAnnouncementMusicAssistant = (
  target: ITarget,
  params: PlayAnnouncementMusicAssistantProps,
) =>
  serviceCall({
    name: `Call music_assistant.play_announcement`,
    params: {
      domain: 'music_assistant',
      service: 'play_announcement',
      service_data: params,
    },
    target,
  });

export interface TransferQueueMusicAssistantProps {
  /**
   * The source media player which has the queue you want to transfer. When omitted, the first playing player will be used.
   */
  source_player?: string;
  /**
   * Start playing the queue on the target player. Omit to use the default behavior.
   */
  auto_play?: boolean;
}

/**
 * Transfers a player's queue to another player.
 */
export const transferQueueMusicAssistant = (
  target: ITarget,
  params?: TransferQueueMusicAssistantProps,
) =>
  serviceCall({
    name: `Call music_assistant.transfer_queue`,
    params: {
      domain: 'music_assistant',
      service: 'transfer_queue',
      service_data: params,
    },
    target,
  });

export interface GetQueueMusicAssistantProps {}

/**
 * Retrieves the details of the currently active queue of a Music Assistant player.
 */
export const getQueueMusicAssistant = (
  target: ITarget,
  params?: GetQueueMusicAssistantProps,
) =>
  serviceCall({
    name: `Call music_assistant.get_queue`,
    params: {
      domain: 'music_assistant',
      service: 'get_queue',
      service_data: params,
    },
    target,
  });
