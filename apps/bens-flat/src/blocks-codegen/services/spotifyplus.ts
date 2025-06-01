import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface AddPlayerQueueItemsSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A list of Spotify track or episode URIs to add to the queue (spotify:track:6zd8T1PBe9JFHmuVnurdRp, spotify:track:1kWUud3vY5ij5r62zxpTRy); values can be track or episode URIs.  All URIs must be of the same type - you cannot mix and match tracks and episodes.  An unlimited number of items can be added in one request, but the more items the longer it will take.
     */
    uris: string;
    /**
     * The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated.
     */
    device_id?: string;
    /**
     * DEPRECATED - no longer used, but left here to maintain compatibility.
     */
    verify_device_id?: boolean;
    /**
     * Time delay (in seconds) to wait AFTER issuing the add request (if necessary). This delay will give the spotify web api time to process the change before another command is issued.  Default is 0.15; value range is 0 - 10.
     */
    delay?: number;
  }

  /**
   * Add one or more items to the end of the user's current Spotify Player playback queue.
   */
  var addPlayerQueueItemsSpotifyplus: (
    params: AddPlayerQueueItemsSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<AddPlayerQueueItemsSpotifyplus>> | undefined,
    void
  >;

  interface CheckAlbumFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of Spotify album id's (e.g. `6vc9OTcyd3hyzabCmsdnwE,382ObEPsp2rxGrnsizN5TX`).  A maximum of 50 id's may be specified.  If omitted, the currently playing track album uri id value is used.
     */
    ids?: string;
  }

  /**
   * Check if one or more albums (or the currently playing album) exists in the current user's 'Your Library' favorites.
   */
  var checkAlbumFavoritesSpotifyplus: (
    params: CheckAlbumFavoritesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<CheckAlbumFavoritesSpotifyplus>> | undefined,
    void
  >;

  interface CheckArtistsFollowingSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of Spotify artist id's (e.g. `2CIMQHirSU0MQqyYHq0eOx,1IQ2e1buppatiN1bxUVkrk`).  A maximum of 50 id's may be specified.  If omitted, the currently playing track artist uri id value is used.
     */
    ids?: string;
  }

  /**
   * Check if one or more artists (or the currently playing artists) is followed in the current user's 'Your Library' favorites.
   */
  var checkArtistsFollowingSpotifyplus: (
    params: CheckArtistsFollowingSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<CheckArtistsFollowingSpotifyplus>> | undefined,
    void
  >;

  interface CheckAudiobookFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of Spotify audiobook id's (e.g. `3PFyizE2tGCSRLusl2Qizf,7iHfbu1YPACw6oZPAFJtqe`).  A maximum of 50 id's may be specified.  If omitted, the currently playing audiobook uri id value is used.
     */
    ids?: string;
  }

  /**
   * Check if one or more audiobooks (or the currently playing audiobook) exists in the current user's 'Your Library' favorites.
   */
  var checkAudiobookFavoritesSpotifyplus: (
    params: CheckAudiobookFavoritesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<CheckAudiobookFavoritesSpotifyplus>> | undefined,
    void
  >;

  interface CheckEpisodeFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of Spotify episode id's (e.g. `3F97boSWlXi8OzuhWClZHQ,1hPX5WJY6ja6yopgVPBqm4`).  A maximum of 50 id's may be specified.  If omitted, the currently playing episode uri id value is used.
     */
    ids?: string;
  }

  /**
   * Check if one or more episodes (or the currently playing episode) exists in the current user's 'Your Library' favorites.
   */
  var checkEpisodeFavoritesSpotifyplus: (
    params: CheckEpisodeFavoritesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<CheckEpisodeFavoritesSpotifyplus>> | undefined,
    void
  >;

  interface CheckPlaylistFollowersSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the playlist (e.g. `3cEYpjA9oz9GiPac4AsH4n`).
     */
    playlist_id: string;
    /**
     * Deprecated - must contain the current user's Spotify Username; Maximum of 1 id.  Omit to default to current user name.
     */
    user_ids?: string;
  }

  /**
   * Check to see if the current user is following a specified playlist.
   */
  var checkPlaylistFollowersSpotifyplus: (
    params: CheckPlaylistFollowersSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<CheckPlaylistFollowersSpotifyplus>> | undefined,
    void
  >;

  interface CheckShowFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of Spotify show id's (e.g. `6kAsbP8pxwaU2kPibKTuHE,4rOoJ6Egrf8K2IrywzwOMk`).  A maximum of 50 id's may be specified.  If omitted, the currently playing show uri id value is used.
     */
    ids?: string;
  }

  /**
   * Check if one or more shows (or the currently playing show) exists in the current user's 'Your Library' favorites.
   */
  var checkShowFavoritesSpotifyplus: (
    params: CheckShowFavoritesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<CheckShowFavoritesSpotifyplus>> | undefined,
    void
  >;

  interface CheckTrackFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of Spotify track id's (e.g. `1kWUud3vY5ij5r62zxpTRy,4eoYKv2kDwJS7gRGh5q6SK`).  A maximum of 50 id's may be specified.  If omitted, the currently playing context uri id value is used.
     */
    ids?: string;
  }

  /**
   * Check if one or more tracks (or the currently playing track) exists in the current user's 'Your Library' favorites.
   */
  var checkTrackFavoritesSpotifyplus: (
    params: CheckTrackFavoritesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<CheckTrackFavoritesSpotifyplus>> | undefined,
    void
  >;

  interface CheckUsersFollowingSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of Spotify user ID's to check (e.g. `smedjan, 7piUznRWxNyKpaPvmOSdiZ`).  A maximum of 50 ID's can be specified.
     */
    ids: string;
  }

  /**
   * Check to see if the current user is following one or more users.
   */
  var checkUsersFollowingSpotifyplus: (
    params: CheckUsersFollowingSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<CheckUsersFollowingSpotifyplus>> | undefined,
    void
  >;

  interface FollowArtistsSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of Spotify artist id's (e.g. `2CIMQHirSU0MQqyYHq0eOx,1IQ2e1buppatiN1bxUVkrk`).  A maximum of 50 id's may be specified.  If omitted, the currently playing track artist uri id value is used.
     */
    ids?: string;
  }

  /**
   * Add the current user as a follower of one or more artists.
   */
  var followArtistsSpotifyplus: (
    params: FollowArtistsSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<FollowArtistsSpotifyplus>> | undefined,
    void
  >;

  interface FollowPlaylistSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the playlist (e.g. `3cEYpjA9oz9GiPac4AsH4n`).  If omitted, the currently playing playlist uri id value is used.
     */
    playlist_id?: string;
    /**
     * If true the playlist will be included in user's public playlists, if false it will remain private.
     */
    public?: boolean;
  }

  /**
   * Add the current user as a follower of a playlist.
   */
  var followPlaylistSpotifyplus: (
    params: FollowPlaylistSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<FollowPlaylistSpotifyplus>> | undefined,
    void
  >;

  interface FollowUsersSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of the Spotify user IDs (e.g. 'smedjan,3758dfdsfjk435hjk6k79lm0n3c4').  A maximum of 50 IDs can be sent in one request.
     */
    ids: string;
  }

  /**
   * Add the current user as a follower of one or more users.
   */
  var followUsersSpotifyplus: (
    params: FollowUsersSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<FollowUsersSpotifyplus>> | undefined,
    void
  >;

  interface GetAlbumSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the album.  If omitted, the currently playing album uri id value is used.
     */
    album_id?: string;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter.
     */
    market?: string;
  }

  /**
   * Get Spotify catalog information for a single album.
   */
  var getAlbumSpotifyplus: (
    params: GetAlbumSpotifyplus,
  ) => Block<Partial<ServiceCallArgs<GetAlbumSpotifyplus>> | undefined, void>;

  interface GetAlbumFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter.
     */
    market?: string;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
    /**
     * True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them.
     */
    sort_result?: boolean;
  }

  /**
   * Get a list of the albums saved in the current Spotify user's 'Your Library'.
   */
  var getAlbumFavoritesSpotifyplus: (
    params: GetAlbumFavoritesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetAlbumFavoritesSpotifyplus>> | undefined,
    void
  >;

  interface GetAlbumNewReleasesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter.
     */
    country?: string;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
    /**
     * True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them.
     */
    sort_result?: boolean;
  }

  /**
   * Get a list of new album releases featured in Spotify.
   */
  var getAlbumNewReleasesSpotifyplus: (
    params: GetAlbumNewReleasesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetAlbumNewReleasesSpotifyplus>> | undefined,
    void
  >;

  interface GetAlbumTracksSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the album (e.g. `6vc9OTcyd3hyzabCmsdnwE`). If null, the currently playing album uri id value is used; a Spotify Free or Premium account is required to correctly read the currently playing context.
     */
    album_id?: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter.
     */
    market?: string;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
  }

  /**
   * Get Spotify catalog information about an album's tracks.
   */
  var getAlbumTracksSpotifyplus: (
    params: GetAlbumTracksSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetAlbumTracksSpotifyplus>> | undefined,
    void
  >;

  interface GetArtistSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the artist.  If omitted, the currently playing artist uri id value is used.
     */
    artist_id?: string;
  }

  /**
   * Get Spotify catalog information for a single artist.
   */
  var getArtistSpotifyplus: (
    params: GetArtistSpotifyplus,
  ) => Block<Partial<ServiceCallArgs<GetArtistSpotifyplus>> | undefined, void>;

  interface GetArtistAlbumsSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the artist.  If omitted, the currently playing artist uri id value is used.
     */
    artist_id?: string;
    /**
     * A comma-separated list of keywords that will be used to filter the response.  If not supplied, only `album` types will be returned. Valid values are `album`, `single`, `appears_on`, `compilation`.
     */
    include_groups?: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter.
     */
    market?: string;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
    /**
     * True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them.
     */
    sort_result?: boolean;
  }

  /**
   * Get Spotify catalog information about an artist's albums.
   */
  var getArtistAlbumsSpotifyplus: (
    params: GetArtistAlbumsSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetArtistAlbumsSpotifyplus>> | undefined,
    void
  >;

  interface GetArtistInfoSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the artist.  If omitted, the currently playing artist uri id value is used.
     */
    artist_id?: string;
  }

  /**
   * Get artist about information from the Spotify Artist Biography page for the specified Spotify artist ID.
   */
  var getArtistInfoSpotifyplus: (
    params: GetArtistInfoSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetArtistInfoSpotifyplus>> | undefined,
    void
  >;

  interface GetArtistRelatedArtistsSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the artist.  If omitted, the currently playing artist uri id value is used.
     */
    artist_id?: string;
    /**
     * True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them.
     */
    sort_result?: boolean;
  }

  /**
   * Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.
   */
  var getArtistRelatedArtistsSpotifyplus: (
    params: GetArtistRelatedArtistsSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetArtistRelatedArtistsSpotifyplus>> | undefined,
    void
  >;

  interface GetArtistTopTracksSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the artist.  If omitted, the currently playing artist uri id value is used.
     */
    artist_id?: string;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter.
     */
    market?: string;
    /**
     * True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them.
     */
    sort_result?: boolean;
  }

  /**
   * Get Spotify catalog information about an artist's top tracks by country.
   */
  var getArtistTopTracksSpotifyplus: (
    params: GetArtistTopTracksSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetArtistTopTracksSpotifyplus>> | undefined,
    void
  >;

  interface GetArtistsFollowedSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The last artist ID retrieved from the previous request, or null for the first request.
     */
    after?: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
    /**
     * True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them.
     */
    sort_result?: boolean;
  }

  /**
   * Get the current user's followed artists.
   */
  var getArtistsFollowedSpotifyplus: (
    params: GetArtistsFollowedSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetArtistsFollowedSpotifyplus>> | undefined,
    void
  >;

  interface GetAudiobookSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID for the audiobook (e.g. `74aydHJKgYz3AIq3jjBSv1`). If null, the currently playing audiobook uri id value is used.
     */
    audiobook_id?: string;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter.
     */
    market?: string;
  }

  /**
   * Get Spotify catalog information for a single audiobook.
   */
  var getAudiobookSpotifyplus: (
    params: GetAudiobookSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetAudiobookSpotifyplus>> | undefined,
    void
  >;

  interface GetAudiobookChaptersSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID for the audiobook (e.g. `74aydHJKgYz3AIq3jjBSv1`). If null, the currently playing audiobook uri id value is used.
     */
    audiobook_id?: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter.
     */
    market?: string;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
  }

  /**
   * Get Spotify catalog information about an audiobook's chapters.
   */
  var getAudiobookChaptersSpotifyplus: (
    params: GetAudiobookChaptersSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetAudiobookChaptersSpotifyplus>> | undefined,
    void
  >;

  interface GetAudiobookFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
    /**
     * True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them.
     */
    sort_result?: boolean;
  }

  /**
   * Get a list of the audiobooks saved in the current Spotify user's 'Your Library'.
   */
  var getAudiobookFavoritesSpotifyplus: (
    params: GetAudiobookFavoritesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetAudiobookFavoritesSpotifyplus>> | undefined,
    void
  >;

  interface GetBrowseCategorysListSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter.
     */
    country?: string;
    /**
     * The desired language, consisting of a lowercase ISO 639-1 language code and an uppercase ISO 3166-1 alpha-2 country code, joined by an underscore.  For example `es_MX`, meaning `Spanish (Mexico)`.  Provide this parameter if you want the results returned in a particular language (where available).  Note that if locale is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English).
     */
    locale?: string;
    /**
     * True to return real-time information from the spotify web api and update the cache; otherwise, False to just return the cached value.
     */
    refresh?: boolean;
  }

  /**
   * Get a sorted list of ALL categories used to tag items in Spotify.
   */
  var getBrowseCategorysListSpotifyplus: (
    params: GetBrowseCategorysListSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetBrowseCategorysListSpotifyplus>> | undefined,
    void
  >;

  interface GetCategoryPlaylistsSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify category ID (not name) for the category.
     */
    category_id: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter.
     */
    country?: string;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
    /**
     * True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them.
     */
    sort_result?: boolean;
  }

  /**
   * Get a list of Spotify playlists tagged with a particular category.
   */
  var getCategoryPlaylistsSpotifyplus: (
    params: GetCategoryPlaylistsSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetCategoryPlaylistsSpotifyplus>> | undefined,
    void
  >;

  interface GetChapterSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the chapter.  If omitted, the currently playing chapter uri id value is used.
     */
    chapter_id?: string;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter.
     */
    market?: string;
  }

  /**
   * Get Spotify catalog information for a single chapter.
   */
  var getChapterSpotifyplus: (
    params: GetChapterSpotifyplus,
  ) => Block<Partial<ServiceCallArgs<GetChapterSpotifyplus>> | undefined, void>;

  interface GetCoverImageFileSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The cover image url whose contents are to be retrieved.
     */
    image_url: string;
    /**
     * Fully-qualified path to store the downloaded image to.
     */
    output_path: string;
  }

  /**
   * Gets the contents of an image url and transfers the contents to the local file system.
   */
  var getCoverImageFileSpotifyplus: (
    params: GetCoverImageFileSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetCoverImageFileSpotifyplus>> | undefined,
    void
  >;

  interface GetEpisodeSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the episode.  If omitted, the currently playing episode uri id value is used.
     */
    episode_id?: string;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter.
     */
    market?: string;
  }

  /**
   * Get Spotify catalog information for a single episode.
   */
  var getEpisodeSpotifyplus: (
    params: GetEpisodeSpotifyplus,
  ) => Block<Partial<ServiceCallArgs<GetEpisodeSpotifyplus>> | undefined, void>;

  interface GetEpisodeFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
    /**
     * True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them.
     */
    sort_result?: boolean;
  }

  /**
   * Get a list of the episodes saved in the current Spotify user's 'Your Library'.
   */
  var getEpisodeFavoritesSpotifyplus: (
    params: GetEpisodeFavoritesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetEpisodeFavoritesSpotifyplus>> | undefined,
    void
  >;

  interface GetFeaturedPlaylistsSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter.
     */
    country?: string;
    /**
     * The desired language, consisting of a lowercase ISO 639-1 language code and an uppercase ISO 3166-1 alpha-2 country code, joined by an underscore.  For example `es_MX`, meaning `Spanish (Mexico)`.  Provide this parameter if you want the results returned in a particular language (where available).  Note that if locale is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English).
     */
    locale?: string;
    /**
     * A timestamp in ISO 8601 format (yyyy-MM-ddTHH:mm:ss). Use this parameter to specify the user's local time to get results tailored for that specific date and time in the day. If not provided, the response defaults to the current UTC time.
     */
    timestamp?: string;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
    /**
     * True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them.
     */
    sort_result?: boolean;
  }

  /**
   * Get a list of Spotify featured playlists.
   */
  var getFeaturedPlaylistsSpotifyplus: (
    params: GetFeaturedPlaylistsSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetFeaturedPlaylistsSpotifyplus>> | undefined,
    void
  >;

  interface GetImageVibrantColorsSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The image source to extract color palette information from.  If the prefix of the value is `http:` or `https:`, then the image is downloaded from the url.  This can also point to a filename on the local file system.  If null, the currently playing Spotify track image url is used.  Example = `https://i.scdn.co/image/ab67616d0000b2733deaee5f76ab2da15dd8db86`, `c:/image1.jpg`
     */
    image_source?: string;
    /**
     * The number of colors in the initial palette from which swatches will be generated.  Default is 64; Range is 1 to 256.
     */
    color_count?: number;
    /**
     * Controls the processing time and quality of the palette generation.  A lower value (e.g. 1) results in higher quality but takes more processing time, while a higher value (e.g. 5) is faster but may result in a lower-quality palette.  Default is 5; Range is 1 to 10.
     */
    color_quality?: number;
  }

  /**
   * Get vibrant color palette values from the specified image source.
   */
  var getImageVibrantColorsSpotifyplus: (
    params: GetImageVibrantColorsSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetImageVibrantColorsSpotifyplus>> | undefined,
    void
  >;

  interface GetPlayerDevicesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * True to return real-time information from the spotify web api and update the cache; otherwise, False to just return the cached value.
     */
    refresh?: boolean;
    /**
     * True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them.
     */
    sort_result?: boolean;
  }

  /**
   * Get information about a user's available Spotify Connect player devices.  Some device models are not supported and will not be listed in the API response.
   */
  var getPlayerDevicesSpotifyplus: (
    params: GetPlayerDevicesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetPlayerDevicesSpotifyplus>> | undefined,
    void
  >;

  interface GetPlayerPlaybackStateSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter.
     */
    market?: string;
    /**
     * A comma-separated list of item types that your client supports besides the default track type. Valid types are 'track' and 'episode'.
     */
    additional_types?: string;
  }

  /**
   * Get information about the user's current playback state, including track or episode, progress, and active device.
   */
  var getPlayerPlaybackStateSpotifyplus: (
    params: GetPlayerPlaybackStateSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetPlayerPlaybackStateSpotifyplus>> | undefined,
    void
  >;

  interface GetPlayerNowPlayingSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter.
     */
    market?: string;
    /**
     * A comma-separated list of item types that your client supports besides the default track type. Valid types are 'track' and 'episode'.
     */
    additional_types?: string;
  }

  /**
   * Get the object currently being played on the user's Spotify account.
   */
  var getPlayerNowPlayingSpotifyplus: (
    params: GetPlayerNowPlayingSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetPlayerNowPlayingSpotifyplus>> | undefined,
    void
  >;

  interface GetPlayerQueueInfoSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
  }

  /**
   * Get the list of objects that make up the user's playback queue.
   */
  var getPlayerQueueInfoSpotifyplus: (
    params: GetPlayerQueueInfoSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetPlayerQueueInfoSpotifyplus>> | undefined,
    void
  >;

  interface GetPlayerRecentTracksSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * Returns all items after (but not including) this cursor position, which is a Unix timestamp in milliseconds.  If `after` is specified, `before` must not be specified.  Use with limit to get the next set of items.  Default is `0` (the first item).
     */
    after?: number;
    /**
     * Returns all items before (but not including) this cursor position, which is a Unix timestamp in milliseconds.  If `before` is specified, `after` must not be specified.  Use with limit to get the next set of items.  Default is `0` (the first item).
     */
    before?: number;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
  }

  /**
   * Get tracks from the current user's recently played tracks; currently doesn't support podcast episodes, and only 50 items may be returned due to spotify limits.
   */
  var getPlayerRecentTracksSpotifyplus: (
    params: GetPlayerRecentTracksSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetPlayerRecentTracksSpotifyplus>> | undefined,
    void
  >;

  interface GetPlaylistSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the playlist.  If omitted, the currently playing playlist uri id value is used.
     */
    playlist_id?: string;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter.
     */
    market?: string;
    /**
     * A comma-separated list of fields to return from the Spotify Web API. All fields are returned if omitted.
     */
    fields?: string;
    /**
     * A comma-separated list of item types that your client supports besides the default track type. Valid types are 'track' and 'episode'.
     */
    additional_types?: string;
  }

  /**
   * Get a playlist owned by a Spotify user.
   */
  var getPlaylistSpotifyplus: (
    params: GetPlaylistSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetPlaylistSpotifyplus>> | undefined,
    void
  >;

  interface GetPlaylistCoverImageSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the playlist (e.g. 5v5ETK9WFXAnGQ3MRubKuE).  If omitted, the currently playing playlist uri id value is used.
     */
    playlist_id?: string;
  }

  /**
   * Get the current image associated with a specific playlist.
   */
  var getPlaylistCoverImageSpotifyplus: (
    params: GetPlaylistCoverImageSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetPlaylistCoverImageSpotifyplus>> | undefined,
    void
  >;

  interface GetPlaylistFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
    /**
     * True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them.
     */
    sort_result?: boolean;
  }

  /**
   * Get a list of the playlists owned or followed by the current Spotify user.
   */
  var getPlaylistFavoritesSpotifyplus: (
    params: GetPlaylistFavoritesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetPlaylistFavoritesSpotifyplus>> | undefined,
    void
  >;

  interface GetPlaylistItemsSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the playlist (e.g. 5v5ETK9WFXAnGQ3MRubKuE).  If null, the currently playing playlist uri id value is used.
     */
    playlist_id: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter.
     */
    market?: string;
    /**
     * Filters for the query; a comma-separated list of the fields to return. If omitted, all fields are returned. For example, specify 'fields=description,uri' to get just the playlist's description and URI.
     */
    fields?: string;
    /**
     * A comma-separated list of item types that your client supports besides the default track type.  Valid types are 'track' and 'episode'.
     */
    additional_types?: string;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
  }

  /**
   * Get full details of the items of a playlist owned by a Spotify user.
   */
  var getPlaylistItemsSpotifyplus: (
    params: GetPlaylistItemsSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetPlaylistItemsSpotifyplus>> | undefined,
    void
  >;

  interface GetPlaylistsForUserSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The user's Spotify user ID (e.g. `smedjan`).
     */
    user_id: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
    /**
     * True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them.
     */
    sort_result?: boolean;
  }

  /**
   * Get a list of the playlists owned or followed by the current Spotify user.
   */
  var getPlaylistsForUserSpotifyplus: (
    params: GetPlaylistsForUserSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetPlaylistsForUserSpotifyplus>> | undefined,
    void
  >;

  interface GetShowSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the show.  If omitted, the currently playing show uri id value is used.
     */
    show_id?: string;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter.
     */
    market?: string;
  }

  /**
   * Get Spotify catalog information for a single show.
   */
  var getShowSpotifyplus: (
    params: GetShowSpotifyplus,
  ) => Block<Partial<ServiceCallArgs<GetShowSpotifyplus>> | undefined, void>;

  interface GetShowEpisodesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID for the show.  If omitted, the currently playing show uri id value is used.
     */
    show_id?: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter.
     */
    market?: string;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
  }

  /**
   * Get Spotify catalog information about a show's episodes.
   */
  var getShowEpisodesSpotifyplus: (
    params: GetShowEpisodesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetShowEpisodesSpotifyplus>> | undefined,
    void
  >;

  interface GetShowFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
    /**
     * True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them.
     */
    sort_result?: boolean;
    /**
     * True (default) to exclude audiobook shows from the returned list, leaving only podcast shows; otherwise, False to include all results returned by the Spotify Web API.
     */
    exclude_audiobooks?: boolean;
  }

  /**
   * Get a list of the shows saved in the current Spotify user's 'Your Library'.
   */
  var getShowFavoritesSpotifyplus: (
    params: GetShowFavoritesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetShowFavoritesSpotifyplus>> | undefined,
    void
  >;

  interface GetSpotifyConnectDeviceSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The id (e.g. '30fbc80e35598f3c242f2120413c943dfd9715fe') or name (e.g. 'Office') of the Spotify Connect Player device this command is targeting.  If an '*' is specified, then the SpotifyPlus default device is used.
     */
    device_value: string;
    /**
     * DEPRECATED - no longer used, but left here to maintain compatibility.
     */
    verify_user_context?: boolean;
    /**
     * Maximum time to wait (in seconds) for the device to become active in the Spotify Connect device list.  This value is only used if a Connect command has to be issued to activate the device. Default is 5; value range is 0 - 10.
     */
    verify_timeout?: number;
    /**
     * DEPRECATED - no longer used, but left here to maintain compatibility.
     */
    refresh_device_list?: boolean;
    /**
     * True to activate the device if necessary; otherwise, False.
     */
    activate_device?: boolean;
    /**
     * Time delay (in seconds) to wait AFTER issuing any command to the device.  This delay will give the spotify zeroconf api time to process the change before another command is issued.  Default is 0.25; value range is 0 - 10.
     */
    delay?: number;
  }

  /**
   * Get information about a specific Spotify Connect player device, and (optionally) activate the device if it requires it.
   */
  var getSpotifyConnectDeviceSpotifyplus: (
    params: GetSpotifyConnectDeviceSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetSpotifyConnectDeviceSpotifyplus>> | undefined,
    void
  >;

  interface GetSpotifyConnectDevicesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * True (default) to return real-time information from the spotify zeroconf api and update the cache; otherwise, False to just return the cached value.
     */
    refresh?: boolean;
    /**
     * DEPRECATED - no longer used, but left here to maintain compatibility.
     */
    sort_result?: boolean;
  }

  /**
   * Get information about all available Spotify Connect player (both static and dynamic) devices.
   */
  var getSpotifyConnectDevicesSpotifyplus: (
    params: GetSpotifyConnectDevicesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetSpotifyConnectDevicesSpotifyplus>> | undefined,
    void
  >;

  interface GetTrackSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the track.  If omitted, the currently playing track uri id value is used.
     */
    track_id?: string;
  }

  /**
   * Get Spotify catalog information for a single track.
   */
  var getTrackSpotifyplus: (
    params: GetTrackSpotifyplus,
  ) => Block<Partial<ServiceCallArgs<GetTrackSpotifyplus>> | undefined, void>;

  interface GetTrackAudioFeaturesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the track.  Example = `1kWUud3vY5ij5r62zxpTRy`.  If null, the currently playing track uri id value is used.
     */
    track_id?: string;
  }

  /**
   * Get audio feature information for a single track identified by its unique Spotify ID.
   */
  var getTrackAudioFeaturesSpotifyplus: (
    params: GetTrackAudioFeaturesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetTrackAudioFeaturesSpotifyplus>> | undefined,
    void
  >;

  interface GetTrackFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter.
     */
    market?: string;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
    /**
     * True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them.
     */
    sort_result?: boolean;
  }

  /**
   * Get a list of the tracks saved in the current Spotify user's 'Your Library'.
   */
  var getTrackFavoritesSpotifyplus: (
    params: GetTrackFavoritesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetTrackFavoritesSpotifyplus>> | undefined,
    void
  >;

  interface GetTrackRecommendationsSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter.
     */
    market?: string;
    /**
     * A comma separated list of Spotify IDs for seed artists (e.g. 4NHQUGzhtTLFvgF5SZesLK).  Up to 5 seed values may be provided in any combination of seedArtists, seedTracks and seedGenres; only required if seedGenres and seedTracks are not set.
     */
    seed_artists?: string;
    /**
     * A comma separated list of any genres in the set of available genre seeds (e.g. classical,country).  Up to 5 seed values may be provided in any combination of seedArtists, seedTracks and seedGenres; only required if seedArtists and seedTracks are not set.
     */
    seed_genres?: string;
    /**
     * A comma separated list of Spotify IDs for a seed track (e.g. 0c6xIDDpzE81m2q797ordA).  Up to 5 seed values may be provided in any combination of seedArtists, seedTracks and seedGenres; only required if seedArtists and seedGenres are not set.
     */
    seed_tracks?: string;
    /**
     * Restrict results to only those tracks whose acousticness level is greater than the specified value.  Range is `0` - `1`.
     */
    min_acousticness?: number;
    /**
     * Restrict results to only those tracks whose acousticness level is less than the specified value.  Range is `0` - `1`.
     */
    max_acousticness?: number;
    /**
     * Restrict results to only those tracks whose acousticness level is equal to the specified value.  Range is `0` - `1`.
     */
    target_acousticness?: number;
    /**
     * Restrict results to only those tracks whose danceability level is greater than the specified value.  Range is `0` - `1`.
     */
    min_danceability?: number;
    /**
     * Restrict results to only those tracks whose danceability level is less than the specified value.  Range is `0` - `1`.
     */
    max_danceability?: number;
    /**
     * Restrict results to only those tracks whose acousticness is equal to the specified value.  Range is `0` - `1`.
     */
    target_danceability?: number;
    /**
     * Restrict results to only those tracks whose duration is greater than the specified value in milliseconds.
     */
    min_duration_ms?: number;
    /**
     * Restrict results to only those tracks whose duration is less than the specified value in milliseconds.
     */
    max_duration_ms?: number;
    /**
     * Restrict results to only those tracks whose duration is equal to the specified value in milliseconds.
     */
    target_duration_ms?: number;
    /**
     * Restrict results to only those tracks whose energy level is greater than the specified value.  Range is `0` - `1`.
     */
    min_energy?: number;
    /**
     * Restrict results to only those tracks whose energy level is less than the specified value.  Range is `0` - `1`.
     */
    max_energy?: number;
    /**
     * Restrict results to only those tracks whose energy level is equal to the specified value.  Range is `0` - `1`.
     */
    target_energy?: number;
    /**
     * Restrict results to only those tracks whose instrumentalness level is greater than the specified value.  Range is `0` - `1`.
     */
    min_instrumentalness?: number;
    /**
     * Restrict results to only those tracks whose instrumentalness level is less than the specified value.  Range is `0` - `1`.
     */
    max_instrumentalness?: number;
    /**
     * Restrict results to only those tracks whose instrumentalness level is equal to the specified value.  Range is `0` - `1`.
     */
    target_instrumentalness?: number;
    /**
     * Restrict results to only those tracks whose key level is greater than the specified value.  Range is `0` - `11`.
     */
    min_key?: number;
    /**
     * Restrict results to only those tracks whose key level is less than the specified value.  Range is `0` - `11`.
     */
    max_key?: number;
    /**
     * Restrict results to only those tracks whose key level is equal to the specified value.  Range is `0` - `11`.
     */
    target_key?: number;
    /**
     * Restrict results to only those tracks whose liveness level is greater than the specified value.  Range is `0` - `1`.
     */
    min_liveness?: number;
    /**
     * Restrict results to only those tracks whose liveness level is less than the specified value.  Range is `0` - `1`.
     */
    max_liveness?: number;
    /**
     * Restrict results to only those tracks whose liveness level is equal to the specified value.  Range is `0` - `1`.
     */
    target_liveness?: number;
    /**
     * Restrict results to only those tracks whose loudness level is greater than the specified value.
     */
    min_loudness?: number;
    /**
     * Restrict results to only those tracks whose loudness level is less than the specified value.
     */
    max_loudness?: number;
    /**
     * Restrict results to only those tracks whose loudness level is equal to the specified value.
     */
    target_loudness?: number;
    /**
     * Restrict results to only those tracks whose mode level is greater than the specified value.  Range is `0` - `1`.
     */
    min_mode?: number;
    /**
     * Restrict results to only those tracks whose mode level is less than the specified value.  Range is `0` - `1`.
     */
    max_mode?: number;
    /**
     * Restrict results to only those tracks whose mode level is equal to the specified value.  Range is `0` - `1`.
     */
    target_mode?: number;
    /**
     * Restrict results to only those tracks whose popularity level is greater than the specified value.  Range is `0` - `100`.
     */
    min_popularity?: number;
    /**
     * Restrict results to only those tracks whose popularity level is less than the specified value.  Range is `0` - `100`.
     */
    max_popularity?: number;
    /**
     * Restrict results to only those tracks whose popularity level is equal to the specified value.  Range is `0` - `100`.
     */
    target_popularity?: number;
    /**
     * Restrict results to only those tracks whose speechiness level is greater than the specified value.  Range is `0` - `1`.
     */
    min_speechiness?: number;
    /**
     * Restrict results to only those tracks whose speechiness level is less than the specified value.  Range is `0` - `1`.
     */
    max_speechiness?: number;
    /**
     * Restrict results to only those tracks whose speechiness level is equal to the specified value.  Range is `0` - `1`.
     */
    target_speechiness?: number;
    /**
     * Restrict results to only those tracks with a tempo greater than the specified number of beats per minute.
     */
    min_tempo?: number;
    /**
     * Restrict results to only those tracks with a tempo less than the specified number of beats per minute.
     */
    max_tempo?: number;
    /**
     * Restrict results to only those tracks with a tempo equal to the specified number of beats per minute.
     */
    target_tempo?: number;
    /**
     * Restrict results to only those tracks whose time signature is greater than the specified value.  Range is `0` - `11`.
     */
    min_time_signature?: number;
    /**
     * Restrict results to only those tracks whose time signature is less than the specified value.  Range is `0` - `11`.
     */
    max_time_signature?: number;
    /**
     * Restrict results to only those tracks whose time signature is equal to the specified value.  Range is `0` - `11`.
     */
    target_time_signature?: number;
    /**
     * Restrict results to only those tracks whose valence level is greater than the specified value.  Range is `0` - `1`.
     */
    min_valence?: number;
    /**
     * Restrict results to only those tracks whose valence level is less than the specified value.  Range is `0` - `1`.
     */
    max_valence?: number;
    /**
     * Restrict results to only those tracks whose valence level is equal to the specified value.  Range is `0` - `1`.
     */
    target_valence?: number;
  }

  /**
   * Get track recommendations for specified criteria.
   */
  var getTrackRecommendationsSpotifyplus: (
    params: GetTrackRecommendationsSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetTrackRecommendationsSpotifyplus>> | undefined,
    void
  >;

  interface GetTracksAudioFeaturesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of the Spotify track IDs.  Maximum of 100 IDs.  Example `7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B`.
     */
    ids: string;
  }

  /**
   * Get audio features for multiple tracks based on their Spotify IDs.
   */
  var getTracksAudioFeaturesSpotifyplus: (
    params: GetTracksAudioFeaturesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetTracksAudioFeaturesSpotifyplus>> | undefined,
    void
  >;

  interface GetUsersTopArtistsSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * Over what time frame the affinities are computed. Valid values are `long_term` (calculated from several years of data and including all new data as it becomes available), `medium_term` (approximately last 6 months), and `short_term` (approximately last 4 weeks).
     */
    time_range?: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
    /**
     * True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them.
     */
    sort_result?: boolean;
  }

  /**
   * Get the current user's top artists based on calculated affinity.
   */
  var getUsersTopArtistsSpotifyplus: (
    params: GetUsersTopArtistsSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetUsersTopArtistsSpotifyplus>> | undefined,
    void
  >;

  interface GetUsersTopTracksSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * Over what time frame the affinities are computed. Valid values are `long_term` (calculated from several years of data and including all new data as it becomes available), `medium_term` (approximately last 6 months), and `short_term` (approximately last 4 weeks).
     */
    time_range?: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
    /**
     * True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them.
     */
    sort_result?: boolean;
  }

  /**
   * Get the current user's top tracks based on calculated affinity.
   */
  var getUsersTopTracksSpotifyplus: (
    params: GetUsersTopTracksSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<GetUsersTopTracksSpotifyplus>> | undefined,
    void
  >;

  interface PlayerMediaPauseSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated.
     */
    device_id?: string;
    /**
     * Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10.
     */
    delay?: number;
  }

  /**
   * Pause media play for the specified Spotify Connect device.
   */
  var playerMediaPauseSpotifyplus: (
    params: PlayerMediaPauseSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<PlayerMediaPauseSpotifyplus>> | undefined,
    void
  >;

  interface PlayerMediaPlayContextSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * Spotify URI of the context to play (e.g. `spotify:album:6vc9OTcyd3hyzabCmsdnwE`).  Valid contexts are albums, artists & playlists.
     */
    context_uri: string;
    /**
     * Indicates from what Uri in the context playback should start (e.g. `1kWUud3vY5ij5r62zxpTRy`.  Only available when contextUri corresponds to an artist, album or playlist.  The offsetPosition argument will be used if this value is null.
     */
    offset_uri?: string;
    /**
     * Indicates from what position in the context playback should start.  The value is zero-based, and can't be negative.  Only available when contextUri corresponds to an album or playlist.
     */
    offset_position?: number;
    /**
     * The position (in milliseconds) to seek to; must be a positive number.  Passing in a position that is greater than the length of the track will cause the player to start playing the next track.
     */
    position_ms?: number;
    /**
     * The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated.
     */
    device_id?: string;
    /**
     * Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10.
     */
    delay?: number;
  }

  /**
   * Start playing one or more tracks of the specified context on a Spotify Connect device.
   */
  var playerMediaPlayContextSpotifyplus: (
    params: PlayerMediaPlayContextSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<PlayerMediaPlayContextSpotifyplus>> | undefined,
    void
  >;

  interface PlayerMediaPlayTrackFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated.
     */
    device_id?: string;
    /**
     * True to set player shuffle mode to on; otherwise, False for no shuffle.
     */
    shuffle?: boolean;
    /**
     * Time delay (in seconds) to wait AFTER issuing the command to the player.  This delay will give the spotify web api time to process the change before another command is issued.  Default is 0.50; value range is 0 - 10.
     */
    delay?: number;
    /**
     * DEPRECATED - no longer used, but left here to maintain compatibility.
     */
    resolve_device_id?: boolean;
    /**
     * The maximum number of items to retrieve from favorites.  Default is 200; Range is 1 - 750.
     */
    limit_total?: number;
  }

  /**
   * Start playing track favorites on the specified Spotify Connect device.
   */
  var playerMediaPlayTrackFavoritesSpotifyplus: (
    params: PlayerMediaPlayTrackFavoritesSpotifyplus,
  ) => Block<
    | Partial<ServiceCallArgs<PlayerMediaPlayTrackFavoritesSpotifyplus>>
    | undefined,
    void
  >;

  interface PlayerMediaPlayTracksSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A list of Spotify track URIs to play; can be track or episode URIs.  A maximum of 50 items can be added in one request.
     */
    uris: string;
    /**
     * The position (in milliseconds) to seek to; must be a positive number.  Passing in a position that is greater than the length of the track will cause the player to start playing the next track.
     */
    position_ms?: number;
    /**
     * The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated.
     */
    device_id?: string;
    /**
     * Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10.
     */
    delay?: number;
  }

  /**
   * Start playing one or more tracks on the specified Spotify Connect device.
   */
  var playerMediaPlayTracksSpotifyplus: (
    params: PlayerMediaPlayTracksSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<PlayerMediaPlayTracksSpotifyplus>> | undefined,
    void
  >;

  interface PlayerMediaResumeSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated.
     */
    device_id?: string;
    /**
     * Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10.
     */
    delay?: number;
  }

  /**
   * Resume media play for the specified Spotify Connect device.
   */
  var playerMediaResumeSpotifyplus: (
    params: PlayerMediaResumeSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<PlayerMediaResumeSpotifyplus>> | undefined,
    void
  >;

  interface PlayerMediaSeekSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The absolute position in milliseconds to seek to; must be a positive number or zero if the `relativePositionMS` argument is specified. Passing in a position that is greater than the length of the track will cause the player to start playing the next song. Example = `25000` to start playing at the 25 second mark.
     */
    position_ms?: number;
    /**
     * The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated.
     */
    device_id?: string;
    /**
     * Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10.
     */
    delay?: number;
    /**
     * The relative position in milliseconds to seek to; can be a positive or negative number, or zero if the `positionMS` argument is specified. Example = `-10000` to seek behind by 10 seconds; `10000` to seek ahead by 10 seconds.
     */
    relative_position_ms?: number;
  }

  /**
   * Seeks to the given absolute or relative position in the user's currently playing track for the specified Spotify Connect device.
   */
  var playerMediaSeekSpotifyplus: (
    params: PlayerMediaSeekSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<PlayerMediaSeekSpotifyplus>> | undefined,
    void
  >;

  interface PlayerMediaSkipNextSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated.
     */
    device_id?: string;
    /**
     * Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10.
     */
    delay?: number;
  }

  /**
   * Skips to next track in the user's queue for the specified Spotify Connect device.
   */
  var playerMediaSkipNextSpotifyplus: (
    params: PlayerMediaSkipNextSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<PlayerMediaSkipNextSpotifyplus>> | undefined,
    void
  >;

  interface PlayerMediaSkipPreviousSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated.
     */
    device_id?: string;
    /**
     * Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10.
     */
    delay?: number;
  }

  /**
   * Skips to previous track in the user's queue for the specified Spotify Connect device.
   */
  var playerMediaSkipPreviousSpotifyplus: (
    params: PlayerMediaSkipPreviousSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<PlayerMediaSkipPreviousSpotifyplus>> | undefined,
    void
  >;

  interface PlayerSetRepeatModeSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The repeat mode state to set; `track` will repeat the current track; `context` will repeat the current context; `off` will turn repeat off.  Default is 'off'.
     */
    state: never;
    /**
     * The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated.
     */
    device_id?: string;
    /**
     * Time delay (in seconds) to wait AFTER issuing the command to the player.  This delay will give the spotify web api time to process the change before another command is issued.  Default is 0.50; value range is 0 - 10.
     */
    delay?: number;
  }

  /**
   * Set repeat mode for the specified Spotify Connect device.
   */
  var playerSetRepeatModeSpotifyplus: (
    params: PlayerSetRepeatModeSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<PlayerSetRepeatModeSpotifyplus>> | undefined,
    void
  >;

  interface PlayerSetShuffleModeSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * True to set player shuffle mode to on; otherwise, False for no shuffle.
     */
    state: boolean;
    /**
     * The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated.
     */
    device_id?: string;
    /**
     * Time delay (in seconds) to wait AFTER issuing the command to the player.  This delay will give the spotify web api time to process the change before another command is issued.  Default is 0.50; value range is 0 - 10.
     */
    delay?: number;
  }

  /**
   * Set shuffle mode for the specified Spotify Connect device.
   */
  var playerSetShuffleModeSpotifyplus: (
    params: PlayerSetShuffleModeSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<PlayerSetShuffleModeSpotifyplus>> | undefined,
    void
  >;

  interface PlayerSetVolumeLevelSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The volume level to set, expressed as a percentage value (e.g. 25).  Must be a value from 0 (muted) to 100 (max volume) inclusive.
     */
    volume_level: number;
    /**
     * The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated.
     */
    device_id?: string;
    /**
     * Time delay (in seconds) to wait AFTER issuing the command to the player.  This delay will give the spotify web api time to process the change before another command is issued.  Default is 0.50; value range is 0 - 10.
     */
    delay?: number;
  }

  /**
   * Set volume level for the specified Spotify Connect device.
   */
  var playerSetVolumeLevelSpotifyplus: (
    params: PlayerSetVolumeLevelSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<PlayerSetVolumeLevelSpotifyplus>> | undefined,
    void
  >;

  interface PlayerTransferPlaybackSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The id or name of the Spotify Connect Player device on which playback should be started/transferred.  If no device is specified, then the SpotifyPlus default device is activated.
     */
    device_id?: string;
    /**
     * True (default) to start playback on the new device; otherise, False to keep the current playback state on the existing device.
     */
    play?: boolean;
    /**
     * Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10.
     */
    delay?: number;
    /**
     * DEPRECATED - no longer used, but left here to maintain compatibility.
     */
    refresh_device_list?: boolean;
    /**
     * True to issue a Spotify Connect Disconnect call prior to transfer, which will force the device to reconnect to Spotify Connect; otherwise, False to not disconnect. Default is True.
     */
    force_activate_device?: boolean;
    /**
     * The player device identifier where play is being transferred from; only used to stop play on restricted devices prior to transferring playback.
     */
    device_id_from?: string;
  }

  /**
   * Transfer playback to a new Spotify Connect device and optionally begin playback.
   */
  var playerTransferPlaybackSpotifyplus: (
    params: PlayerTransferPlaybackSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<PlayerTransferPlaybackSpotifyplus>> | undefined,
    void
  >;

  interface PlaylistCoverImageAddSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the playlist (e.g. 5AC9ZXA7nJ7oGWO911FuDG).
     */
    playlist_id: string;
    /**
     * The fully-qualified path of the image to be uploaded (e.g. `www/images/spotify_playlist_default_image.png`).  The image must be in PNG or JPEG format, and cannot exceed 256KB in Base64 encoded size.
     */
    image_path: string;
  }

  /**
   * Replace the image used to represent a specific playlist.
   */
  var playlistCoverImageAddSpotifyplus: (
    params: PlaylistCoverImageAddSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<PlaylistCoverImageAddSpotifyplus>> | undefined,
    void
  >;

  interface PlaylistChangeSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the playlist (e.g. `5AC9ZXA7nJ7oGWO911FuDG`).
     */
    playlist_id: string;
    /**
     * The updated name of the playlist (e.g. `My Updated Playlist`).  This name does not need to be unique; a user may have several playlists with the same name.
     */
    name: string;
    /**
     * The playlist description, as displayed in Spotify Clients and in the Web API.
     */
    description: string;
    /**
     * If true, the playlist will be public; if false, it will be private.
     */
    public: boolean;
    /**
     * If true, the playlist will be collaborative (other users can modify it).  To create a collaborative playlist you must also set the public argument to false.
     */
    collaborative: boolean;
    /**
     * The fully-qualified path of the image to be uploaded (e.g. `www/images/spotify_playlist_default_image.png`).  The image must be in PNG or JPEG format, and cannot exceed 256KB in Base64 encoded size.  Omit this parameter if you do not wish to update the existing playlist image.
     */
    image_path?: string;
  }

  /**
   * Change a playlist's details (name, description, and public / private state).
   */
  var playlistChangeSpotifyplus: (
    params: PlaylistChangeSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<PlaylistChangeSpotifyplus>> | undefined,
    void
  >;

  interface PlaylistCreateSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The user's Spotify user ID (e.g. 32k99y2kg5lnn3mxhtmd2bpdkjfu).  Omit this argument to use the Spotify User ID of the player entity_id.
     */
    user_id?: string;
    /**
     * The name for the new playlist (e.g. `My New Playlist`).  This name does not need to be unique; a user may have several playlists with the same name.
     */
    name: string;
    /**
     * The playlist description, as displayed in Spotify Clients and in the Web API.
     */
    description: string;
    /**
     * If true, the playlist will be public; if false, it will be private.
     */
    public: boolean;
    /**
     * If true, the playlist will be collaborative (other users can modify it).  To create a collaborative playlist you must also set the public argument to false.
     */
    collaborative: boolean;
    /**
     * The fully-qualified path of the image to be uploaded (e.g. `www/images/spotify_playlist_default_image.png`).  The image must be in PNG or JPEG format, and cannot exceed 256KB in Base64 encoded size.  Omit this parameter if you do not wish to add a playlist image.
     */
    image_path?: string;
  }

  /**
   * Create an empty playlist for a Spotify user.  The playlist will remain empty until you add tracks.
   */
  var playlistCreateSpotifyplus: (
    params: PlaylistCreateSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<PlaylistCreateSpotifyplus>> | undefined,
    void
  >;

  interface PlaylistItemsAddSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the playlist (e.g. 5AC9ZXA7nJ7oGWO911FuDG).
     */
    playlist_id: string;
    /**
     * A comma-separated list of Spotify URIs to add; can be track or episode URIs (e.g. spotify:track:4iV5W9uYEdYUVa79Axb7Rh).  A maximum of 100 items can be specified in one request.  If nothing is specified, then the track (or episode) uri currently playing is used.
     */
    uris?: string;
    /**
     * The position to insert the items, a zero-based index.  For example, to insert the items in the first position use a value of 0; to insert the items in the third position use a value of 2.  Omit the parameter to append the items to the end of the playlist.
     */
    position?: number;
  }

  /**
   * Add one or more items to a user's playlist.  Items are added in the order they are listed in the `uris` argument.
   */
  var playlistItemsAddSpotifyplus: (
    params: PlaylistItemsAddSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<PlaylistItemsAddSpotifyplus>> | undefined,
    void
  >;

  interface PlaylistItemsClearSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the playlist (e.g. 5AC9ZXA7nJ7oGWO911FuDG).
     */
    playlist_id: string;
  }

  /**
   * Removes (clears) all items from a user's playlist.
   */
  var playlistItemsClearSpotifyplus: (
    params: PlaylistItemsClearSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<PlaylistItemsClearSpotifyplus>> | undefined,
    void
  >;

  interface PlaylistItemsRemoveSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the playlist (e.g. 5AC9ZXA7nJ7oGWO911FuDG).
     */
    playlist_id: string;
    /**
     * A comma-separated list of Spotify URIs to remove; can be track or episode URIs (e.g. spotify:track:4iV5W9uYEdYUVa79Axb7Rh).  A maximum of 100 items can be specified in one request.  If nothing is specified, then the track (or episode) uri currently playing is used.
     */
    uris?: string;
    /**
     * The playlist's snapshot ID against which you want to make the changes (e.g. `MzgsMWVkNDY3MTQ5YjVjYWE0MzAyNjkyZWMyOThjNjE3YWMwOTY0ZmJjYg==`).  The API will validate that the specified items exist and make the changes, even if more recent changes have been made to the playlist.  If omitted, the current playlist is updated.
     */
    snapshot_id?: string;
  }

  /**
   * Remove one or more items from a user's playlist.
   */
  var playlistItemsRemoveSpotifyplus: (
    params: PlaylistItemsRemoveSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<PlaylistItemsRemoveSpotifyplus>> | undefined,
    void
  >;

  interface PlaylistItemsReorderSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the playlist (e.g. 5AC9ZXA7nJ7oGWO911FuDG).
     */
    playlist_id: string;
    /**
     * The position of the first item to be reordered.  This is a one-offset integer (NOT zero-offset).
     */
    range_start: number;
    /**
     * The position where the items should be inserted.  To reorder the items to the end of the playlist, simply set `insertBefore` to the position after the last item.  This is a one-offset integer (NOT zero-offset).
     */
    insert_before: number;
    /**
     * The amount of items to be reordered; defaults to 1 if not set.  The range of items to be reordered begins from the `rangeStart` position, and includes the `rangeLength` subsequent items.
     */
    range_length?: number;
    /**
     * The playlist's snapshot ID against which you want to make the changes (e.g. `MzgsMWVkNDY3MTQ5YjVjYWE0MzAyNjkyZWMyOThjNjE3YWMwOTY0ZmJjYg==`).  The API will validate that the specified items exist and make the changes, even if more recent changes have been made to the playlist.  If omitted, the current playlist is updated.
     */
    snapshot_id?: string;
  }

  /**
   * Reorder items in a user's playlist.
   */
  var playlistItemsReorderSpotifyplus: (
    params: PlaylistItemsReorderSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<PlaylistItemsReorderSpotifyplus>> | undefined,
    void
  >;

  interface PlaylistItemsReplaceSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the playlist (e.g. `3cEYpjA9oz9GiPac4AsH4n`).
     */
    playlist_id: string;
    /**
     * A comma-separated list of Spotify URIs to replace; can be track or episode URIs (e.g. `spotify:track:4iV5W9uYEdYUVa79Axb7Rh, spotify:episode:26c0zVyOv1lzfYpBXdh1zC`). A maximum of 100 items can be specified in one request.
     */
    uris?: string;
  }

  /**
   * Replace one or more items in a user's playlist. Replacing items in a playlist will overwrite its existing items. This service can also be used to clear a playlist.
   */
  var playlistItemsReplaceSpotifyplus: (
    params: PlaylistItemsReplaceSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<PlaylistItemsReplaceSpotifyplus>> | undefined,
    void
  >;

  interface RemoveAlbumFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of Spotify album id's (e.g. `6vc9OTcyd3hyzabCmsdnwE,382ObEPsp2rxGrnsizN5TX`).  A maximum of 50 id's may be specified.  If omitted, the currently playing track album uri id value is used.
     */
    ids?: string;
  }

  /**
   * Remove one or more albums from the current user's 'Your Library'.
   */
  var removeAlbumFavoritesSpotifyplus: (
    params: RemoveAlbumFavoritesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<RemoveAlbumFavoritesSpotifyplus>> | undefined,
    void
  >;

  interface RemoveAudiobookFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of Spotify audiobook id's (e.g. `3PFyizE2tGCSRLusl2Qizf,7iHfbu1YPACw6oZPAFJtqe`).  A maximum of 50 id's may be specified.  If omitted, the currently playing audiobook uri id value is used.
     */
    ids?: string;
  }

  /**
   * Remove one or more audiobooks from the current user's 'Your Library'.
   */
  var removeAudiobookFavoritesSpotifyplus: (
    params: RemoveAudiobookFavoritesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<RemoveAudiobookFavoritesSpotifyplus>> | undefined,
    void
  >;

  interface RemoveEpisodeFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of Spotify episode id's (e.g. `3F97boSWlXi8OzuhWClZHQ,1hPX5WJY6ja6yopgVPBqm4`).  A maximum of 50 id's may be specified.  If omitted, the currently playing episode uri id value is used.
     */
    ids?: string;
  }

  /**
   * Remove one or more episodes from the current user's 'Your Library'.
   */
  var removeEpisodeFavoritesSpotifyplus: (
    params: RemoveEpisodeFavoritesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<RemoveEpisodeFavoritesSpotifyplus>> | undefined,
    void
  >;

  interface RemoveShowFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of Spotify show id's (e.g. `6kAsbP8pxwaU2kPibKTuHE,4rOoJ6Egrf8K2IrywzwOMk`).  A maximum of 50 id's may be specified.  If omitted, the currently playing show uri id value is used.
     */
    ids?: string;
  }

  /**
   * Remove one or more albums from the current user's 'Your Library'.
   */
  var removeShowFavoritesSpotifyplus: (
    params: RemoveShowFavoritesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<RemoveShowFavoritesSpotifyplus>> | undefined,
    void
  >;

  interface RemoveTrackFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of Spotify track id's (e.g. `1kWUud3vY5ij5r62zxpTRy,4eoYKv2kDwJS7gRGh5q6SK`).  A maximum of 50 id's may be specified.  If omitted, the currently playing context uri id value is used.
     */
    ids?: string;
  }

  /**
   * Remove one or more tracks from the current user's 'Your Library'.
   */
  var removeTrackFavoritesSpotifyplus: (
    params: RemoveTrackFavoritesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<RemoveTrackFavoritesSpotifyplus>> | undefined,
    void
  >;

  interface SaveAlbumFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of Spotify album id's (e.g. `6vc9OTcyd3hyzabCmsdnwE,382ObEPsp2rxGrnsizN5TX`).  A maximum of 50 id's may be specified.  If omitted, the currently playing track album uri id value is used.
     */
    ids?: string;
  }

  /**
   * Save one or more albums to the current user's 'Your Library'.
   */
  var saveAlbumFavoritesSpotifyplus: (
    params: SaveAlbumFavoritesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<SaveAlbumFavoritesSpotifyplus>> | undefined,
    void
  >;

  interface SaveAudiobookFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of Spotify audiobook id's (e.g. `3PFyizE2tGCSRLusl2Qizf,7iHfbu1YPACw6oZPAFJtqe`).  A maximum of 50 id's may be specified.  If omitted, the currently playing audiobook uri id value is used.
     */
    ids?: string;
  }

  /**
   * Save one or more audiobook to the current user's 'Your Library'.
   */
  var saveAudiobookFavoritesSpotifyplus: (
    params: SaveAudiobookFavoritesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<SaveAudiobookFavoritesSpotifyplus>> | undefined,
    void
  >;

  interface SaveEpisodeFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of Spotify episode id's (e.g. `3F97boSWlXi8OzuhWClZHQ,1hPX5WJY6ja6yopgVPBqm4`).  A maximum of 50 id's may be specified.  If omitted, the currently playing episode uri id value is used.
     */
    ids?: string;
  }

  /**
   * Save one or more episodes to the current user's 'Your Library'.
   */
  var saveEpisodeFavoritesSpotifyplus: (
    params: SaveEpisodeFavoritesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<SaveEpisodeFavoritesSpotifyplus>> | undefined,
    void
  >;

  interface SaveShowFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of Spotify show id's (e.g. `6kAsbP8pxwaU2kPibKTuHE,4rOoJ6Egrf8K2IrywzwOMk`).  A maximum of 50 id's may be specified.  If omitted, the currently playing show uri id value is used.
     */
    ids?: string;
  }

  /**
   * Save one or more shows to the current user's 'Your Library'.
   */
  var saveShowFavoritesSpotifyplus: (
    params: SaveShowFavoritesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<SaveShowFavoritesSpotifyplus>> | undefined,
    void
  >;

  interface SaveTrackFavoritesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of Spotify track id's (e.g. `1kWUud3vY5ij5r62zxpTRy,4eoYKv2kDwJS7gRGh5q6SK`).  A maximum of 50 id's may be specified.  If omitted, the currently playing context uri id value is used.
     */
    ids?: string;
  }

  /**
   * Save one or more tracks to the current user's 'Your Library'.
   */
  var saveTrackFavoritesSpotifyplus: (
    params: SaveTrackFavoritesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<SaveTrackFavoritesSpotifyplus>> | undefined,
    void
  >;

  interface SearchAlbumsSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The criteria to search for.
     */
    criteria: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter.
     */
    market?: string;
    /**
     * If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'.
     */
    include_external?: string;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
  }

  /**
   * Get Spotify catalog information about Albums that match a keyword string.
   */
  var searchAlbumsSpotifyplus: (
    params: SearchAlbumsSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<SearchAlbumsSpotifyplus>> | undefined,
    void
  >;

  interface SearchArtistsSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The criteria to search for.
     */
    criteria: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter.
     */
    market?: string;
    /**
     * If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'.
     */
    include_external?: string;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
  }

  /**
   * Get Spotify catalog information about Artists that match a keyword string.
   */
  var searchArtistsSpotifyplus: (
    params: SearchArtistsSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<SearchArtistsSpotifyplus>> | undefined,
    void
  >;

  interface SearchAudiobooksSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The criteria to search for.
     */
    criteria: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter.
     */
    market?: string;
    /**
     * If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'.
     */
    include_external?: string;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
  }

  /**
   * Get Spotify catalog information about Audiobooks that match a keyword string.
   */
  var searchAudiobooksSpotifyplus: (
    params: SearchAudiobooksSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<SearchAudiobooksSpotifyplus>> | undefined,
    void
  >;

  interface SearchEpisodesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The criteria to search for.
     */
    criteria: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter.
     */
    market?: string;
    /**
     * If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'.
     */
    include_external?: string;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
  }

  /**
   * Get Spotify catalog information about Episodes that match a keyword string.
   */
  var searchEpisodesSpotifyplus: (
    params: SearchEpisodesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<SearchEpisodesSpotifyplus>> | undefined,
    void
  >;

  interface SearchPlaylistsSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The criteria to search for.
     */
    criteria: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter.
     */
    market?: string;
    /**
     * If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'.
     */
    include_external?: string;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
  }

  /**
   * Get Spotify catalog information about Playlists that match a keyword string.
   */
  var searchPlaylistsSpotifyplus: (
    params: SearchPlaylistsSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<SearchPlaylistsSpotifyplus>> | undefined,
    void
  >;

  interface SearchShowsSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The criteria to search for.
     */
    criteria: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter.
     */
    market?: string;
    /**
     * If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'.
     */
    include_external?: string;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
  }

  /**
   * Get Spotify catalog information about Shows that match a keyword string.
   */
  var searchShowsSpotifyplus: (
    params: SearchShowsSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<SearchShowsSpotifyplus>> | undefined,
    void
  >;

  interface SearchTracksSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The criteria to search for.
     */
    criteria: string;
    /**
     * The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option.
     */
    limit?: number;
    /**
     * The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item).
     */
    offset?: number;
    /**
     * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter.
     */
    market?: string;
    /**
     * If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'.
     */
    include_external?: string;
    /**
     * The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total.
     */
    limit_total?: number;
  }

  /**
   * Get Spotify catalog information about Tracks that match a keyword string.
   */
  var searchTracksSpotifyplus: (
    params: SearchTracksSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<SearchTracksSpotifyplus>> | undefined,
    void
  >;

  interface TriggerScanIntervalSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
  }

  /**
   * Triggers a scan interval sequence, which will update HA State values from content currently being played on the user's Spotify account.
   */
  var triggerScanIntervalSpotifyplus: (
    params: TriggerScanIntervalSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<TriggerScanIntervalSpotifyplus>> | undefined,
    void
  >;

  interface UnfollowArtistsSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of Spotify artist id's (e.g. `2CIMQHirSU0MQqyYHq0eOx,1IQ2e1buppatiN1bxUVkrk`).  A maximum of 50 id's may be specified.  If omitted, the currently playing track artist uri id value is used.
     */
    ids?: string;
  }

  /**
   * Remove the current user as a follower of one or more artists.
   */
  var unfollowArtistsSpotifyplus: (
    params: UnfollowArtistsSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<UnfollowArtistsSpotifyplus>> | undefined,
    void
  >;

  interface UnfollowPlaylistSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * The Spotify ID of the playlist (e.g. `3cEYpjA9oz9GiPac4AsH4n`).  If omitted, the currently playing playlist uri id value is used.
     */
    playlist_id?: string;
  }

  /**
   * Remove the current user as a follower of a playlist.
   */
  var unfollowPlaylistSpotifyplus: (
    params: UnfollowPlaylistSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<UnfollowPlaylistSpotifyplus>> | undefined,
    void
  >;

  interface UnfollowUsersSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * A comma-separated list of Spotify user IDs (e.g. `smedjan,3758dfdsfjk435hjk6k79lm0n3c4`).  A maximum of 50 IDs can be sent in one request.
     */
    ids: string;
  }

  /**
   * Remove the current user as a follower of one or more users.
   */
  var unfollowUsersSpotifyplus: (
    params: UnfollowUsersSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<UnfollowUsersSpotifyplus>> | undefined,
    void
  >;

  interface ZeroconfDeviceConnectSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify ZeroConf API service.
     */
    entity_id: string;
    /**
     * IPV4 address at which the Spotify Connect Zeroconf API can be reached on the Spotify Connect device (e.g. '192.168.1.81').
     */
    host_ipv4_address: string;
    /**
     * Port number at which the Spotify Connect Zeroconf API can be reached on the Spotify Connect device (e.g. 8200).
     */
    host_ip_port: number;
    /**
     * Spotify Connect Zeroconf API CPath property value (e.g. '/zc').
     */
    cpath: string;
    /**
     * Spotify Connect Zeroconf API version number that the device supports (e.g. '1.0').
     */
    version?: string;
    /**
     * True if the host device utilizes HTTPS Secure Sockets Layer (SSL) support; otherwise, False to utilize HTTP.  Default is False (HTTP).
     */
    use_ssl?: boolean;
    /**
     * Spotify user name to login with (e.g. 'yourusername@mail.com').  This MUST match the account name (or one of them) that was used to configure Spotify Connect on the manufacturer device. If not specified, the integration options Spotify Connect username value will be used.
     */
    username?: string;
    /**
     * Spotify Connect user password to login with. If not specified, the integration options Spotify Connect password value will be used.
     */
    password?: string;
    /**
     * Spotify Connect login id to login with (e.g. '31l77fd87g8h9j00k89f07jf87ge').  This is also known as the canonical user id value.  This MUST be the value that relates to the `username` argument. If not specified, the integration options Spotify Connect loginId value will be used.
     */
    loginid?: string;
    /**
     * True if a Disconnect should be made prior to the Connect call.  This will ensure that the active user is logged out, which must be done if switching user accounts; otherwise, False to not issue a Disconnect call.  Default is False.
     */
    pre_disconnect?: boolean;
    /**
     * True to ensure that the device id is present in the Spotify Connect device list before issuing a call to Connect; Connect will not be called if the device id is already in the list; otherwise, False to always call Connect to add the device.  Default is False.
     */
    verify_device_list_entry?: boolean;
    /**
     * Time delay (in seconds) to wait AFTER issuing a command to the device. This delay will give the spotify zeroconf api time to process the change before another command is issued. Default is 0.50; value range is 0 - 10.
     */
    delay?: number;
  }

  /**
   * Calls the `addUser` Spotify Zeroconf API endpoint to issue a call to SpConnectionLoginBlob.  If successful, the associated device id is added to the Spotify Connect active device list for the specified user account.  This will also issue a `resetUsers` call prior to the `addUser` call.
   */
  var zeroconfDeviceConnectSpotifyplus: (
    params: ZeroconfDeviceConnectSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<ZeroconfDeviceConnectSpotifyplus>> | undefined,
    void
  >;

  interface ZeroconfDeviceDisconnectSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify ZeroConf API service.
     */
    entity_id: string;
    /**
     * IPV4 address at which the Spotify Connect Zeroconf API can be reached on the Spotify Connect device (e.g. '192.168.1.81').
     */
    host_ipv4_address: string;
    /**
     * Port number at which the Spotify Connect Zeroconf API can be reached on the Spotify Connect device (e.g. 8200).
     */
    host_ip_port: number;
    /**
     * Spotify Connect Zeroconf API CPath property value (e.g. '/zc').
     */
    cpath: string;
    /**
     * Spotify Connect Zeroconf API version number that the device supports (e.g. '1.0').
     */
    version?: string;
    /**
     * True if the host device utilizes HTTPS Secure Sockets Layer (SSL) support; otherwise, False to utilize HTTP.  Default is False (HTTP).
     */
    use_ssl?: boolean;
    /**
     * Time delay (in seconds) to wait AFTER issuing a command to the device. This delay will give the spotify zeroconf api time to process the change before another command is issued. Default is 0.50; value range is 0 - 10.
     */
    delay?: number;
  }

  /**
   * Calls the `resetUsers` Spotify Zeroconf API endpoint to issue a call to SpConnectionLogout. The currently logged in user (if any) will be logged out of Spotify Connect, and the device id removed from the active Spotify Connect device list.
   */
  var zeroconfDeviceDisconnectSpotifyplus: (
    params: ZeroconfDeviceDisconnectSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<ZeroconfDeviceDisconnectSpotifyplus>> | undefined,
    void
  >;

  interface ZeroconfDeviceGetinfoSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify ZeroConf API service.
     */
    entity_id: string;
    /**
     * IPV4 address at which the Spotify Connect Zeroconf API can be reached on the Spotify Connect device (e.g. '192.168.1.81').
     */
    host_ipv4_address: string;
    /**
     * Port number at which the Spotify Connect Zeroconf API can be reached on the Spotify Connect device (e.g. 8200).
     */
    host_ip_port: number;
    /**
     * Spotify Connect Zeroconf API CPath property value (e.g. '/zc').
     */
    cpath: string;
    /**
     * Spotify Connect Zeroconf API version number that the device supports (e.g. '1.0').
     */
    version?: string;
    /**
     * True if the host device utilizes HTTPS Secure Sockets Layer (SSL) support; otherwise, False to utilize HTTP.  Default is False (HTTP).
     */
    use_ssl?: boolean;
  }

  /**
   * Calls the `getInfo` Spotify Zeroconf API endpoint to return information about the device.
   */
  var zeroconfDeviceGetinfoSpotifyplus: (
    params: ZeroconfDeviceGetinfoSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<ZeroconfDeviceGetinfoSpotifyplus>> | undefined,
    void
  >;

  interface ZeroconfDiscoverDevicesSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the ZeroConf service.
     */
    entity_id: string;
    /**
     * Maximum amount of time to wait (in seconds) for the discovery to complete. Default is 5, range is 1 thru 10.
     */
    timeout?: number;
  }

  /**
   * Discover Spotify Connect devices on the local network via the ZeroConf (aka MDNS) service, and return details about each device.
   */
  var zeroconfDiscoverDevicesSpotifyplus: (
    params: ZeroconfDiscoverDevicesSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<ZeroconfDiscoverDevicesSpotifyplus>> | undefined,
    void
  >;

  interface TestTokenExpireSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
  }

  /**
   * Forces Spotify Authorization token to expire within 10 seconds; used to test token refresh processing.
   */
  var testTokenExpireSpotifyplus: (
    params: TestTokenExpireSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<TestTokenExpireSpotifyplus>> | undefined,
    void
  >;

  interface VolumeSetStepSpotifyplus {
    /**
     * Entity ID of the SpotifyPlus device that will make the request to the Spotify Web API.
     */
    entity_id: string;
    /**
     * Level percentage to adjust the volume by. Default is 0.10 (e.g. 10 percent), range is 0.01 to 1.00 (e.g. 1 to 100 percent).
     */
    level?: number;
  }

  /**
   * Set level used for volume step services.
   */
  var volumeSetStepSpotifyplus: (
    params: VolumeSetStepSpotifyplus,
  ) => Block<
    Partial<ServiceCallArgs<VolumeSetStepSpotifyplus>> | undefined,
    void
  >;
}

