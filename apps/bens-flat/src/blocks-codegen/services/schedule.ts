import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Reloads schedules from the YAML-configuration.
   */
  var reloadSchedule: () => Block;
  /**
   * Retrieves the configured time ranges of one or multiple schedules.
   */
  var getScheduleSchedule: (
    target: IEntity<`schedule.${string}`> | IArea,
    params?: GetScheduleScheduleProps,
  ) => Block;
}

globalThis.reloadSchedule = () =>
  serviceCall({
    name: `Call schedule.reload`,
    params: {
      domain: 'schedule',
      service: 'reload',
    },
  });

export interface GetScheduleScheduleProps {}

globalThis.getScheduleSchedule = (
  target: IEntity<`schedule.${string}`> | IArea,
  params?: GetScheduleScheduleProps,
) =>
  serviceCall({
    name: `Call schedule.get_schedule`,
    params: {
      domain: 'schedule',
      service: 'get_schedule',
      service_data: params,
    },
    target,
  });
