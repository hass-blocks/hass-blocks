import { switchLight } from '@hass-blocks/blocks';
import { entities } from '../constants.ts';

const { livingRoomLights, bedroomLights, hallwayLights, bathroomLights } =
  entities.light;

export const switchLivingRoomLightsOn = switchLight(
  { entity_id: livingRoomLights.id },
  'on',
);

export const switchLivingRoomLightsOff = switchLight(
  { entity_id: livingRoomLights.id },
  'off',
);

export const switchBathroomLightsOn = switchLight(
  { entity_id: bathroomLights.id },
  'on',
);

export const switchBathroomLightsOff = switchLight(
  { entity_id: bathroomLights.id },
  'off',
);

export const switchBedroomLightsOn = switchLight(
  { entity_id: bedroomLights.id },
  'on',
);

export const switchBedroomLightsOff = switchLight(
  { entity_id: bedroomLights.id },
  'off',
);

export const switchHallwayLightsOn = switchLight(
  { entity_id: hallwayLights.id },
  'on',
);

export const switchHallwayLightsOff = switchLight(
  { entity_id: hallwayLights.id },
  'off',
);
