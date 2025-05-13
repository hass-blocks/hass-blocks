import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var octopusEnergyA_11077925OctoplusSavingSessionEventsEvent: IEntity<`event.octopus_energy_a_11077925_octoplus_saving_session_events`>;
  var octopusEnergyElectricity_19l3210845_1630000030495PreviousDayRatesEvent: IEntity<`event.octopus_energy_electricity_19l3210845_1630000030495_previous_day_rates`>;
  var octopusEnergyElectricity_19l3210845_1630000030495CurrentDayRatesEvent: IEntity<`event.octopus_energy_electricity_19l3210845_1630000030495_current_day_rates`>;
  var octopusEnergyElectricity_19l3210845_1630000030495NextDayRatesEvent: IEntity<`event.octopus_energy_electricity_19l3210845_1630000030495_next_day_rates`>;
  var frontDoorDingEvent: IEntity<`event.front_door_ding`>;
  var frontDoorMotionEvent: IEntity<`event.front_door_motion`>;
}

globalThis.octopusEnergyA_11077925OctoplusSavingSessionEventsEvent = entity(
  'event.octopus_energy_a_11077925_octoplus_saving_session_events',
);
globalThis.octopusEnergyElectricity_19l3210845_1630000030495PreviousDayRatesEvent =
  entity(
    'event.octopus_energy_electricity_19l3210845_1630000030495_previous_day_rates',
  );
globalThis.octopusEnergyElectricity_19l3210845_1630000030495CurrentDayRatesEvent =
  entity(
    'event.octopus_energy_electricity_19l3210845_1630000030495_current_day_rates',
  );
globalThis.octopusEnergyElectricity_19l3210845_1630000030495NextDayRatesEvent =
  entity(
    'event.octopus_energy_electricity_19l3210845_1630000030495_next_day_rates',
  );
globalThis.frontDoorDingEvent = entity('event.front_door_ding');
globalThis.frontDoorMotionEvent = entity('event.front_door_motion');
