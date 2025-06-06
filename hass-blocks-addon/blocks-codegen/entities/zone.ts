import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Awaze Office
   */
  var work: IEntity<`zone.work`>;
  /**
   * Gym
   */
  var gym1: IEntity<`zone.gym`>;
  /**
   * Loz's Flat
   */
  var lozSFlat: IEntity<`zone.loz_s_flat`>;
  /**
   * Mum and Dad's place
   */
  var mumAndDadSPlace: IEntity<`zone.mum_and_dad_s_place`>;
  /**
   * Home
   */
  var home: IEntity<`zone.home`>;
}

globalThis.work = entity('zone.work', 'Awaze Office');
globalThis.gym1 = entity('zone.gym', 'Gym');
globalThis.lozSFlat = entity('zone.loz_s_flat', "Loz's Flat");
globalThis.mumAndDadSPlace = entity(
  'zone.mum_and_dad_s_place',
  "Mum and Dad's place",
);
globalThis.home = entity('zone.home', 'Home');