globalThis.addPlayerQueueItemsSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.add_player_queue_items`,
    params: {
      domain: 'spotifyplus',
      service: 'add_player_queue_items',
      service_data: params,
    },
  });

globalThis.checkAlbumFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.check_album_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'check_album_favorites',
      service_data: params,
    },
  });

globalThis.checkArtistsFollowingSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.check_artists_following`,
    params: {
      domain: 'spotifyplus',
      service: 'check_artists_following',
      service_data: params,
    },
  });

globalThis.checkAudiobookFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.check_audiobook_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'check_audiobook_favorites',
      service_data: params,
    },
  });

globalThis.checkEpisodeFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.check_episode_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'check_episode_favorites',
      service_data: params,
    },
  });

globalThis.checkPlaylistFollowersSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.check_playlist_followers`,
    params: {
      domain: 'spotifyplus',
      service: 'check_playlist_followers',
      service_data: params,
    },
  });

globalThis.checkShowFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.check_show_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'check_show_favorites',
      service_data: params,
    },
  });

globalThis.checkTrackFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.check_track_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'check_track_favorites',
      service_data: params,
    },
  });

globalThis.checkUsersFollowingSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.check_users_following`,
    params: {
      domain: 'spotifyplus',
      service: 'check_users_following',
      service_data: params,
    },
  });

