import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Removes external statistics for all meters that don't have an active tariff
   */
  var purgeInvalidExternalStatisticIdsOctopusEnergy: () => Block;
  /**
   * Joins a given Octoplus saving session event.
   */
  var joinOctoplusSavingSessionEventOctopusEnergy: (
    target: IEntity<`event.${string}`> | IArea,
    params?: JoinOctoplusSavingSessionEventOctopusEnergyProps,
  ) => Block;
  /**
   * Refreshes the previous consumption data for a given entity from a given date.
   */
  var refreshPreviousConsumptionDataOctopusEnergy: (
    target: IEntity<`sensor.${string}`> | IArea,
    params: RefreshPreviousConsumptionDataOctopusEnergyProps,
  ) => Block;
  /**
   * Spins the wheel of fortune for a given energy type
   */
  var spinWheelOfFortuneOctopusEnergy: (
    target: IEntity<`sensor.${string}`> | IArea,
    params?: SpinWheelOfFortuneOctopusEnergyProps,
  ) => Block;
  /**
   * Registers external weightings against rates, for use with target rate sensors when calculating target periods.
   */
  var registerRateWeightingsOctopusEnergy: (
    target: IEntity<`sensor.${string}`> | IArea,
    params?: RegisterRateWeightingsOctopusEnergyProps,
  ) => Block;
}

globalThis.purgeInvalidExternalStatisticIdsOctopusEnergy = () =>
  serviceCall({
    name: `Call octopus_energy.purge_invalid_external_statistic_ids`,
    params: {
      domain: 'octopus_energy',
      service: 'purge_invalid_external_statistic_ids',
    },
  });

export interface JoinOctoplusSavingSessionEventOctopusEnergyProps {
  /**
   * The code of the event that is to be joined.
   */
  event_code?: string;
}

globalThis.joinOctoplusSavingSessionEventOctopusEnergy = (target, params) =>
  serviceCall({
    name: `Call octopus_energy.join_octoplus_saving_session_event`,
    params: {
      domain: 'octopus_energy',
      service: 'join_octoplus_saving_session_event',
      service_data: params,
    },
    target,
  });

export interface RefreshPreviousConsumptionDataOctopusEnergyProps {
  /**
   * The date the data should be loaded from.
   */
  start_date: never;
}

globalThis.refreshPreviousConsumptionDataOctopusEnergy = (target, params) =>
  serviceCall({
    name: `Call octopus_energy.refresh_previous_consumption_data`,
    params: {
      domain: 'octopus_energy',
      service: 'refresh_previous_consumption_data',
      service_data: params,
    },
    target,
  });

export interface SpinWheelOfFortuneOctopusEnergyProps {}

globalThis.spinWheelOfFortuneOctopusEnergy = (target, params) =>
  serviceCall({
    name: `Call octopus_energy.spin_wheel_of_fortune`,
    params: {
      domain: 'octopus_energy',
      service: 'spin_wheel_of_fortune',
      service_data: params,
    },
    target,
  });

export interface RegisterRateWeightingsOctopusEnergyProps {
  /**
   * The collection of time periods and associated weightings to apply.
   */
  weightings?: never;
}

globalThis.registerRateWeightingsOctopusEnergy = (target, params) =>
  serviceCall({
    name: `Call octopus_energy.register_rate_weightings`,
    params: {
      domain: 'octopus_energy',
      service: 'register_rate_weightings',
      service_data: params,
    },
    target,
  });
