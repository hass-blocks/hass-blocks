import { automation } from '@hass-blocks/core';

import { waitMinutes } from '@hass-blocks/blocks';

import {
  motionIsDetectedInTheBathroom,
  motionIsDetectedInTheBedroom,
  motionIsDetectedInTheHallway,
  motionIsDetectedInTheLivingRoom,
} from '../triggers/index.ts';

import {
  ifBathroomMotionSensorIsOn,
  ifBedroomMotionSensorIsOn,
  ifHallwayMotionSensorIsOn,
  ifLivingRoomMotionSensorIsOn,
  ifSleepModeIsOff,
  ifTvModeIsOff,
} from '../assertions/index.ts';

import { turnOffLight, turnOnLight } from '../blocks-codegen/index.ts';

import { bathroom, bedroom, hallway, livingRoom } from '../areas.ts';

export const livingRoomLightsAutomation = automation({
  name: 'Living room Lights',
  when: motionIsDetectedInTheLivingRoom,
  then: [
    ifLivingRoomMotionSensorIsOn,
    ifTvModeIsOff,
    turnOnLight(livingRoom),
    waitMinutes(30),
    turnOffLight(livingRoom),
  ],
});

export const bedroomLights = automation({
  name: 'Bedroom Lights',
  when: motionIsDetectedInTheBedroom,
  then: [
    ifSleepModeIsOff,
    ifBedroomMotionSensorIsOn,
    turnOnLight(bedroom),
    waitMinutes(10),
    turnOffLight(bedroom),
  ],
});

export const hallwayLights = automation({
  name: 'Hallway Lights',
  when: motionIsDetectedInTheHallway,
  then: [
    ifHallwayMotionSensorIsOn,
    turnOnLight(hallway),
    waitMinutes(2),
    turnOffLight(hallway),
  ],
});

export const bathroomLights = automation({
  name: 'Bathroom Lights',
  when: motionIsDetectedInTheBathroom,
  then: [
    ifBathroomMotionSensorIsOn,
    turnOnLight(bathroom),
    waitMinutes(10),
    turnOffLight(bathroom),
  ],
});
