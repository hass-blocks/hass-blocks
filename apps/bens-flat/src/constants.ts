import { entity } from '@hass-blocks/core';

export const entities = {
  me: entity('person.ben_wainwright'),
  livingRoomMotionSensor: entity('switch.living_room_motion_sensor'),
  bedroomMotionSensor: entity('switch.bedroom_motion_sensor'),
  livingRoomBlinds: entity('cover.living_room_blinds'),
  livingRoomLights: entity('light.living_room'),
  bathroomLights: entity('light.main_bathroom'),
  bedroomLights: entity('light.bedroom'),
  hallwayLights: entity('light.hallway'),
  blindsDefaultOpen: entity('switch.living_room_blinds_default_to_open'),
  bedroomSpeaker: entity('media_player.bedroom_speaker'),
  bathroomMotionSensor: entity('switch.bathroom_motion_sensor'),
  hallwayMotionSensor: entity('switch.hallway_motion_sensor'),
  livingRoomSpeaker: entity('media_player.sonos_arc_ultra'),
  sleepMode: entity('switch.sleep_mode'),
  tv: entity('media_player.lg_webos_tv'),
  tvMode: entity('switch.tvMode'),
  visitorMode: entity('switch.visitor_mode'),
  allSpeakers: entity(
    'media_player.bedroom_speaker',
    'media_player.sonos_arc_ultra',
  ),
  appleTv: entity('media_player.bens_apple_tv'),
  homeMode: entity('switch.home_mode'),
};
