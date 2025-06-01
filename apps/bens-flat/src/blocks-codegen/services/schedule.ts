import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  /**
   * Reloads schedules from the YAML-configuration
   */
  var reloadSchedule: () => Block<Partial<unknown> | undefined, void>;

  /**
   * Retrieves the configured time ranges of one or multiple schedules
   */
  var getSchedule: (
    target: IEntity<`schedule.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;
}

globalThis.reloadSchedule = () =>
  serviceCall({
    name: `Call schedule.reload`,
    params: {
      domain: 'schedule',
      service: 'reload',
    },
  });

globalThis.getSchedule = (target) =>
  serviceCall({
    name: `Call schedule.get_schedule`,
    params: {
      domain: 'schedule',
      service: 'get_schedule',
    },
    target,
  });
