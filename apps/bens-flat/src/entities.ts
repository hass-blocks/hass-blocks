import { combine, entity } from '@hass-blocks/core';

export const home = entity('zone.home');

export const me = entity('person.ben_wainwright');

export const livingRoomMotionSensor = entity(
  'switch.living_room_motion_sensor',
);
export const bedroomMotionSensor = entity('switch.bedroom_motion_sensor');

export const livingRoomBlinds = entity('cover.living_room_blinds');

export const livingRoomBlindsLeftWindow = entity(
  'cover.living_room_windows_left',
);

export const livingRoomBlindsLeftCentreWindow = entity(
  'cover.living_room_windows_left_centre',
);

export const livingRoomBlindsRightWindow = entity(
  'cover.living_room_windows_right',
);

export const livingRoomBlindsRightCentreWindow = entity(
  'cover.living_room_windows_right_centre',
);

export const livingRoomBlindsLeftWindowSwitch = entity(
  'switch.living_room_blinds_left_window',
);

export const livingRoomBlindsLeftCentreWindowSwitch = entity(
  'switch.living_room_blinds_left_centre_window',
);

export const livingRoomBlindsRightWindowSwitch = entity(
  'switch.living_room_blinds_right_window',
);

export const livingRoomBlindsRightCentreWindowSwitch = entity(
  'switch.living_room_blinds_right_centre_window',
);

export const livingRoomLights = entity('light.living_room');
export const bathroomLights = entity('light.main_bathroom');
export const bedroomLights = entity('light.bedroom');
export const hallwayLights = entity('light.hallway');

export const allLights = combine(
  hallwayLights,
  bedroomLights,
  livingRoomLights,
  bathroomLights,
);

export const blindsDefaultOpen = entity(
  'switch.living_room_blinds_default_to_open',
);

export const bedroomSpeaker = entity('media_player.bedroom_speaker');
export const livingRoomSpeaker = entity('media_player.sonos_arc_ultra');
export const allSpeakers = combine(livingRoomSpeaker, bedroomSpeaker);

export const bathroomMotionSensor = entity('switch.bathroom_motion_sensor');

export const hallwayMotionSensor = entity('switch.hallway_motion_sensor');

export const sleepMode = entity('switch.sleep_mode');

export const tv = entity('media_player.lg_webos_tv');

export const tvMode = entity('switch.tv_mode');

export const visitorMode = entity('switch.visitor_mode');

export const appleTv = entity('media_player.bens_apple_tv');
export const homeMode = entity('switch.home_mode');

export const boiler = entity('switch.boiler');

export const bedroomHeatingSwitch = entity('switch.bedroom_heating_switch');

export const boilerBoostSwitch = entity('switch.boiler_boost');

export const gymHeatingSwitch = entity('switch.gym_heating_switch');

export const livingRoomHeatingSwitch = entity(
  'switch.living_room_heating_switch',
);

export const allHeatingAndBoilerSwitches = combine(
  boiler,
  bedroomHeatingSwitch,
  boilerBoostSwitch,
  gymHeatingSwitch,
  livingRoomHeatingSwitch,
);