globalThis.followArtistsSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.follow_artists`,
    params: {
      domain: 'spotifyplus',
      service: 'follow_artists',
      service_data: params,
    },
  });

globalThis.followPlaylistSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.follow_playlist`,
    params: {
      domain: 'spotifyplus',
      service: 'follow_playlist',
      service_data: params,
    },
  });

globalThis.followUsersSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.follow_users`,
    params: {
      domain: 'spotifyplus',
      service: 'follow_users',
      service_data: params,
    },
  });

globalThis.getAlbumSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_album`,
    params: {
      domain: 'spotifyplus',
      service: 'get_album',
      service_data: params,
    },
  });

globalThis.getAlbumFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_album_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'get_album_favorites',
      service_data: params,
    },
  });

globalThis.getAlbumNewReleasesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_album_new_releases`,
    params: {
      domain: 'spotifyplus',
      service: 'get_album_new_releases',
      service_data: params,
    },
  });

globalThis.getAlbumTracksSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_album_tracks`,
    params: {
      domain: 'spotifyplus',
      service: 'get_album_tracks',
      service_data: params,
    },
  });

globalThis.getArtistSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_artist`,
    params: {
      domain: 'spotifyplus',
      service: 'get_artist',
      service_data: params,
    },
  });

globalThis.getArtistAlbumsSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_artist_albums`,
    params: {
      domain: 'spotifyplus',
      service: 'get_artist_albums',
      service_data: params,
    },
  });

