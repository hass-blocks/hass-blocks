import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Me
   */
  var benWainwrightPerson: IEntity<`person.ben_wainwright`>;
  /**
   * Mum
   */
  var mumPerson: IEntity<`person.mum`>;
  /**
   * Dad
   */
  var dadPerson: IEntity<`person.dad`>;
  /**
   * Tom
   */
  var tomPerson: IEntity<`person.tom`>;
}

globalThis.benWainwrightPerson = entity('person.ben_wainwright', 'Me');
globalThis.mumPerson = entity('person.mum', 'Mum');
globalThis.dadPerson = entity('person.dad', 'Dad');
globalThis.tomPerson = entity('person.tom', 'Tom');
