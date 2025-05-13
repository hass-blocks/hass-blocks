import { serviceCall, type Block } from '@hass-blocks/core';

declare global {
  interface StartSpotcastProps {
    /**
     * The friendly name of the chromecast or spotify connect device. First checks spotify device list for name (not used together with entity_id and spotify_device_id).
     */
    device_name?: string;
    /**
     * Advanced users only. The spotify device id (not used together with entity_id or device_name).
     */
    spotify_device_id?: string;
    /**
     * The entity_id of the chromecast mediaplayer. Friendly name MUST match the spotify connect device name (not used together with device_name and spotify_device_id).
     */
    entity_id?: string;
    /**
     * Supported Spotify URI as string. None or empty uri will transfer the current/last playback (see parameter force_playback).
     */
    uri?: string;
    /**
     * A category to fetch playlist from. See https://developer.spotify.com/console/get-browse-categories/ for a list of categories
     */
    category?: string;
    /**
     * Country code to use with category. See https://spotipy.readthedocs.io/en/2.19.0/#spotipy.client.Spotify.country_codes for list of available codes
     */
    country?: string;
    /**
     * Limit of playlist to fetch in a given category. Default 20
     */
    limit?: number;
    /**
     * Filters search results for the provided album name. Don't include this if you don't want an album.
     */
    album_name?: string;
    /**
     * Filters search results for the provided track name. Don't include this if you don't want a particular track.
     */
    track_name?: string;
    /**
     * Filters search results for the provided playlist name. Don't include this if you don't want a playlist.
     */
    playlist_name?: string;
    /**
     * Filters search results for the provided podcast show name. Don't include this if you don't want a podcast.
     */
    show_name?: string;
    /**
     * Filters search results for the provided podcast episode name. Don't include this if you don't want a podcast.
     */
    episode_name?: string;
    /**
     * Filters search results by genre of music
     */
    genre_name?: string;
    /**
     * Filters search results for the provided audiobook name. Don't include this if you don't want an audiobook.
     */
    audiobook_name?: string;
    /**
     * This will filter search results to match the provided artist name. Don't include this if searching for a playlist or genre. Do include the author's name if searching for audiobooks.
     */
    artist_name?: string;
    /**
     * Optionally starts Spotify using an alternative account specified in config.
     */
    account?: string;
    /**
     * In case of transfering playback: If true starts playing the user's last playback even if nothing is currently playing.
     */
    force_playback?: boolean;
    /**
     * Starts the playback at a random position in the playlist or album.
     */
    random_song?: boolean;
    /**
     * Set repeat mode for playback.
     */
    repeat?: never;
    /**
     * Set shuffle mode for playback.
     */
    shuffle?: boolean;
    /**
     * Set offset mode for playback. 0 is the first song.
     */
    offset?: number;
    /**
     * Start position of the track in seconds
     */
    start_position?: number;
    /**
     * Set the volume for playback in percentage.
     */
    start_volume?: number;
    /**
     * Set to ignore or not already played episodes in a podcast playlist
     */
    ignore_fully_played?: boolean;
  }

  /**
   * Starts spotify playback on chromecast devices
   */
  var startSpotcast: (params: StartSpotcastProps) => Block;
}

globalThis.startSpotcast = (params) =>
  serviceCall({
    name: `Call spotcast.start`,
    params: {
      domain: 'spotcast',
      service: 'start',
      service_data: params,
    },
  });