globalThis.getArtistInfoSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_artist_info`,
    params: {
      domain: 'spotifyplus',
      service: 'get_artist_info',
      service_data: params,
    },
  });

globalThis.getArtistRelatedArtistsSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_artist_related_artists`,
    params: {
      domain: 'spotifyplus',
      service: 'get_artist_related_artists',
      service_data: params,
    },
  });

globalThis.getArtistTopTracksSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_artist_top_tracks`,
    params: {
      domain: 'spotifyplus',
      service: 'get_artist_top_tracks',
      service_data: params,
    },
  });

globalThis.getArtistsFollowedSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_artists_followed`,
    params: {
      domain: 'spotifyplus',
      service: 'get_artists_followed',
      service_data: params,
    },
  });

globalThis.getAudiobookSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_audiobook`,
    params: {
      domain: 'spotifyplus',
      service: 'get_audiobook',
      service_data: params,
    },
  });

globalThis.getAudiobookChaptersSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_audiobook_chapters`,
    params: {
      domain: 'spotifyplus',
      service: 'get_audiobook_chapters',
      service_data: params,
    },
  });

globalThis.getAudiobookFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_audiobook_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'get_audiobook_favorites',
      service_data: params,
    },
  });

globalThis.getBrowseCategorysListSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_browse_categorys_list`,
    params: {
      domain: 'spotifyplus',
      service: 'get_browse_categorys_list',
      service_data: params,
    },
  });

globalThis.getCategoryPlaylistsSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_category_playlists`,
    params: {
      domain: 'spotifyplus',
      service: 'get_category_playlists',
      service_data: params,
    },
  });

