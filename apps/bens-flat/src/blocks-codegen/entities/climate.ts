import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var livingRoomClimate: ITarget;
  var bedroomClimate: ITarget;
  var boilerClimate: ITarget;
  var gymClimate: ITarget;
}

globalThis.livingRoomClimate = entity('climate.living_room');
globalThis.bedroomClimate = entity('climate.bedroom');
globalThis.boilerClimate = entity('climate.boiler');
globalThis.gymClimate = entity('climate.gym');
