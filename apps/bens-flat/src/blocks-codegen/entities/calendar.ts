import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var icalBenSCalendarCalendar: IEntity<`calendar.${string}`>;
  var inboxCalendar: IEntity<`calendar.${string}`>;
  var personalCalendar: IEntity<`calendar.${string}`>;
  var workCalendar: IEntity<`calendar.${string}`>;
  var errandsCalendar: IEntity<`calendar.${string}`>;
  var shoppingCalendar: IEntity<`calendar.${string}`>;
  var moviesToWatchCalendar: IEntity<`calendar.${string}`>;
  var stayInTouchCalendar: IEntity<`calendar.${string}`>;
  var fitnessCalendar: IEntity<`calendar.${string}`>;
  var selfCareCalendar: IEntity<`calendar.${string}`>;
  var adminCalendar: IEntity<`calendar.${string}`>;
  var healthCalendar: IEntity<`calendar.${string}`>;
  var automationCalendar: IEntity<`calendar.${string}`>;
  var socialCalendar: IEntity<`calendar.${string}`>;
}

globalThis.icalBenSCalendarCalendar = entity('calendar.ical_ben_s_calendar');
globalThis.inboxCalendar = entity('calendar.inbox');
globalThis.personalCalendar = entity('calendar.personal');
globalThis.workCalendar = entity('calendar.work');
globalThis.errandsCalendar = entity('calendar.errands');
globalThis.shoppingCalendar = entity('calendar.shopping');
globalThis.moviesToWatchCalendar = entity('calendar.movies_to_watch');
globalThis.stayInTouchCalendar = entity('calendar.stay_in_touch');
globalThis.fitnessCalendar = entity('calendar.fitness');
globalThis.selfCareCalendar = entity('calendar.self_care');
globalThis.adminCalendar = entity('calendar.admin');
globalThis.healthCalendar = entity('calendar.health');
globalThis.automationCalendar = entity('calendar.automation');
globalThis.socialCalendar = entity('calendar.social');
