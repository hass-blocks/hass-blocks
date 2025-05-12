import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Turns on the power of the media player.
   */
  var turnOnMediaPlayer: (
    target: ITarget,
    params?: TurnOnMediaPlayerProps,
  ) => Block;
  /**
   * Turns off the power of the media player.
   */
  var turnOffMediaPlayer: (
    target: ITarget,
    params?: TurnOffMediaPlayerProps,
  ) => Block;
  /**
   * Toggles a media player on/off.
   */
  var toggleMediaPlayer: (
    target: ITarget,
    params?: ToggleMediaPlayerProps,
  ) => Block;
  /**
   * Turns up the volume.
   */
  var volumeUpMediaPlayer: (
    target: ITarget,
    params?: VolumeUpMediaPlayerProps,
  ) => Block;
  /**
   * Turns down the volume.
   */
  var volumeDownMediaPlayer: (
    target: ITarget,
    params?: VolumeDownMediaPlayerProps,
  ) => Block;
  /**
   * Toggles play/pause.
   */
  var mediaPlayPauseMediaPlayer: (
    target: ITarget,
    params?: MediaPlayPauseMediaPlayerProps,
  ) => Block;
  /**
   * Starts playing.
   */
  var mediaPlayMediaPlayer: (
    target: ITarget,
    params?: MediaPlayMediaPlayerProps,
  ) => Block;
  /**
   * Pauses.
   */
  var mediaPauseMediaPlayer: (
    target: ITarget,
    params?: MediaPauseMediaPlayerProps,
  ) => Block;
  /**
   * Stops playing.
   */
  var mediaStopMediaPlayer: (
    target: ITarget,
    params?: MediaStopMediaPlayerProps,
  ) => Block;
  /**
   * Selects the next track.
   */
  var mediaNextTrackMediaPlayer: (
    target: ITarget,
    params?: MediaNextTrackMediaPlayerProps,
  ) => Block;
  /**
   * Selects the previous track.
   */
  var mediaPreviousTrackMediaPlayer: (
    target: ITarget,
    params?: MediaPreviousTrackMediaPlayerProps,
  ) => Block;
  /**
   * Removes all items from the playlist.
   */
  var clearPlaylistMediaPlayer: (
    target: ITarget,
    params?: ClearPlaylistMediaPlayerProps,
  ) => Block;
  /**
   * Sets the volume level.
   */
  var volumeSetMediaPlayer: (
    target: ITarget,
    params: VolumeSetMediaPlayerProps,
  ) => Block;
  /**
   * Mutes or unmutes the media player.
   */
  var volumeMuteMediaPlayer: (
    target: ITarget,
    params: VolumeMuteMediaPlayerProps,
  ) => Block;
  /**
   * Allows you to go to a different part of the media that is currently playing.
   */
  var mediaSeekMediaPlayer: (
    target: ITarget,
    params: MediaSeekMediaPlayerProps,
  ) => Block;
  /**
   * Groups media players together for synchronous playback. Only works on supported multiroom audio systems.
   */
  var joinMediaPlayer: (target: ITarget, params: JoinMediaPlayerProps) => Block;
  /**
   * Sends the media player the command to change input source.
   */
  var selectSourceMediaPlayer: (
    target: ITarget,
    params: SelectSourceMediaPlayerProps,
  ) => Block;
  /**
   * Selects a specific sound mode.
   */
  var selectSoundModeMediaPlayer: (
    target: ITarget,
    params?: SelectSoundModeMediaPlayerProps,
  ) => Block;
  /**
   * Starts playing specified media.
   */
  var playMediaMediaPlayer: (
    target: ITarget,
    params: PlayMediaMediaPlayerProps,
  ) => Block;
  /**
   * Browses the available media.
   */
  var browseMediaMediaPlayer: (
    target: ITarget,
    params?: BrowseMediaMediaPlayerProps,
  ) => Block;
  /**
   * Searches the available media.
   */
  var searchMediaMediaPlayer: (
    target: ITarget,
    params: SearchMediaMediaPlayerProps,
  ) => Block;
  /**
   * Enables or disables the shuffle mode.
   */
  var shuffleSetMediaPlayer: (
    target: ITarget,
    params: ShuffleSetMediaPlayerProps,
  ) => Block;
  /**
   * Removes the player from a group. Only works on platforms which support player groups.
   */
  var unjoinMediaPlayer: (
    target: ITarget,
    params?: UnjoinMediaPlayerProps,
  ) => Block;
  /**
   * Sets the repeat mode.
   */
  var repeatSetMediaPlayer: (
    target: ITarget,
    params: RepeatSetMediaPlayerProps,
  ) => Block;
}

export interface TurnOnMediaPlayerProps {}

globalThis.turnOnMediaPlayer = (
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

globalThis.turnOffMediaPlayer = (
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

globalThis.toggleMediaPlayer = (
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

globalThis.volumeUpMediaPlayer = (
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

globalThis.volumeDownMediaPlayer = (
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

globalThis.mediaPlayPauseMediaPlayer = (
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

globalThis.mediaPlayMediaPlayer = (
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

globalThis.mediaPauseMediaPlayer = (
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

globalThis.mediaStopMediaPlayer = (
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

globalThis.mediaNextTrackMediaPlayer = (
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

globalThis.mediaPreviousTrackMediaPlayer = (
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

globalThis.clearPlaylistMediaPlayer = (
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

globalThis.volumeSetMediaPlayer = (
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

globalThis.volumeMuteMediaPlayer = (
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

globalThis.mediaSeekMediaPlayer = (
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

globalThis.joinMediaPlayer = (target: ITarget, params: JoinMediaPlayerProps) =>
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

globalThis.selectSourceMediaPlayer = (
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

globalThis.selectSoundModeMediaPlayer = (
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

globalThis.playMediaMediaPlayer = (
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

globalThis.browseMediaMediaPlayer = (
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

globalThis.searchMediaMediaPlayer = (
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

globalThis.shuffleSetMediaPlayer = (
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

globalThis.unjoinMediaPlayer = (
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

globalThis.repeatSetMediaPlayer = (
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
