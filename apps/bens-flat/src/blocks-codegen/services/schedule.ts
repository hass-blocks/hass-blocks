import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  /**
   * Reloads schedules from the YAML-configuration.
   */
  var reloadSchedule: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;

  /**
   * Retrieves the configured time ranges of one or multiple schedules.
   */
  var getScheduleSchedule: (
    target: IEntity<`schedule.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;
}

globalThis.reloadSchedule = () =>
  serviceCall({
    name: `Call schedule.reload`,
    params: {
      domain: 'schedule',
      service: 'reload',
    },
  });

globalThis.getScheduleSchedule = (target) =>
  serviceCall({
    name: `Call schedule.get_schedule`,
    params: {
      domain: 'schedule',
      service: 'get_schedule',
    },
    target,
  });
