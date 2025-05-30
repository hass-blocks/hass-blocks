import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface RunActionSchedulerProps {
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
  var runActionScheduler: (
    params: RunActionSchedulerProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface AddSchedulerProps {
    /**
     * Days of the week for which the schedule should be repeated
     */
    weekdays?: Record<string, unknown>;
    /**
     * Date from which schedule should be executed
     */
    start_date?: Record<string, unknown>;
    /**
     * Date until which schedule should be executed
     */
    end_date?: Record<string, unknown>;
    /**
     * list of timeslots with their actions and optionally conditions (should be kept the same for all timeslots)
     */
    timeslots: Record<string, unknown>;
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
  var addScheduler: (
    params: AddSchedulerProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface EditSchedulerProps {
    /**
     * Identifier of the scheduler entity.
     */
    entity_id: string;
    /**
     * Days of the week for which the schedule should be repeated
     */
    weekdays?: Record<string, unknown>;
    /**
     * Date from which schedule should be executed
     */
    start_date?: Record<string, unknown>;
    /**
     * Date until which schedule should be executed
     */
    end_date?: Record<string, unknown>;
    /**
     * list of timeslots with their actions and optionally conditions (should be kept the same for all timeslots)
     */
    timeslots?: Record<string, unknown>;
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
  var editScheduler: (
    params: EditSchedulerProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface RemoveSchedulerProps {
    /**
     * Identifier of the scheduler entity.
     */
    entity_id: string;
  }

  /**
   * Remove a schedule entity
   */
  var removeScheduler: (
    params: RemoveSchedulerProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface CopySchedulerProps {
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
  var copyScheduler: (
    params: CopySchedulerProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Disables all schedules
   */
  var disableAllScheduler: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;

  /**
   * Enables all schedules
   */
  var enableAllScheduler: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;
}

globalThis.runActionScheduler = (params) =>
  serviceCall({
    name: `Call scheduler.run_action`,
    params: {
      domain: 'scheduler',
      service: 'run_action',
      service_data: params,
    },
  });

globalThis.addScheduler = (params) =>
  serviceCall({
    name: `Call scheduler.add`,
    params: {
      domain: 'scheduler',
      service: 'add',
      service_data: params,
    },
  });

globalThis.editScheduler = (params) =>
  serviceCall({
    name: `Call scheduler.edit`,
    params: {
      domain: 'scheduler',
      service: 'edit',
      service_data: params,
    },
  });

globalThis.removeScheduler = (params) =>
  serviceCall({
    name: `Call scheduler.remove`,
    params: {
      domain: 'scheduler',
      service: 'remove',
      service_data: params,
    },
  });

globalThis.copyScheduler = (params) =>
  serviceCall({
    name: `Call scheduler.copy`,
    params: {
      domain: 'scheduler',
      service: 'copy',
      service_data: params,
    },
  });

globalThis.disableAllScheduler = () =>
  serviceCall({
    name: `Call scheduler.disable_all`,
    params: {
      domain: 'scheduler',
      service: 'disable_all',
    },
  });

globalThis.enableAllScheduler = () =>
  serviceCall({
    name: `Call scheduler.enable_all`,
    params: {
      domain: 'scheduler',
      service: 'enable_all',
    },
  });
