import { entity } from '@hass-blocks/core';

export const home = entity('zone.home');

export const me = entity('person.ben.wainwright');

export const livingRoomMotionSensor = entity(
  'switch.living_room_motion_sensor',
);
export const bedroomMotionSensor = entity('switch.bedroom_motion_sensor');

export const livingRoomBlinds = entity('cover.living_room_blinds');

export const livingRoomLights = entity('light.living_room');

export const bathroomLights = entity('light.main_bathroom');

export const bedroomLights = entity('light.bedroom');

export const hallwayLights = entity('light.hallway');

export const blindsDefaultOpen = entity(
  'switch.living_room_blinds_default_to_open',
);

export const bedroomSpeaker = entity('media_player.bedroom_speaker');

export const bathroomMotionSensor = entity('switch.bathroom_motion_sensor');

export const hallwayMotionSensor = entity('switch.hallway_motion_sensor');

export const livingRoomSpeaker = entity('media_player.sonos_arc_ultra');

export const sleepMode = entity('switch.sleep_mode');

export const tv = entity('media_player.lg_webos_tv');

export const tvMode = entity('switch.tv_mode');

export const visitorMode = entity('switch.visitor_mode');

export const allSpeakers = entity(
  'media_player.bedroom_speaker',
  'media_player.sonos_arc_ultra',
);
export const appleTv = entity('media_player.bens_apple_tv');
export const homeMode = entity('switch.home_mode');
