import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * LG WebOS TV
   */
  var lgWebosTvMediaPlayer: IEntity<`media_player.lg_webos_tv`>;
  /**
   * Bedroom Speaker
   */
  var bedroomSpeaker_3MediaPlayer: IEntity<`media_player.bedroom_speaker_3`>;
  /**
   * Living Room
   */
  var unnamedRoom_2MediaPlayer: IEntity<`media_player.unnamed_room_2`>;
  /**
   * Bens Apple TV
   */
  var bensAppleTvMediaPlayer: IEntity<`media_player.bens_apple_tv`>;
  /**
   * XBOX
   */
  var xboxMediaPlayer: IEntity<`media_player.xbox`>;
  /**
   * Playstation PS5 Console
   */
  var wearingClapper2Ps5ConsoleMediaPlayer: IEntity<`media_player.wearing_clapper2_ps5_console`>;
  /**
   * Spotify Ben Wainwright
   */
  var spotifyBenWainwrightMediaPlayer: IEntity<`media_player.spotify_ben_wainwright`>;
  /**
   * Sonos Arc Ultra
   */
  var sonosArcUltraMediaPlayer: IEntity<`media_player.sonos_arc_ultra`>;
  /**
   * Bedroom Speaker
   */
  var bedroomSpeakerMediaPlayer: IEntity<`media_player.bedroom_speaker`>;
  /**
   * SpotifyPlus Ben Wainwright
   */
  var spotifyplusBenWainwrightMediaPlayer: IEntity<`media_player.spotifyplus_ben_wainwright`>;
  /**
   * Bedroom Sonos One
   */
  var bedroomSonosOneMediaPlayer: IEntity<`media_player.bedroom_sonos_one`>;
  /**
   * Bedroom Speaker
   */
  var bedroomSpeaker_2MediaPlayer: IEntity<`media_player.bedroom_speaker_2`>;
  /**
   * Office
   */
  var office_2MediaPlayer: IEntity<`media_player.office_2`>;
  /**
   * Gym Sonos One
   */
  var benS_2ndSonosOneSecondEditionMediaPlayer: IEntity<`media_player.ben_s_2nd_sonos_one_second_edition`>;
  /**
   * Living Room Sonos One
   */
  var livingRoomSonosOneMediaPlayer: IEntity<`media_player.living_room_sonos_one`>;
  /**
   * Living Room
   */
  var livingRoomMediaPlayer: IEntity<`media_player.living_room`>;
  /**
   * Sonos Arc Ultra
   */
  var sonosArcUltra_2MediaPlayer: IEntity<`media_player.sonos_arc_ultra_2`>;
  /**
   * Living Room Sonos
   */
  var livingRoomSonosMediaPlayer: IEntity<`media_player.living_room_sonos`>;
  /**
   * This Device
   */
  var thisDevice_2MediaPlayer: IEntity<`media_player.this_device_2`>;
  var officeMediaPlayer: IEntity<`media_player.office`>;
  var livingRoom_2MediaPlayer: IEntity<`media_player.living_room_2`>;
  var era_100MediaPlayer: IEntity<`media_player.era_100`>;
  var era_100_2MediaPlayer: IEntity<`media_player.era_100_2`>;
  var thisDeviceMediaPlayer: IEntity<`media_player.this_device`>;
}

globalThis.lgWebosTvMediaPlayer = entity(
  'media_player.lg_webos_tv',
  'LG WebOS TV',
);
globalThis.bedroomSpeaker_3MediaPlayer = entity(
  'media_player.bedroom_speaker_3',
  'Bedroom Speaker',
);
globalThis.unnamedRoom_2MediaPlayer = entity(
  'media_player.unnamed_room_2',
  'Living Room',
);
globalThis.bensAppleTvMediaPlayer = entity(
  'media_player.bens_apple_tv',
  'Bens Apple TV',
);
globalThis.xboxMediaPlayer = entity('media_player.xbox', 'XBOX');
globalThis.wearingClapper2Ps5ConsoleMediaPlayer = entity(
  'media_player.wearing_clapper2_ps5_console',
  'Playstation PS5 Console',
);
globalThis.spotifyBenWainwrightMediaPlayer = entity(
  'media_player.spotify_ben_wainwright',
  'Spotify Ben Wainwright',
);
globalThis.sonosArcUltraMediaPlayer = entity(
  'media_player.sonos_arc_ultra',
  'Sonos Arc Ultra',
);
globalThis.bedroomSpeakerMediaPlayer = entity(
  'media_player.bedroom_speaker',
  'Bedroom Speaker',
);
globalThis.spotifyplusBenWainwrightMediaPlayer = entity(
  'media_player.spotifyplus_ben_wainwright',
  'SpotifyPlus Ben Wainwright',
);
globalThis.bedroomSonosOneMediaPlayer = entity(
  'media_player.bedroom_sonos_one',
  'Bedroom Sonos One',
);
globalThis.bedroomSpeaker_2MediaPlayer = entity(
  'media_player.bedroom_speaker_2',
  'Bedroom Speaker',
);
globalThis.office_2MediaPlayer = entity('media_player.office_2', 'Office');
globalThis.benS_2ndSonosOneSecondEditionMediaPlayer = entity(
  'media_player.ben_s_2nd_sonos_one_second_edition',
  'Gym Sonos One',
);
globalThis.livingRoomSonosOneMediaPlayer = entity(
  'media_player.living_room_sonos_one',
  'Living Room Sonos One',
);
globalThis.livingRoomMediaPlayer = entity(
  'media_player.living_room',
  'Living Room',
);
globalThis.sonosArcUltra_2MediaPlayer = entity(
  'media_player.sonos_arc_ultra_2',
  'Sonos Arc Ultra',
);
globalThis.livingRoomSonosMediaPlayer = entity(
  'media_player.living_room_sonos',
  'Living Room Sonos',
);
globalThis.thisDevice_2MediaPlayer = entity(
  'media_player.this_device_2',
  'This Device',
);
globalThis.officeMediaPlayer = entity('media_player.office');
globalThis.livingRoom_2MediaPlayer = entity('media_player.living_room_2');
globalThis.era_100MediaPlayer = entity('media_player.era_100');
globalThis.era_100_2MediaPlayer = entity('media_player.era_100_2');
globalThis.thisDeviceMediaPlayer = entity('media_player.this_device');
