import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var inboxCalendar: ITarget;
  var personalCalendar: ITarget;
  var workCalendar: ITarget;
  var errandsCalendar: ITarget;
  var shoppingCalendar: ITarget;
  var moviesToWatchCalendar: ITarget;
  var stayInTouchCalendar: ITarget;
  var fitnessCalendar: ITarget;
  var selfCareCalendar: ITarget;
  var adminCalendar: ITarget;
  var healthCalendar: ITarget;
  var automationCalendar: ITarget;
  var socialCalendar: ITarget;
  var icalBenSCalendarCalendar: ITarget;
}

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
globalThis.icalBenSCalendarCalendar = entity('calendar.ical_ben_s_calendar');
