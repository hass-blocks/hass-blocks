import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * LG WebOS TV
   */
  var lgWebosTv: IEntity<`media_player.lg_webos_tv`>;
  /**
   * Bedroom Speaker
   */
  var bedroomSpeaker_3: IEntity<`media_player.bedroom_speaker_3`>;
  /**
   * Living Room
   */
  var unnamedRoom_2: IEntity<`media_player.unnamed_room_2`>;
  /**
   * Bens Apple TV
   */
  var bensAppleTv: IEntity<`media_player.bens_apple_tv`>;
  /**
   * XBOX
   */
  var xbox: IEntity<`media_player.xbox`>;
  /**
   * Playstation PS5 Console
   */
  var wearingClapper2Ps5Console: IEntity<`media_player.wearing_clapper2_ps5_console`>;
  /**
   * Spotify Ben Wainwright
   */
  var spotifyBenWainwright: IEntity<`media_player.spotify_ben_wainwright`>;
  /**
   * Sonos Arc Ultra
   */
  var sonosArcUltra: IEntity<`media_player.sonos_arc_ultra`>;
  /**
   * Bedroom Speaker
   */
  var bedroomSpeaker: IEntity<`media_player.bedroom_speaker`>;
  /**
   * SpotifyPlus Ben Wainwright
   */
  var spotifyplusBenWainwright: IEntity<`media_player.spotifyplus_ben_wainwright`>;
  /**
   * Bedroom Sonos One
   */
  var bedroomSonosOne: IEntity<`media_player.bedroom_sonos_one`>;
  /**
   * Bedroom Speaker
   */
  var bedroomSpeaker_2: IEntity<`media_player.bedroom_speaker_2`>;
  /**
   * Office
   */
  var office_2: IEntity<`media_player.office_2`>;
  /**
   * Gym Sonos One
   */
  var benS_2ndSonosOneSecondEdition: IEntity<`media_player.ben_s_2nd_sonos_one_second_edition`>;
  /**
   * Living Room Sonos One
   */
  var livingRoomSonosOne: IEntity<`media_player.living_room_sonos_one`>;
  /**
   * Living Room
   */
  var livingRoom1: IEntity<`media_player.living_room`>;
  /**
   * Sonos Arc Ultra
   */
  var sonosArcUltra_2: IEntity<`media_player.sonos_arc_ultra_2`>;
  /**
   * Living Room Sonos
   */
  var livingRoomSonos: IEntity<`media_player.living_room_sonos`>;
  /**
   * This Device
   */
  var thisDevice_2: IEntity<`media_player.this_device_2`>;
  var office: IEntity<`media_player.office`>;
  var livingRoom_2: IEntity<`media_player.living_room_2`>;
  var era_100: IEntity<`media_player.era_100`>;
  var era_100_2: IEntity<`media_player.era_100_2`>;
  var thisDevice: IEntity<`media_player.this_device`>;
}

globalThis.lgWebosTv = entity('media_player.lg_webos_tv', 'LG WebOS TV');
globalThis.bedroomSpeaker_3 = entity(
  'media_player.bedroom_speaker_3',
  'Bedroom Speaker',
);
globalThis.unnamedRoom_2 = entity('media_player.unnamed_room_2', 'Living Room');
globalThis.bensAppleTv = entity('media_player.bens_apple_tv', 'Bens Apple TV');
globalThis.xbox = entity('media_player.xbox', 'XBOX');
globalThis.wearingClapper2Ps5Console = entity(
  'media_player.wearing_clapper2_ps5_console',
  'Playstation PS5 Console',
);
globalThis.spotifyBenWainwright = entity(
  'media_player.spotify_ben_wainwright',
  'Spotify Ben Wainwright',
);
globalThis.sonosArcUltra = entity(
  'media_player.sonos_arc_ultra',
  'Sonos Arc Ultra',
);
globalThis.bedroomSpeaker = entity(
  'media_player.bedroom_speaker',
  'Bedroom Speaker',
);
globalThis.spotifyplusBenWainwright = entity(
  'media_player.spotifyplus_ben_wainwright',
  'SpotifyPlus Ben Wainwright',
);
globalThis.bedroomSonosOne = entity(
  'media_player.bedroom_sonos_one',
  'Bedroom Sonos One',
);
globalThis.bedroomSpeaker_2 = entity(
  'media_player.bedroom_speaker_2',
  'Bedroom Speaker',
);
globalThis.office_2 = entity('media_player.office_2', 'Office');
globalThis.benS_2ndSonosOneSecondEdition = entity(
  'media_player.ben_s_2nd_sonos_one_second_edition',
  'Gym Sonos One',
);
globalThis.livingRoomSonosOne = entity(
  'media_player.living_room_sonos_one',
  'Living Room Sonos One',
);
globalThis.livingRoom1 = entity('media_player.living_room', 'Living Room');
globalThis.sonosArcUltra_2 = entity(
  'media_player.sonos_arc_ultra_2',
  'Sonos Arc Ultra',
);
globalThis.livingRoomSonos = entity(
  'media_player.living_room_sonos',
  'Living Room Sonos',
);
globalThis.thisDevice_2 = entity('media_player.this_device_2', 'This Device');
globalThis.office = entity('media_player.office');
globalThis.livingRoom_2 = entity('media_player.living_room_2');
globalThis.era_100 = entity('media_player.era_100');
globalThis.era_100_2 = entity('media_player.era_100_2');
globalThis.thisDevice = entity('media_player.this_device');
