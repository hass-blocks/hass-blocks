import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var workZone: ITarget;
  var gymZone: ITarget;
  var lozSFlatZone: ITarget;
  var mumAndDadSPlaceZone: ITarget;
  var homeZone: ITarget;
}

globalThis.workZone = entity('zone.work');
globalThis.gymZone = entity('zone.gym');
globalThis.lozSFlatZone = entity('zone.loz_s_flat');
globalThis.mumAndDadSPlaceZone = entity('zone.mum_and_dad_s_place');
globalThis.homeZone = entity('zone.home');
