import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var workZone: IEntity<`zone.${string}`>;
  var gymZone: IEntity<`zone.${string}`>;
  var lozSFlatZone: IEntity<`zone.${string}`>;
  var mumAndDadSPlaceZone: IEntity<`zone.${string}`>;
  var homeZone: IEntity<`zone.${string}`>;
}

globalThis.workZone = entity('zone.work');
globalThis.gymZone = entity('zone.gym');
globalThis.lozSFlatZone = entity('zone.loz_s_flat');
globalThis.mumAndDadSPlaceZone = entity('zone.mum_and_dad_s_place');
globalThis.homeZone = entity('zone.home');
