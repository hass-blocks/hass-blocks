import { automation } from '@hass-blocks/core';
import { waitMinutes } from '@hass-blocks/blocks';
import {
  motionIsDetectedInTheBathroom,
  motionIsDetectedInTheBedroom,
  motionIsDetectedInTheHallway,
  motionIsDetectedInTheLivingRoom,
} from '../triggers/index.ts';
import {
  switchBathroomLightsOff,
  switchBathroomLightsOn,
  switchBedroomLightsOff,
  switchBedroomLightsOn,
  switchHallwayLightsOn,
  switchLivingRoomLightsOff,
  switchLivingRoomLightsOn,
} from '../actions/index.ts';

import {
  ifBathroomMotionSensorIsOn,
  ifBedroomMotionSensorIsOn,
  ifHallwayMotionSensorIsOn,
  ifLivingRoomMotionSensorIsOn,
  ifSleepModeIsOff,
  ifTvModeIsOff,
} from '../assertions/index.ts';

export const livingRoomLights = automation({
  name: 'Living room Lights',
  when: motionIsDetectedInTheLivingRoom,
  then: [
    ifLivingRoomMotionSensorIsOn,
    ifTvModeIsOff,
    switchLivingRoomLightsOn,
    waitMinutes(30),
    switchLivingRoomLightsOff,
  ],
});

export const bedroomLights = automation({
  name: 'Bedroom Lights',
  when: motionIsDetectedInTheBedroom,
  then: [
    ifSleepModeIsOff,
    ifBedroomMotionSensorIsOn,
    switchBedroomLightsOn,
    waitMinutes(10),
    switchBedroomLightsOff,
  ],
});

export const hallwayLights = automation({
  name: 'Hallway Lights',
  when: motionIsDetectedInTheHallway,
  then: [
    ifHallwayMotionSensorIsOn,
    switchHallwayLightsOn,
    waitMinutes(2),
    switchBedroomLightsOff,
  ],
});

export const bathroomLights = automation({
  name: 'Bathroom Lights',
  when: motionIsDetectedInTheBathroom,
  then: [
    ifBathroomMotionSensorIsOn,
    switchBathroomLightsOn,
    waitMinutes(10),
    switchBathroomLightsOff,
  ],
});
