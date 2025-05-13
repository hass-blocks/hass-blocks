import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var livingRoomClimate: IEntity<`climate.${string}`>;
  var bedroomClimate: IEntity<`climate.${string}`>;
  var boilerClimate: IEntity<`climate.${string}`>;
  var gymClimate: IEntity<`climate.${string}`>;
}

globalThis.livingRoomClimate = entity('climate.living_room');
globalThis.bedroomClimate = entity('climate.bedroom');
globalThis.boilerClimate = entity('climate.boiler');
globalThis.gymClimate = entity('climate.gym');
