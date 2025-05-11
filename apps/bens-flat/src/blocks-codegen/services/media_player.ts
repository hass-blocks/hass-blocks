import { serviceCall, ITarget } from '@hass-blocks/core';

export interface TurnOnMediaPlayerProps {}

/**
 * Turns on the power of the media player.
 */
export const turnOnMediaPlayer = (
  target: ITarget,
  params?: TurnOnMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.turn_on`,
    params: {
      domain: 'media_player',
      service: 'turn_on',
      service_data: params,
    },
    target,
  });

export interface TurnOffMediaPlayerProps {}

/**
 * Turns off the power of the media player.
 */
export const turnOffMediaPlayer = (
  target: ITarget,
  params?: TurnOffMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.turn_off`,
    params: {
      domain: 'media_player',
      service: 'turn_off',
      service_data: params,
    },
    target,
  });

export interface ToggleMediaPlayerProps {}

/**
 * Toggles a media player on/off.
 */
export const toggleMediaPlayer = (
  target: ITarget,
  params?: ToggleMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.toggle`,
    params: {
      domain: 'media_player',
      service: 'toggle',
      service_data: params,
    },
    target,
  });

export interface VolumeUpMediaPlayerProps {}

/**
 * Turns up the volume.
 */
export const volumeUpMediaPlayer = (
  target: ITarget,
  params?: VolumeUpMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.volume_up`,
    params: {
      domain: 'media_player',
      service: 'volume_up',
      service_data: params,
    },
    target,
  });

export interface VolumeDownMediaPlayerProps {}

/**
 * Turns down the volume.
 */
export const volumeDownMediaPlayer = (
  target: ITarget,
  params?: VolumeDownMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.volume_down`,
    params: {
      domain: 'media_player',
      service: 'volume_down',
      service_data: params,
    },
    target,
  });

export interface MediaPlayPauseMediaPlayerProps {}

/**
 * Toggles play/pause.
 */
export const mediaPlayPauseMediaPlayer = (
  target: ITarget,
  params?: MediaPlayPauseMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.media_play_pause`,
    params: {
      domain: 'media_player',
      service: 'media_play_pause',
      service_data: params,
    },
    target,
  });

export interface MediaPlayMediaPlayerProps {}

/**
 * Starts playing.
 */
export const mediaPlayMediaPlayer = (
  target: ITarget,
  params?: MediaPlayMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.media_play`,
    params: {
      domain: 'media_player',
      service: 'media_play',
      service_data: params,
    },
    target,
  });

export interface MediaPauseMediaPlayerProps {}

/**
 * Pauses.
 */
export const mediaPauseMediaPlayer = (
  target: ITarget,
  params?: MediaPauseMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.media_pause`,
    params: {
      domain: 'media_player',
      service: 'media_pause',
      service_data: params,
    },
    target,
  });

export interface MediaStopMediaPlayerProps {}

/**
 * Stops playing.
 */
export const mediaStopMediaPlayer = (
  target: ITarget,
  params?: MediaStopMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.media_stop`,
    params: {
      domain: 'media_player',
      service: 'media_stop',
      service_data: params,
    },
    target,
  });

export interface MediaNextTrackMediaPlayerProps {}

/**
 * Selects the next track.
 */
export const mediaNextTrackMediaPlayer = (
  target: ITarget,
  params?: MediaNextTrackMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.media_next_track`,
    params: {
      domain: 'media_player',
      service: 'media_next_track',
      service_data: params,
    },
    target,
  });

export interface MediaPreviousTrackMediaPlayerProps {}

/**
 * Selects the previous track.
 */
export const mediaPreviousTrackMediaPlayer = (
  target: ITarget,
  params?: MediaPreviousTrackMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.media_previous_track`,
    params: {
      domain: 'media_player',
      service: 'media_previous_track',
      service_data: params,
    },
    target,
  });

export interface ClearPlaylistMediaPlayerProps {}

/**
 * Removes all items from the playlist.
 */
export const clearPlaylistMediaPlayer = (
  target: ITarget,
  params?: ClearPlaylistMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.clear_playlist`,
    params: {
      domain: 'media_player',
      service: 'clear_playlist',
      service_data: params,
    },
    target,
  });

export interface VolumeSetMediaPlayerProps {
  /**
   * The volume. 0 is inaudible, 1 is the maximum volume.
   */
  volume_level: number;
}

/**
 * Sets the volume level.
 */
export const volumeSetMediaPlayer = (
  target: ITarget,
  params: VolumeSetMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.volume_set`,
    params: {
      domain: 'media_player',
      service: 'volume_set',
      service_data: params,
    },
    target,
  });

export interface VolumeMuteMediaPlayerProps {
  /**
   * Defines whether or not it is muted.
   */
  is_volume_muted: boolean;
}

/**
 * Mutes or unmutes the media player.
 */
export const volumeMuteMediaPlayer = (
  target: ITarget,
  params: VolumeMuteMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.volume_mute`,
    params: {
      domain: 'media_player',
      service: 'volume_mute',
      service_data: params,
    },
    target,
  });

