import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Reloads schedules from the YAML-configuration.
   */
  var reloadSchedule: (target: ITarget) => Block;
  /**
   * Retrieves the configured time ranges of one or multiple schedules.
   */
  var getScheduleSchedule: (
    target: ITarget,
    params?: GetScheduleScheduleProps,
  ) => Block;
}

globalThis.reloadSchedule = (target: ITarget) =>
  serviceCall({
    name: `Call schedule.reload`,
    params: {
      domain: 'schedule',
      service: 'reload',
    },
  });

export interface GetScheduleScheduleProps {}

globalThis.getScheduleSchedule = (
  target: ITarget,
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
