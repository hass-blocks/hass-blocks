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
  adaptiveLightingBedroomSwitch,
  adaptiveLightingLivingRoomSwitch,
  adaptiveLightingBathroomSwitch,
  adaptiveLightingHallwaySwitch,
);

export const allAdaptiveLightingSleepModeSwitches = combine(
  adaptiveLightingSleepModeBedroomSwitch,
  adaptiveLightingSleepModeHallwaySwitch,
  adaptiveLightingSleepModeBathroomSwitch,
  adaptiveLightingSleepModeLivingRoomSwitch,
);

export const allSpeakers = combine(
  sonosArcUltraMediaPlayer,
  bedroomSpeakerMediaPlayer,
);

export const allHeatingAndBoilerSwitches = combine(
  boilerSwitch,
  bedroomHeatingSwitchSwitch,
  boilerBoostSwitch,
  gymHeatingSwitchSwitch,
  livingRoomHeatingSwitchSwitch,
);
