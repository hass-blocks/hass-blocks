import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  /**
   * Turns on the power of the media player
   */
  var turnOnMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;

  /**
   * Turns off the power of the media player
   */
  var turnOffMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;

  /**
   * Toggles a media player on/off
   */
  var toggleMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;

  /**
   * Turns up the volume
   */
  var volumeUpMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;

  /**
   * Turns down the volume
   */
  var volumeDownMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;

  /**
   * Toggles play/pause
   */
  var mediaPlayPauseMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;

  /**
   * Starts playing
   */
  var mediaPlayMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;

  /**
   * Pauses
   */
  var mediaPauseMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;

  /**
   * Stops playing
   */
  var mediaStopMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;

  /**
   * Selects the next track
   */
  var mediaNextTrackMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;

  /**
   * Selects the previous track
   */
  var mediaPreviousTrackMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;

  /**
   * Removes all items from the playlist
   */
  var clearPlaylistMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;

  interface VolumeSetMediaPlayer {
    /**
     * The volume. 0 is inaudible, 1 is the maximum volume
     */
    volume_level: number;
  }

  /**
   * Sets the volume level
   */
  var volumeSetMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
    params: VolumeSetMediaPlayer,
  ) => Block<Partial<VolumeSetMediaPlayer> | undefined, void>;

  interface VolumeMuteMediaPlayer {
    /**
     * Defines whether or not it is muted
     */
    is_volume_muted: boolean;
  }

  /**
   * Mutes or unmutes the media player
   */
  var volumeMuteMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
    params: VolumeMuteMediaPlayer,
  ) => Block<Partial<VolumeMuteMediaPlayer> | undefined, void>;

  interface MediaSeekMediaPlayer {
    /**
     * Target position in the currently playing media. The format is platform dependent
     */
    seek_position: number;
  }

  /**
   * Allows you to go to a different part of the media that is currently playing
   */
  var mediaSeekMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
    params: MediaSeekMediaPlayer,
  ) => Block<Partial<MediaSeekMediaPlayer> | undefined, void>;

  interface JoinMediaPlayer {
    /**
     * The players which will be synced with the playback specified in 'Targets'
     */
    group_members: string[];
  }

  /**
   * Groups media players together for synchronous playback. Only works on supported multiroom audio systems
   */
  var joinMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
    params: JoinMediaPlayer,
  ) => Block<Partial<JoinMediaPlayer> | undefined, void>;

  interface SelectSourceMediaPlayer {
    /**
     * Name of the source to switch to. Platform dependent
     */
    source: string;
  }

  /**
   * Sends the media player the command to change input source
   */
  var selectSourceMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
    params: SelectSourceMediaPlayer,
  ) => Block<Partial<SelectSourceMediaPlayer> | undefined, void>;

  interface SelectSoundModeMediaPlayer {
    /**
     * Name of the sound mode to switch to
     */
    sound_mode?: string;
  }

  /**
   * Selects a specific sound mode
   */
  var selectSoundModeMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
    params?: SelectSoundModeMediaPlayer,
  ) => Block<Partial<SelectSoundModeMediaPlayer> | undefined, void>;

  interface PlayMediaMediaPlayer {
    /**
     * The ID of the content to play. Platform dependent
     */
    media_content_id: string;
    /**
     * The type of the content to play, such as image, music, tv show, video, episode, channel, or playlist
     */
    media_content_type: string;
    /**
     * If the content should be played now or be added to the queue
     */
    enqueue?: never;
    /**
     * If the media should be played as an announcement
     */
    announce?: boolean;
  }

  /**
   * Starts playing specified media
   */
  var playMediaMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
    params: PlayMediaMediaPlayer,
  ) => Block<Partial<PlayMediaMediaPlayer> | undefined, void>;

  interface BrowseMediaMediaPlayer {
    /**
     * The type of the content to browse, such as image, music, tv show, video, episode, channel, or playlist
     */
    media_content_type?: string;
    /**
     * The ID of the content to browse. Integration dependent
     */
    media_content_id?: string;
  }

  /**
   * Browses the available media
   */
  var browseMediaMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
    params?: BrowseMediaMediaPlayer,
  ) => Block<Partial<BrowseMediaMediaPlayer> | undefined, void>;

  interface SearchMediaMediaPlayer {
    /**
     * The term to search for
     */
    search_query: string;
    /**
     * The type of the content to browse, such as image, music, tv show, video, episode, channel, or playlist
     */
    media_content_type?: string;
    /**
     * The ID of the content to browse. Integration dependent
     */
    media_content_id?: string;
    /**
     * List of media classes to filter the search results by
     */
    media_filter_classes?: string;
  }

  /**
   * Searches the available media
   */
  var searchMediaMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
    params: SearchMediaMediaPlayer,
  ) => Block<Partial<SearchMediaMediaPlayer> | undefined, void>;

  interface ShuffleSetMediaPlayer {
    /**
     * Whether the media should be played in randomized order or not
     */
    shuffle: boolean;
  }

  /**
   * Enables or disables the shuffle mode
   */
  var shuffleSetMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
    params: ShuffleSetMediaPlayer,
  ) => Block<Partial<ShuffleSetMediaPlayer> | undefined, void>;

  /**
   * Removes the player from a group. Only works on platforms which support player groups
   */
  var unjoinMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;

  interface RepeatSetMediaPlayer {
    /**
     * Whether the media (one or all) should be played in a loop or not
     */
    repeat: never;
  }

  /**
   * Sets the repeat mode
   */
  var repeatSetMediaPlayer: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
    params: RepeatSetMediaPlayer,
  ) => Block<Partial<RepeatSetMediaPlayer> | undefined, void>;
}

