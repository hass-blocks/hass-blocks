import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var lgWebosTvMediaPlayer: IEntity<`media_player.${string}`>;
  var bensAppleTvMediaPlayer: IEntity<`media_player.${string}`>;
  var xboxMediaPlayer: IEntity<`media_player.${string}`>;
  var wearingClapper2Ps5ConsoleMediaPlayer: IEntity<`media_player.${string}`>;
  var spotifyBenWainwrightMediaPlayer: IEntity<`media_player.${string}`>;
  var sonosArcUltraMediaPlayer: IEntity<`media_player.${string}`>;
  var bedroomSpeakerMediaPlayer: IEntity<`media_player.${string}`>;
  var spotifyplusBenWainwrightMediaPlayer: IEntity<`media_player.${string}`>;
  var bedroomSonosOneMediaPlayer: IEntity<`media_player.${string}`>;
  var bedroomSpeaker_2MediaPlayer: IEntity<`media_player.${string}`>;
  var office_2MediaPlayer: IEntity<`media_player.${string}`>;
  var benS_2ndSonosOneSecondEditionMediaPlayer: IEntity<`media_player.${string}`>;
  var livingRoomSonosOneMediaPlayer: IEntity<`media_player.${string}`>;
  var livingRoomMediaPlayer: IEntity<`media_player.${string}`>;
  var sonosArcUltra_2MediaPlayer: IEntity<`media_player.${string}`>;
  var livingRoomSonosMediaPlayer: IEntity<`media_player.${string}`>;
  var thisDevice_2MediaPlayer: IEntity<`media_player.${string}`>;
  var officeMediaPlayer: IEntity<`media_player.${string}`>;
  var bedroomSpeaker_3MediaPlayer: IEntity<`media_player.${string}`>;
  var livingRoom_2MediaPlayer: IEntity<`media_player.${string}`>;
  var unnamedRoom_2MediaPlayer: IEntity<`media_player.${string}`>;
  var era_100MediaPlayer: IEntity<`media_player.${string}`>;
  var era_100_2MediaPlayer: IEntity<`media_player.${string}`>;
  var thisDeviceMediaPlayer: IEntity<`media_player.${string}`>;
}

globalThis.lgWebosTvMediaPlayer = entity('media_player.lg_webos_tv');
globalThis.bensAppleTvMediaPlayer = entity('media_player.bens_apple_tv');
globalThis.xboxMediaPlayer = entity('media_player.xbox');
globalThis.wearingClapper2Ps5ConsoleMediaPlayer = entity(
  'media_player.wearing_clapper2_ps5_console',
);
globalThis.spotifyBenWainwrightMediaPlayer = entity(
  'media_player.spotify_ben_wainwright',
);
globalThis.sonosArcUltraMediaPlayer = entity('media_player.sonos_arc_ultra');
globalThis.bedroomSpeakerMediaPlayer = entity('media_player.bedroom_speaker');
globalThis.spotifyplusBenWainwrightMediaPlayer = entity(
  'media_player.spotifyplus_ben_wainwright',
);
globalThis.bedroomSonosOneMediaPlayer = entity(
  'media_player.bedroom_sonos_one',
);
globalThis.bedroomSpeaker_2MediaPlayer = entity(
  'media_player.bedroom_speaker_2',
);
globalThis.office_2MediaPlayer = entity('media_player.office_2');
globalThis.benS_2ndSonosOneSecondEditionMediaPlayer = entity(
  'media_player.ben_s_2nd_sonos_one_second_edition',
);
globalThis.livingRoomSonosOneMediaPlayer = entity(
  'media_player.living_room_sonos_one',
);
globalThis.livingRoomMediaPlayer = entity('media_player.living_room');
globalThis.sonosArcUltra_2MediaPlayer = entity(
  'media_player.sonos_arc_ultra_2',
);
globalThis.livingRoomSonosMediaPlayer = entity(
  'media_player.living_room_sonos',
);
globalThis.thisDevice_2MediaPlayer = entity('media_player.this_device_2');
globalThis.officeMediaPlayer = entity('media_player.office');
globalThis.bedroomSpeaker_3MediaPlayer = entity(
  'media_player.bedroom_speaker_3',
);
globalThis.livingRoom_2MediaPlayer = entity('media_player.living_room_2');
globalThis.unnamedRoom_2MediaPlayer = entity('media_player.unnamed_room_2');
globalThis.era_100MediaPlayer = entity('media_player.era_100');
globalThis.era_100_2MediaPlayer = entity('media_player.era_100_2');
globalThis.thisDeviceMediaPlayer = entity('media_player.this_device');
