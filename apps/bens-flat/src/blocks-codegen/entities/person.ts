import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var benWainwrightPerson: IEntity<`person.ben_wainwright`>;
  var mumPerson: IEntity<`person.mum`>;
  var dadPerson: IEntity<`person.dad`>;
  var tomPerson: IEntity<`person.tom`>;
}

globalThis.benWainwrightPerson = entity('person.ben_wainwright');
globalThis.mumPerson = entity('person.mum');
globalThis.dadPerson = entity('person.dad');
globalThis.tomPerson = entity('person.tom');
