import { combine, entity } from '@hass-blocks/core';

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
