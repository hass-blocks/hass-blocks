import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Me
   */
  var benWainwright: IEntity<`person.ben_wainwright`>;
  /**
   * Mum
   */
  var mum: IEntity<`person.mum`>;
  /**
   * Dad
   */
  var dad: IEntity<`person.dad`>;
  /**
   * Tom
   */
  var tom: IEntity<`person.tom`>;
}

globalThis.benWainwright = entity('person.ben_wainwright', 'Me');
globalThis.mum = entity('person.mum', 'Mum');
globalThis.dad = entity('person.dad', 'Dad');
globalThis.tom = entity('person.tom', 'Tom');
