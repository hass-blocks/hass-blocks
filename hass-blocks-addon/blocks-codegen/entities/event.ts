import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Backup Automatic backup
   */
  var backupAutomaticBackupEvent: IEntity<`event.backup_automatic_backup`>;
  /**
   * Front Door Ding
   */
  var frontDoorDingEvent: IEntity<`event.front_door_ding`>;
  /**
   * Front Door Motion
   */
  var frontDoorMotionEvent: IEntity<`event.front_door_motion`>;
  /**
   * Octoplus Saving Session Events (A-11077925)
   */
  var octopusEnergyA_11077925OctoplusSavingSessionEventsEvent: IEntity<`event.octopus_energy_a_11077925_octoplus_saving_session_events`>;
  /**
   * Previous Day Rates Electricity (19L3210845/1630000030495)
   */
  var octopusEnergyElectricity_19l3210845_1630000030495PreviousDayRatesEvent: IEntity<`event.octopus_energy_electricity_19l3210845_1630000030495_previous_day_rates`>;
  /**
   * Current Day Rates Electricity (19L3210845/1630000030495)
   */
  var octopusEnergyElectricity_19l3210845_1630000030495CurrentDayRatesEvent: IEntity<`event.octopus_energy_electricity_19l3210845_1630000030495_current_day_rates`>;
  /**
   * Next Day Rates Electricity (19L3210845/1630000030495)
   */
  var octopusEnergyElectricity_19l3210845_1630000030495NextDayRatesEvent: IEntity<`event.octopus_energy_electricity_19l3210845_1630000030495_next_day_rates`>;
}

globalThis.backupAutomaticBackupEvent = entity(
  'event.backup_automatic_backup',
  'Backup Automatic backup',
);
globalThis.frontDoorDingEvent = entity(
  'event.front_door_ding',
  'Front Door Ding',
);
globalThis.frontDoorMotionEvent = entity(
  'event.front_door_motion',
  'Front Door Motion',
);
globalThis.octopusEnergyA_11077925OctoplusSavingSessionEventsEvent = entity(
  'event.octopus_energy_a_11077925_octoplus_saving_session_events',
  'Octoplus Saving Session Events (A-11077925)',
);
globalThis.octopusEnergyElectricity_19l3210845_1630000030495PreviousDayRatesEvent =
  entity(
    'event.octopus_energy_electricity_19l3210845_1630000030495_previous_day_rates',
    'Previous Day Rates Electricity (19L3210845/1630000030495)',
  );
globalThis.octopusEnergyElectricity_19l3210845_1630000030495CurrentDayRatesEvent =
  entity(
    'event.octopus_energy_electricity_19l3210845_1630000030495_current_day_rates',
    'Current Day Rates Electricity (19L3210845/1630000030495)',
  );
globalThis.octopusEnergyElectricity_19l3210845_1630000030495NextDayRatesEvent =
  entity(
    'event.octopus_energy_electricity_19l3210845_1630000030495_next_day_rates',
    'Next Day Rates Electricity (19L3210845/1630000030495)',
  );
