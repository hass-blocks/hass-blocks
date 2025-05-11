import { serviceCall, ITarget } from '@hass-blocks/core';

/**
 * Reloads schedules from the YAML-configuration.
 */
export const reloadSchedule = (target: ITarget) =>
  serviceCall({
    name: `Call schedule.reload`,
    params: {
      domain: 'schedule',
      service: 'reload',
    },
  });

export interface GetScheduleScheduleProps {}

/**
 * Retrieves the configured time ranges of one or multiple schedules.
 */
export const getScheduleSchedule = (
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
