import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Awaze Office
   */
  var workZone: IEntity<`zone.work`>;
  /**
   * Gym
   */
  var gymZone: IEntity<`zone.gym`>;
  /**
   * Loz's Flat
   */
  var lozSFlatZone: IEntity<`zone.loz_s_flat`>;
  /**
   * Mum and Dad's place
   */
  var mumAndDadSPlaceZone: IEntity<`zone.mum_and_dad_s_place`>;
  /**
   * Home
   */
  var homeZone: IEntity<`zone.home`>;
}

globalThis.workZone = entity('zone.work', 'Awaze Office');
globalThis.gymZone = entity('zone.gym', 'Gym');
globalThis.lozSFlatZone = entity('zone.loz_s_flat', "Loz's Flat");
globalThis.mumAndDadSPlaceZone = entity(
  'zone.mum_and_dad_s_place',
  "Mum and Dad's place",
);
globalThis.homeZone = entity('zone.home', 'Home');
