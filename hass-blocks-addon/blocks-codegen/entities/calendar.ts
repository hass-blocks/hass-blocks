import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Ben's Calendar
   */
  var icalBenSCalendarCalendar: IEntity<`calendar.ical_ben_s_calendar`>;
  /**
   * Inbox
   */
  var inboxCalendar: IEntity<`calendar.inbox`>;
  /**
   * Personal
   */
  var personalCalendar: IEntity<`calendar.personal`>;
  /**
   * Work
   */
  var workCalendar: IEntity<`calendar.work`>;
  /**
   * Domestic
   */
  var errandsCalendar: IEntity<`calendar.errands`>;
  /**
   * Wishlist
   */
  var shoppingCalendar: IEntity<`calendar.shopping`>;
  /**
   * Movies to watch
   */
  var moviesToWatchCalendar: IEntity<`calendar.movies_to_watch`>;
  /**
   * Stay in touch
   */
  var stayInTouchCalendar: IEntity<`calendar.stay_in_touch`>;
  /**
   * Fitness
   */
  var fitnessCalendar: IEntity<`calendar.fitness`>;
  /**
   * Self care
   */
  var selfCareCalendar: IEntity<`calendar.self_care`>;
  /**
   * Admin
   */
  var adminCalendar: IEntity<`calendar.admin`>;
  /**
   * Health
   */
  var healthCalendar: IEntity<`calendar.health`>;
  /**
   * Automation
   */
  var automationCalendar: IEntity<`calendar.automation`>;
  /**
   * Social
   */
  var socialCalendar: IEntity<`calendar.social`>;
}

globalThis.icalBenSCalendarCalendar = entity(
  'calendar.ical_ben_s_calendar',
  "Ben's Calendar",
);
globalThis.inboxCalendar = entity('calendar.inbox', 'Inbox');
globalThis.personalCalendar = entity('calendar.personal', 'Personal');
globalThis.workCalendar = entity('calendar.work', 'Work');
globalThis.errandsCalendar = entity('calendar.errands', 'Domestic');
globalThis.shoppingCalendar = entity('calendar.shopping', 'Wishlist');
globalThis.moviesToWatchCalendar = entity(
  'calendar.movies_to_watch',
  'Movies to watch',
);
globalThis.stayInTouchCalendar = entity(
  'calendar.stay_in_touch',
  'Stay in touch',
);
globalThis.fitnessCalendar = entity('calendar.fitness', 'Fitness');
globalThis.selfCareCalendar = entity('calendar.self_care', 'Self care');
globalThis.adminCalendar = entity('calendar.admin', 'Admin');
globalThis.healthCalendar = entity('calendar.health', 'Health');
globalThis.automationCalendar = entity('calendar.automation', 'Automation');
globalThis.socialCalendar = entity('calendar.social', 'Social');
