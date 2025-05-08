import { switchLight } from '@hass-blocks/blocks';
import { entities } from '../constants.ts';

const { livingRoomLights, bathroomLights, bedroomLights, hallwayLights } =
  entities;

export const switchLivingRoomLightsOn = switchLight(livingRoomLights, 'on');
export const switchLivingRoomLightsOff = switchLight(livingRoomLights, 'off');
export const switchBathroomLightsOn = switchLight(bathroomLights, 'on');
export const switchBathroomLightsOff = switchLight(bathroomLights, 'off');
export const switchBedroomLightsOn = switchLight(bedroomLights, 'on');
export const switchBedroomLightsOff = switchLight(bedroomLights, 'off');
export const switchHallwayLightsOn = switchLight(hallwayLights, 'on');
export const switchHallwayLightsOff = switchLight(hallwayLights, 'off');
