import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Living Room Thermostat
   */
  var livingRoomClimate: IEntity<`climate.living_room`>;
  /**
   * Bedroom Thermostat
   */
  var bedroomClimate: IEntity<`climate.bedroom`>;
  /**
   * Boiler
   */
  var boilerClimate: IEntity<`climate.boiler`>;
  /**
   * Gym Thermostat
   */
  var gymClimate: IEntity<`climate.gym`>;
}

globalThis.livingRoomClimate = entity(
  'climate.living_room',
  'Living Room Thermostat',
);
globalThis.bedroomClimate = entity('climate.bedroom', 'Bedroom Thermostat');
globalThis.boilerClimate = entity('climate.boiler', 'Boiler');
globalThis.gymClimate = entity('climate.gym', 'Gym Thermostat');