globalThis.getChapterSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_chapter`,
    params: {
      domain: 'spotifyplus',
      service: 'get_chapter',
      service_data: params,
    },
  });

globalThis.getCoverImageFileSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_cover_image_file`,
    params: {
      domain: 'spotifyplus',
      service: 'get_cover_image_file',
      service_data: params,
    },
  });

globalThis.getEpisodeSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_episode`,
    params: {
      domain: 'spotifyplus',
      service: 'get_episode',
      service_data: params,
    },
  });

globalThis.getEpisodeFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_episode_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'get_episode_favorites',
      service_data: params,
    },
  });

globalThis.getFeaturedPlaylistsSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_featured_playlists`,
    params: {
      domain: 'spotifyplus',
      service: 'get_featured_playlists',
      service_data: params,
    },
  });

globalThis.getImageVibrantColorsSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_image_vibrant_colors`,
    params: {
      domain: 'spotifyplus',
      service: 'get_image_vibrant_colors',
      service_data: params,
    },
  });

globalThis.getPlayerDevicesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_player_devices`,
    params: {
      domain: 'spotifyplus',
      service: 'get_player_devices',
      service_data: params,
    },
  });

globalThis.getPlayerPlaybackStateSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_player_playback_state`,
    params: {
      domain: 'spotifyplus',
      service: 'get_player_playback_state',
      service_data: params,
    },
  });

globalThis.getPlayerNowPlayingSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_player_now_playing`,
    params: {
      domain: 'spotifyplus',
      service: 'get_player_now_playing',
      service_data: params,
    },
  });

