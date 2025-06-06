import { stateIs, waitMinutes } from '@hass-blocks/blocks';
import { automation } from '@hass-blocks/core';
import { stateTurnsOn } from '@hass-blocks/triggers';

import '@blocks-codegen';
import {
  bathroomMotionLights,
  bedroomMotionLights,
  hallwayMotionLights,
  livingRoomMotionLights,
  toggleSleepMode,
} from '../entities.ts';

export const livingRoomLightsAutomation = automation({
  name: 'Living room Lights',
  when: stateTurnsOn(livingRoomSensorSensorStateMotionBinarySensor),
  then: [
    stateIs(livingRoomMotionLights, 'on'),
    stateIs(tvMode, 'off'),
    turnOnLight(livingRoom),
    waitMinutes(30),
    turnOffLight(livingRoom),
  ],
});

export const bedroomLights = automation({
  name: 'Bedroom Lights',
  when: stateTurnsOn(bedroomSensorSensorStateMotionBinarySensor),
  then: [
    stateIs(toggleSleepMode, 'off'),
    stateIs(bedroomMotionLights, 'on'),
    turnOnLight(bedroom),
    waitMinutes(10),
    turnOffLight(bedroom),
  ],
});

export const hallwayLights = automation({
  name: 'Hallway Lights',
  when: stateTurnsOn(hallwayMotionSensorOccupancyBinarySensor),
  then: [
    stateIs(hallwayMotionLights, 'on'),
    turnOnLight(hallway),
    waitMinutes(2),
    turnOffLight(hallway),
  ],
});

export const bathroomLights = automation({
  name: 'Bathroom Lights',
  when: stateTurnsOn(hallwayMotionSensorOccupancyBinarySensor),
  then: [
    stateIs(bathroomMotionLights, 'on'),
    turnOnLight(mainBathroom),
    waitMinutes(10),
    turnOffLight(mainBathroom),
  ],
});
