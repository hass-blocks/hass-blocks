import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var benWainwrightPerson: ITarget;
  var mumPerson: ITarget;
  var dadPerson: ITarget;
  var tomPerson: ITarget;
}

globalThis.benWainwrightPerson = entity('person.ben_wainwright');
globalThis.mumPerson = entity('person.mum');
globalThis.dadPerson = entity('person.dad');
globalThis.tomPerson = entity('person.tom');