globalThis.getPlayerQueueInfoSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_player_queue_info`,
    params: {
      domain: 'spotifyplus',
      service: 'get_player_queue_info',
      service_data: params,
    },
  });

globalThis.getPlayerRecentTracksSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_player_recent_tracks`,
    params: {
      domain: 'spotifyplus',
      service: 'get_player_recent_tracks',
      service_data: params,
    },
  });

globalThis.getPlaylistSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_playlist`,
    params: {
      domain: 'spotifyplus',
      service: 'get_playlist',
      service_data: params,
    },
  });

globalThis.getPlaylistCoverImageSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_playlist_cover_image`,
    params: {
      domain: 'spotifyplus',
      service: 'get_playlist_cover_image',
      service_data: params,
    },
  });

globalThis.getPlaylistFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_playlist_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'get_playlist_favorites',
      service_data: params,
    },
  });

globalThis.getPlaylistItemsSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_playlist_items`,
    params: {
      domain: 'spotifyplus',
      service: 'get_playlist_items',
      service_data: params,
    },
  });

globalThis.getPlaylistsForUserSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_playlists_for_user`,
    params: {
      domain: 'spotifyplus',
      service: 'get_playlists_for_user',
      service_data: params,
    },
  });

globalThis.getShowSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_show`,
    params: {
      domain: 'spotifyplus',
      service: 'get_show',
      service_data: params,
    },
  });

globalThis.getShowEpisodesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_show_episodes`,
    params: {
      domain: 'spotifyplus',
      service: 'get_show_episodes',
      service_data: params,
    },
  });