export interface MediaSeekMediaPlayerProps {
  /**
   * Target position in the currently playing media. The format is platform dependent.
   */
  seek_position: number;
}

/**
 * Allows you to go to a different part of the media that is currently playing.
 */
export const mediaSeekMediaPlayer = (
  target: ITarget,
  params: MediaSeekMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.media_seek`,
    params: {
      domain: 'media_player',
      service: 'media_seek',
      service_data: params,
    },
    target,
  });

export interface JoinMediaPlayerProps {
  /**
   * The players which will be synced with the playback specified in 'Targets'.
   */
  group_members: string;
}

/**
 * Groups media players together for synchronous playback. Only works on supported multiroom audio systems.
 */
export const joinMediaPlayer = (
  target: ITarget,
  params: JoinMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.join`,
    params: {
      domain: 'media_player',
      service: 'join',
      service_data: params,
    },
    target,
  });

export interface SelectSourceMediaPlayerProps {
  /**
   * Name of the source to switch to. Platform dependent.
   */
  source: string;
}

/**
 * Sends the media player the command to change input source.
 */
export const selectSourceMediaPlayer = (
  target: ITarget,
  params: SelectSourceMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.select_source`,
    params: {
      domain: 'media_player',
      service: 'select_source',
      service_data: params,
    },
    target,
  });

export interface SelectSoundModeMediaPlayerProps {
  /**
   * Name of the sound mode to switch to.
   */
  sound_mode?: string;
}

/**
 * Selects a specific sound mode.
 */
export const selectSoundModeMediaPlayer = (
  target: ITarget,
  params?: SelectSoundModeMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.select_sound_mode`,
    params: {
      domain: 'media_player',
      service: 'select_sound_mode',
      service_data: params,
    },
    target,
  });

export interface PlayMediaMediaPlayerProps {
  /**
   * The ID of the content to play. Platform dependent.
   */
  media_content_id: string;
  /**
   * The type of the content to play, such as image, music, tv show, video, episode, channel, or playlist.
   */
  media_content_type: string;
  /**
   * If the content should be played now or be added to the queue.
   */
  enqueue?: never;
  /**
   * If the media should be played as an announcement.
   */
  announce?: boolean;
}

/**
 * Starts playing specified media.
 */
export const playMediaMediaPlayer = (
  target: ITarget,
  params: PlayMediaMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.play_media`,
    params: {
      domain: 'media_player',
      service: 'play_media',
      service_data: params,
    },
    target,
  });

export interface BrowseMediaMediaPlayerProps {
  /**
   * The type of the content to browse, such as image, music, tv show, video, episode, channel, or playlist.
   */
  media_content_type?: string;
  /**
   * The ID of the content to browse. Integration dependent.
   */
  media_content_id?: string;
}

/**
 * Browses the available media.
 */
export const browseMediaMediaPlayer = (
  target: ITarget,
  params?: BrowseMediaMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.browse_media`,
    params: {
      domain: 'media_player',
      service: 'browse_media',
      service_data: params,
    },
    target,
  });

export interface SearchMediaMediaPlayerProps {
  /**
   * The term to search for.
   */
  search_query: string;
  /**
   * The type of the content to browse, such as image, music, tv show, video, episode, channel, or playlist.
   */
  media_content_type?: string;
  /**
   * The ID of the content to browse. Integration dependent.
   */
  media_content_id?: string;
  /**
   * List of media classes to filter the search results by.
   */
  media_filter_classes?: string;
}

/**
 * Searches the available media.
 */
export const searchMediaMediaPlayer = (
  target: ITarget,
  params: SearchMediaMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.search_media`,
    params: {
      domain: 'media_player',
      service: 'search_media',
      service_data: params,
    },
    target,
  });

export interface ShuffleSetMediaPlayerProps {
  /**
   * Whether the media should be played in randomized order or not.
   */
  shuffle: boolean;
}

/**
 * Enables or disables the shuffle mode.
 */
export const shuffleSetMediaPlayer = (
  target: ITarget,
  params: ShuffleSetMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.shuffle_set`,
    params: {
      domain: 'media_player',
      service: 'shuffle_set',
      service_data: params,
    },
    target,
  });

export interface UnjoinMediaPlayerProps {}

/**
 * Removes the player from a group. Only works on platforms which support player groups.
 */
export const unjoinMediaPlayer = (
  target: ITarget,
  params?: UnjoinMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.unjoin`,
    params: {
      domain: 'media_player',
      service: 'unjoin',
      service_data: params,
    },
    target,
  });

export interface RepeatSetMediaPlayerProps {
  /**
   * Whether the media (one or all) should be played in a loop or not.
   */
  repeat: never;
}

/**
 * Sets the repeat mode.
 */
export const repeatSetMediaPlayer = (
  target: ITarget,
  params: RepeatSetMediaPlayerProps,
) =>
  serviceCall({
    name: `Call media_player.repeat_set`,
    params: {
      domain: 'media_player',
      service: 'repeat_set',
      service_data: params,
    },
    target,
  });
