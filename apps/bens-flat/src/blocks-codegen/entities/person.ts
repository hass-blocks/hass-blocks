import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var benWainwrightPerson: IEntity<`person.${string}`>;
  var mumPerson: IEntity<`person.${string}`>;
  var dadPerson: IEntity<`person.${string}`>;
  var tomPerson: IEntity<`person.${string}`>;
}

globalThis.benWainwrightPerson = entity('person.ben_wainwright');
globalThis.mumPerson = entity('person.mum');
globalThis.dadPerson = entity('person.dad');
globalThis.tomPerson = entity('person.tom');
