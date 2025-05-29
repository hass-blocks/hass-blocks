import { automation } from '@hass-blocks/core';
import { stateIs, waitMinutes } from '@hass-blocks/blocks';
import { stateTurns } from '../triggers/state-turns.ts';

import { bathroom, bedroom, hallway, livingRoom } from '../areas.ts';

import '@blocks-codegen';
import {
  bathroomMotionLights,
  bedroomMotionLights,
  hallwayMotionLights,
  livingRoomMotionLights,
} from '../entities.ts';

export const livingRoomLightsAutomation = automation({
  name: 'Living room Lights',
  when: stateTurns(livingRoomSensorSensorStateMotionBinarySensor, 'on'),
  then: [
    stateIs(livingRoomMotionLights, 'on'),
    stateIs(tvModeSwitch, 'off'),
    waitMinutes(30),
    turnOnLight(livingRoom),
    turnOffLight(livingRoom),
  ],
});

export const bedroomLights = automation({
  name: 'Bedroom Lights',
  when: stateTurns(bedroomSensorSensorStateMotionBinarySensor, 'on'),
  then: [
    stateIs(sleepModeSwitch, 'off'),
    stateIs(bedroomMotionLights, 'on'),
    turnOnLight(bedroom),
    waitMinutes(10),
    turnOffLight(bedroom),
  ],
});

export const hallwayLights = automation({
  name: 'Hallway Lights',
  when: stateTurns(hallwayMotionSensorOccupancyBinarySensor, 'on'),
  then: [
    stateIs(hallwayMotionLights, 'on'),
    turnOnLight(hallway),
    waitMinutes(2),
    turnOffLight(hallway),
  ],
});

export const bathroomLights = automation({
  name: 'Bathroom Lights',
  when: stateTurns(hallwayMotionSensorOccupancyBinarySensor, 'on'),
  then: [
    stateIs(bathroomMotionLights, 'on'),
    turnOnLight(bathroom),
    waitMinutes(10),
    turnOffLight(bathroom),
  ],
});
