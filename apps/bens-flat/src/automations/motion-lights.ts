import { automation } from '@hass-blocks/core';
import { stateIs, stateTurns, waitMinutes } from '@hass-blocks/blocks';

import { bathroom, bedroom, hallway, livingRoom } from '../areas.ts';

import '@blocks-codegen';

export const livingRoomLightsAutomation = automation({
  name: 'Living room Lights',
  when: stateTurns(livingRoomSensorSensorStateMotionBinarySensor, 'on'),
  then: [
    stateIs(livingRoomMotionSensorSwitch, 'on'),
    stateIs(tvModeSwitch, 'off'),
    turnOnLight(livingRoom),
    waitMinutes(30),
    turnOffLight(livingRoom),
  ],
});

export const bedroomLights = automation({
  name: 'Bedroom Lights',
  when: stateTurns(bedroomSensorSensorStateMotionBinarySensor, 'on'),
  then: [
    stateIs(sleepModeSwitch, 'off'),
    stateIs(bedroomMotionSensorSwitch, 'on'),
    turnOnLight(bedroom),
    waitMinutes(10),
    turnOffLight(bedroom),
  ],
});

export const hallwayLights = automation({
  name: 'Hallway Lights',
  when: stateTurns(hallwayMotionSensorOccupancyBinarySensor, 'on'),
  then: [
    stateIs(hallwayMotionSensorSwitch, 'on'),
    turnOnLight(hallway),
    waitMinutes(2),
    turnOffLight(hallway),
  ],
});

export const bathroomLights = automation({
  name: 'Bathroom Lights',
  when: stateTurns(bathroomMotionSensorOccupancyBinarySensor, 'on'),
  then: [
    stateIs(bathroomMotionSensorSwitch, 'on'),
    turnOnLight(bathroom),
    waitMinutes(10),
    turnOffLight(bathroom),
  ],
});