globalThis.getShowFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_show_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'get_show_favorites',
      service_data: params,
    },
  });

globalThis.getSpotifyConnectDeviceSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_spotify_connect_device`,
    params: {
      domain: 'spotifyplus',
      service: 'get_spotify_connect_device',
      service_data: params,
    },
  });

globalThis.getSpotifyConnectDevicesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_spotify_connect_devices`,
    params: {
      domain: 'spotifyplus',
      service: 'get_spotify_connect_devices',
      service_data: params,
    },
  });

globalThis.getTrackSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_track`,
    params: {
      domain: 'spotifyplus',
      service: 'get_track',
      service_data: params,
    },
  });

globalThis.getTrackAudioFeaturesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_track_audio_features`,
    params: {
      domain: 'spotifyplus',
      service: 'get_track_audio_features',
      service_data: params,
    },
  });

globalThis.getTrackFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_track_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'get_track_favorites',
      service_data: params,
    },
  });

globalThis.getTrackRecommendationsSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_track_recommendations`,
    params: {
      domain: 'spotifyplus',
      service: 'get_track_recommendations',
      service_data: params,
    },
  });

globalThis.getTracksAudioFeaturesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_tracks_audio_features`,
    params: {
      domain: 'spotifyplus',
      service: 'get_tracks_audio_features',
      service_data: params,
    },
  });

