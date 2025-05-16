import { combine, aSwitch } from '@hass-blocks/core';

export const livingRoomMotionSensor = aSwitch({
  create: true,
  id: 'switch.livingroom_motion_sensor',
  friendlyName: 'Living Room Motion Sensor',
});

import '@blocks-codegen';

export const allLights = combine(
  hallwayLight,
  bedroomLight,
  livingRoomLight,
  mainBathroomLight,
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
