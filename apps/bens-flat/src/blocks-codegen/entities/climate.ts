import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var livingRoomClimate: IEntity<`climate.living_room`>;
  var bedroomClimate: IEntity<`climate.bedroom`>;
  var boilerClimate: IEntity<`climate.boiler`>;
  var gymClimate: IEntity<`climate.gym`>;
}

globalThis.livingRoomClimate = entity('climate.living_room');
globalThis.bedroomClimate = entity('climate.bedroom');
globalThis.boilerClimate = entity('climate.boiler');
globalThis.gymClimate = entity('climate.gym');
