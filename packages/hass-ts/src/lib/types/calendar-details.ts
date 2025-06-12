/**
 * Details of a calendar registered with Home Assistant
 *
 * @public
 */
export type CalendarDetails = {
  /**
   * The friendly name associated with the calendar (e.g. '"Ben's Calendar")
   */
  name: string;

  /**
   * The entity ID associated with the calendar (e.g. 'calendar.bens_calender')
   */
  entity_id: string;
};
