import '@blocks-codegen';

import { combine, toggle } from '@hass-blocks/core';

export const toggleSleepMode = toggle({
  create: true,
  id: 'switch.toggle_sleep_mode',
  friendlyName: 'Sleep Mode',
});

export const livingRoomMotionLights = toggle({
  create: true,
  id: 'switch.living_room_motion_lights',
  friendlyName: 'Living Room Motion Lights',
});

export const bathroomMotionLights = toggle({
  create: true,
  id: 'switch.bathroom_motion_lights',
  friendlyName: 'Bathroom Motion Lights',
});

export const hallwayMotionLights = toggle({
  create: true,
  id: 'switch.hallway_motion_lights',
  friendlyName: 'Bathroom Motion Lights',
});

export const bedroomMotionLights = toggle({
  create: true,
  id: 'switch.bedroom_motion_lights',
  friendlyName: 'Bedroom Motion Lights',
});

export const allLights = combine(
  hallwayLight,
  bedroomLight,
  livingRoomLight,
  mainBathroomLight,
);

export const allAdaptiveLightingSwitches = combine(
  adaptiveLightingBedroom,
  adaptiveLightingLivingRoom,
  adaptiveLightingBathroom,
  adaptiveLightingHallway,
);

export const allAdaptiveLightingSleepModeSwitches = combine(
  adaptiveLightingSleepModeBedroom,
  adaptiveLightingSleepModeHallway,
  adaptiveLightingSleepModeBathroom,
  adaptiveLightingSleepModeLivingRoom,
);

export const allSpeakers = combine(sonosArcUltra, bedroomSpeaker);

export const allHeatingAndBoilerSwitches = combine(
  boiler,
  bedroomHeatingSwitch,
  boilerBoost,
  gymHeatingSwitch,
  livingRoomHeatingSwitch,
);
