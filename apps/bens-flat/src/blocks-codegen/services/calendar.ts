import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface CreateEventCalendar {
    /**
     * Defines the short summary or subject for the event.
     */
    summary: string;
    /**
     * A more complete description of the event than the one provided by the summary.
     */
    description?: string;
    /**
     * The date and time the event should start.
     */
    start_date_time?: never;
    /**
     * The date and time the event should end.
     */
    end_date_time?: never;
    /**
     * The date the all-day event should start.
     */
    start_date?: never;
    /**
     * The date the all-day event should end (exclusive).
     */
    end_date?: never;
    /**
     * Days or weeks that you want to create the event in.
     */
    in?: never;
    /**
     * The location of the event.
     */
    location?: string;
  }

  /**
   * Adds a new calendar event.
   */
  var createEventCalendar: (
    target: IEntity<`calendar.${string}`> | IArea<string>,
    params: CreateEventCalendar,
  ) => Block<Partial<ServiceCallArgs<CreateEventCalendar>> | undefined, void>;

  interface GetEventsCalendar {
    /**
     * Returns active events after this time (exclusive). When not set, defaults to now.
     */
    start_date_time?: never;
    /**
     * Returns active events before this time (exclusive). Cannot be used with Duration.
     */
    end_date_time?: never;
    /**
     * Returns active events from Start time for the specified duration.
     */
    duration?: never;
  }

  /**
   * Retrieves events on a calendar within a time range.
   */
  var getEventsCalendar: (
    target: IEntity<`calendar.${string}`> | IArea<string>,
    params?: GetEventsCalendar,
  ) => Block<Partial<ServiceCallArgs<GetEventsCalendar>> | undefined, void>;
}

globalThis.createEventCalendar = (target, params) =>
  serviceCall({
    name: `Call calendar.create_event`,
    params: {
      domain: 'calendar',
      service: 'create_event',
      service_data: params,
    },
    target,
  });

globalThis.getEventsCalendar = (target, params) =>
  serviceCall({
    name: `Call calendar.get_events`,
    params: {
      domain: 'calendar',
      service: 'get_events',
      service_data: params,
    },
    target,
  });
