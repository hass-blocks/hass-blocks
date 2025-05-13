import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var workZone: IEntity<`zone.work`>;
  var gymZone: IEntity<`zone.gym`>;
  var lozSFlatZone: IEntity<`zone.loz_s_flat`>;
  var mumAndDadSPlaceZone: IEntity<`zone.mum_and_dad_s_place`>;
  var homeZone: IEntity<`zone.home`>;
}

globalThis.workZone = entity('zone.work');
globalThis.gymZone = entity('zone.gym');
globalThis.lozSFlatZone = entity('zone.loz_s_flat');
globalThis.mumAndDadSPlaceZone = entity('zone.mum_and_dad_s_place');
globalThis.homeZone = entity('zone.home');