globalThis.getUsersTopArtistsSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_users_top_artists`,
    params: {
      domain: 'spotifyplus',
      service: 'get_users_top_artists',
      service_data: params,
    },
  });

globalThis.getUsersTopTracksSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.get_users_top_tracks`,
    params: {
      domain: 'spotifyplus',
      service: 'get_users_top_tracks',
      service_data: params,
    },
  });

globalThis.playerMediaPauseSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.player_media_pause`,
    params: {
      domain: 'spotifyplus',
      service: 'player_media_pause',
      service_data: params,
    },
  });

globalThis.playerMediaPlayContextSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.player_media_play_context`,
    params: {
      domain: 'spotifyplus',
      service: 'player_media_play_context',
      service_data: params,
    },
  });

globalThis.playerMediaPlayTrackFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.player_media_play_track_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'player_media_play_track_favorites',
      service_data: params,
    },
  });

globalThis.playerMediaPlayTracksSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.player_media_play_tracks`,
    params: {
      domain: 'spotifyplus',
      service: 'player_media_play_tracks',
      service_data: params,
    },
  });

globalThis.playerMediaResumeSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.player_media_resume`,
    params: {
      domain: 'spotifyplus',
      service: 'player_media_resume',
      service_data: params,
    },
  });

globalThis.playerMediaSeekSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.player_media_seek`,
    params: {
      domain: 'spotifyplus',
      service: 'player_media_seek',
      service_data: params,
    },
  });

globalThis.playerMediaSkipNextSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.player_media_skip_next`,
    params: {
      domain: 'spotifyplus',
      service: 'player_media_skip_next',
      service_data: params,
    },
  });

globalThis.playerMediaSkipPreviousSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.player_media_skip_previous`,
    params: {
      domain: 'spotifyplus',
      service: 'player_media_skip_previous',
      service_data: params,
    },
  });

globalThis.playerSetRepeatModeSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.player_set_repeat_mode`,
    params: {
      domain: 'spotifyplus',
      service: 'player_set_repeat_mode',
      service_data: params,
    },
  });

globalThis.playerSetShuffleModeSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.player_set_shuffle_mode`,
    params: {
      domain: 'spotifyplus',
      service: 'player_set_shuffle_mode',
      service_data: params,
    },
  });

globalThis.playerSetVolumeLevelSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.player_set_volume_level`,
    params: {
      domain: 'spotifyplus',
      service: 'player_set_volume_level',
      service_data: params,
    },
  });

globalThis.playerTransferPlaybackSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.player_transfer_playback`,
    params: {
      domain: 'spotifyplus',
      service: 'player_transfer_playback',
      service_data: params,
    },
  });

globalThis.playlistCoverImageAddSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.playlist_cover_image_add`,
    params: {
      domain: 'spotifyplus',
      service: 'playlist_cover_image_add',
      service_data: params,
    },
  });

globalThis.playlistChangeSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.playlist_change`,
    params: {
      domain: 'spotifyplus',
      service: 'playlist_change',
      service_data: params,
    },
  });

globalThis.playlistCreateSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.playlist_create`,
    params: {
      domain: 'spotifyplus',
      service: 'playlist_create',
      service_data: params,
    },
  });

globalThis.playlistItemsAddSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.playlist_items_add`,
    params: {
      domain: 'spotifyplus',
      service: 'playlist_items_add',
      service_data: params,
    },
  });

globalThis.playlistItemsClearSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.playlist_items_clear`,
    params: {
      domain: 'spotifyplus',
      service: 'playlist_items_clear',
      service_data: params,
    },
  });

globalThis.playlistItemsRemoveSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.playlist_items_remove`,
    params: {
      domain: 'spotifyplus',
      service: 'playlist_items_remove',
      service_data: params,
    },
  });

globalThis.playlistItemsReorderSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.playlist_items_reorder`,
    params: {
      domain: 'spotifyplus',
      service: 'playlist_items_reorder',
      service_data: params,
    },
  });

globalThis.playlistItemsReplaceSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.playlist_items_replace`,
    params: {
      domain: 'spotifyplus',
      service: 'playlist_items_replace',
      service_data: params,
    },
  });

globalThis.removeAlbumFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.remove_album_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'remove_album_favorites',
      service_data: params,
    },
  });

globalThis.removeAudiobookFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.remove_audiobook_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'remove_audiobook_favorites',
      service_data: params,
    },
  });

globalThis.removeEpisodeFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.remove_episode_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'remove_episode_favorites',
      service_data: params,
    },
  });

globalThis.removeShowFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.remove_show_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'remove_show_favorites',
      service_data: params,
    },
  });

globalThis.removeTrackFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.remove_track_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'remove_track_favorites',
      service_data: params,
    },
  });

globalThis.saveAlbumFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.save_album_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'save_album_favorites',
      service_data: params,
    },
  });

globalThis.saveAudiobookFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.save_audiobook_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'save_audiobook_favorites',
      service_data: params,
    },
  });

globalThis.saveEpisodeFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.save_episode_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'save_episode_favorites',
      service_data: params,
    },
  });

globalThis.saveShowFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.save_show_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'save_show_favorites',
      service_data: params,
    },
  });

globalThis.saveTrackFavoritesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.save_track_favorites`,
    params: {
      domain: 'spotifyplus',
      service: 'save_track_favorites',
      service_data: params,
    },
  });

globalThis.searchAlbumsSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.search_albums`,
    params: {
      domain: 'spotifyplus',
      service: 'search_albums',
      service_data: params,
    },
  });

globalThis.searchArtistsSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.search_artists`,
    params: {
      domain: 'spotifyplus',
      service: 'search_artists',
      service_data: params,
    },
  });

globalThis.searchAudiobooksSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.search_audiobooks`,
    params: {
      domain: 'spotifyplus',
      service: 'search_audiobooks',
      service_data: params,
    },
  });

globalThis.searchEpisodesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.search_episodes`,
    params: {
      domain: 'spotifyplus',
      service: 'search_episodes',
      service_data: params,
    },
  });

globalThis.searchPlaylistsSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.search_playlists`,
    params: {
      domain: 'spotifyplus',
      service: 'search_playlists',
      service_data: params,
    },
  });

globalThis.searchShowsSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.search_shows`,
    params: {
      domain: 'spotifyplus',
      service: 'search_shows',
      service_data: params,
    },
  });

globalThis.searchTracksSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.search_tracks`,
    params: {
      domain: 'spotifyplus',
      service: 'search_tracks',
      service_data: params,
    },
  });

globalThis.triggerScanIntervalSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.trigger_scan_interval`,
    params: {
      domain: 'spotifyplus',
      service: 'trigger_scan_interval',
      service_data: params,
    },
  });

globalThis.unfollowArtistsSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.unfollow_artists`,
    params: {
      domain: 'spotifyplus',
      service: 'unfollow_artists',
      service_data: params,
    },
  });

globalThis.unfollowPlaylistSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.unfollow_playlist`,
    params: {
      domain: 'spotifyplus',
      service: 'unfollow_playlist',
      service_data: params,
    },
  });

globalThis.unfollowUsersSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.unfollow_users`,
    params: {
      domain: 'spotifyplus',
      service: 'unfollow_users',
      service_data: params,
    },
  });

globalThis.zeroconfDeviceConnectSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.zeroconf_device_connect`,
    params: {
      domain: 'spotifyplus',
      service: 'zeroconf_device_connect',
      service_data: params,
    },
  });

globalThis.zeroconfDeviceDisconnectSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.zeroconf_device_disconnect`,
    params: {
      domain: 'spotifyplus',
      service: 'zeroconf_device_disconnect',
      service_data: params,
    },
  });

globalThis.zeroconfDeviceGetinfoSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.zeroconf_device_getinfo`,
    params: {
      domain: 'spotifyplus',
      service: 'zeroconf_device_getinfo',
      service_data: params,
    },
  });

globalThis.zeroconfDiscoverDevicesSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.zeroconf_discover_devices`,
    params: {
      domain: 'spotifyplus',
      service: 'zeroconf_discover_devices',
      service_data: params,
    },
  });

globalThis.testTokenExpireSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.test_token_expire`,
    params: {
      domain: 'spotifyplus',
      service: 'test_token_expire',
      service_data: params,
    },
  });

globalThis.volumeSetStepSpotifyplus = (params) =>
  serviceCall({
    name: `Call spotifyplus.volume_set_step`,
    params: {
      domain: 'spotifyplus',
      service: 'volume_set_step',
      service_data: params,
    },
  });
