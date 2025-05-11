import { serviceCall } from '@hass-blocks/core';

export interface RunActionSchedulerProps {
  /**
   * Identifier of the scheduler entity.
   */
  entity_id: string;
  /**
   * Time for which to evaluate the action (only useful for schedules with multiple timeslot)
   */
  time?: string;
  /**
   * Whether the conditions of the schedule should be skipped or not
   */
  skip_conditions?: boolean;
}

/**
 * Execute the action of a schedule, optionally at a given time.
 */
export const runActionScheduler = (params: RunActionSchedulerProps) =>
  serviceCall({
    name: `Call scheduler.run_action`,
    params: {
      domain: 'scheduler',
      service: 'run_action',
      service_data: params,
    },
  });

export interface AddSchedulerProps {
  /**
   * Days of the week for which the schedule should be repeated
   */
  weekdays?: never;
  /**
   * Date from which schedule should be executed
   */
  start_date?: never;
  /**
   * Date until which schedule should be executed
   */
  end_date?: never;
  /**
   * list of timeslots with their actions and optionally conditions (should be kept the same for all timeslots)
   */
  timeslots: never;
  /**
   * Control what happens after the schedule is triggered
   */
  repeat_type: never;
  /**
   * Friendly name for the schedule
   */
  name?: string;
}

/**
 * Create a new schedule entity
 */
export const addScheduler = (params: AddSchedulerProps) =>
  serviceCall({
    name: `Call scheduler.add`,
    params: {
      domain: 'scheduler',
      service: 'add',
      service_data: params,
    },
  });

export interface EditSchedulerProps {
  /**
   * Identifier of the scheduler entity.
   */
  entity_id: string;
  /**
   * Days of the week for which the schedule should be repeated
   */
  weekdays?: never;
  /**
   * Date from which schedule should be executed
   */
  start_date?: never;
  /**
   * Date until which schedule should be executed
   */
  end_date?: never;
  /**
   * list of timeslots with their actions and optionally conditions (should be kept the same for all timeslots)
   */
  timeslots?: never;
  /**
   * Control what happens after the schedule is triggered
   */
  repeat_type?: never;
  /**
   * Friendly name for the schedule
   */
  name?: string;
}

/**
 * Edit a schedule entity
 */
export const editScheduler = (params: EditSchedulerProps) =>
  serviceCall({
    name: `Call scheduler.edit`,
    params: {
      domain: 'scheduler',
      service: 'edit',
      service_data: params,
    },
  });

export interface RemoveSchedulerProps {
  /**
   * Identifier of the scheduler entity.
   */
  entity_id: string;
}

/**
 * Remove a schedule entity
 */
export const removeScheduler = (params: RemoveSchedulerProps) =>
  serviceCall({
    name: `Call scheduler.remove`,
    params: {
      domain: 'scheduler',
      service: 'remove',
      service_data: params,
    },
  });

export interface CopySchedulerProps {
  /**
   * Identifier of the scheduler entity.
   */
  entity_id: string;
  /**
   * Friendly name for the copied schedule
   */
  name?: string;
}

/**
 * Duplicate a schedule entity
 */
export const copyScheduler = (params: CopySchedulerProps) =>
  serviceCall({
    name: `Call scheduler.copy`,
    params: {
      domain: 'scheduler',
      service: 'copy',
      service_data: params,
    },
  });

/**
 * Disables all schedules
 */
export const disableAllScheduler = () =>
  serviceCall({
    name: `Call scheduler.disable_all`,
    params: {
      domain: 'scheduler',
      service: 'disable_all',
    },
  });

/**
 * Enables all schedules
 */
export const enableAllScheduler = () =>
  serviceCall({
    name: `Call scheduler.enable_all`,
    params: {
      domain: 'scheduler',
      service: 'enable_all',
    },
  });