globalThis.turnOnMediaPlayer = (target) =>
  serviceCall({
    name: `Call media_player.turn_on`,
    params: {
      domain: 'media_player',
      service: 'turn_on',
    },
    target,
  });

globalThis.turnOffMediaPlayer = (target) =>
  serviceCall({
    name: `Call media_player.turn_off`,
    params: {
      domain: 'media_player',
      service: 'turn_off',
    },
    target,
  });

globalThis.toggleMediaPlayer = (target) =>
  serviceCall({
    name: `Call media_player.toggle`,
    params: {
      domain: 'media_player',
      service: 'toggle',
    },
    target,
  });

globalThis.volumeUpMediaPlayer = (target) =>
  serviceCall({
    name: `Call media_player.volume_up`,
    params: {
      domain: 'media_player',
      service: 'volume_up',
    },
    target,
  });

globalThis.volumeDownMediaPlayer = (target) =>
  serviceCall({
    name: `Call media_player.volume_down`,
    params: {
      domain: 'media_player',
      service: 'volume_down',
    },
    target,
  });

globalThis.mediaPlayPauseMediaPlayer = (target) =>
  serviceCall({
    name: `Call media_player.media_play_pause`,
    params: {
      domain: 'media_player',
      service: 'media_play_pause',
    },
    target,
  });

globalThis.mediaPlayMediaPlayer = (target) =>
  serviceCall({
    name: `Call media_player.media_play`,
    params: {
      domain: 'media_player',
      service: 'media_play',
    },
    target,
  });

globalThis.mediaPauseMediaPlayer = (target) =>
  serviceCall({
    name: `Call media_player.media_pause`,
    params: {
      domain: 'media_player',
      service: 'media_pause',
    },
    target,
  });

globalThis.mediaStopMediaPlayer = (target) =>
  serviceCall({
    name: `Call media_player.media_stop`,
    params: {
      domain: 'media_player',
      service: 'media_stop',
    },
    target,
  });

globalThis.mediaNextTrackMediaPlayer = (target) =>
  serviceCall({
    name: `Call media_player.media_next_track`,
    params: {
      domain: 'media_player',
      service: 'media_next_track',
    },
    target,
  });

globalThis.mediaPreviousTrackMediaPlayer = (target) =>
  serviceCall({
    name: `Call media_player.media_previous_track`,
    params: {
      domain: 'media_player',
      service: 'media_previous_track',
    },
    target,
  });

globalThis.clearPlaylistMediaPlayer = (target) =>
  serviceCall({
    name: `Call media_player.clear_playlist`,
    params: {
      domain: 'media_player',
      service: 'clear_playlist',
    },
    target,
  });

globalThis.volumeSetMediaPlayer = (target, params) =>
  serviceCall({
    name: `Call media_player.volume_set`,
    params: {
      domain: 'media_player',
      service: 'volume_set',
      service_data: params,
    },
    target,
  });

globalThis.volumeMuteMediaPlayer = (target, params) =>
  serviceCall({
    name: `Call media_player.volume_mute`,
    params: {
      domain: 'media_player',
      service: 'volume_mute',
      service_data: params,
    },
    target,
  });

globalThis.mediaSeekMediaPlayer = (target, params) =>
  serviceCall({
    name: `Call media_player.media_seek`,
    params: {
      domain: 'media_player',
      service: 'media_seek',
      service_data: params,
    },
    target,
  });

globalThis.joinMediaPlayer = (target, params) =>
  serviceCall({
    name: `Call media_player.join`,
    params: {
      domain: 'media_player',
      service: 'join',
      service_data: params,
    },
    target,
  });

globalThis.selectSourceMediaPlayer = (target, params) =>
  serviceCall({
    name: `Call media_player.select_source`,
    params: {
      domain: 'media_player',
      service: 'select_source',
      service_data: params,
    },
    target,
  });

globalThis.selectSoundModeMediaPlayer = (target, params) =>
  serviceCall({
    name: `Call media_player.select_sound_mode`,
    params: {
      domain: 'media_player',
      service: 'select_sound_mode',
      service_data: params,
    },
    target,
  });

globalThis.playMediaMediaPlayer = (target, params) =>
  serviceCall({
    name: `Call media_player.play_media`,
    params: {
      domain: 'media_player',
      service: 'play_media',
      service_data: params,
    },
    target,
  });

globalThis.browseMediaMediaPlayer = (target, params) =>
  serviceCall({
    name: `Call media_player.browse_media`,
    params: {
      domain: 'media_player',
      service: 'browse_media',
      service_data: params,
    },
    target,
  });

globalThis.searchMediaMediaPlayer = (target, params) =>
  serviceCall({
    name: `Call media_player.search_media`,
    params: {
      domain: 'media_player',
      service: 'search_media',
      service_data: params,
    },
    target,
  });

globalThis.shuffleSetMediaPlayer = (target, params) =>
  serviceCall({
    name: `Call media_player.shuffle_set`,
    params: {
      domain: 'media_player',
      service: 'shuffle_set',
      service_data: params,
    },
    target,
  });

globalThis.unjoinMediaPlayer = (target) =>
  serviceCall({
    name: `Call media_player.unjoin`,
    params: {
      domain: 'media_player',
      service: 'unjoin',
    },
    target,
  });

globalThis.repeatSetMediaPlayer = (target, params) =>
  serviceCall({
    name: `Call media_player.repeat_set`,
    params: {
      domain: 'media_player',
      service: 'repeat_set',
      service_data: params,
    },
    target,
  });
