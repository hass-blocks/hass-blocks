import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var icalBenSCalendarCalendar: IEntity<`calendar.ical_ben_s_calendar`>;
  var inboxCalendar: IEntity<`calendar.inbox`>;
  var personalCalendar: IEntity<`calendar.personal`>;
  var workCalendar: IEntity<`calendar.work`>;
  var errandsCalendar: IEntity<`calendar.errands`>;
  var shoppingCalendar: IEntity<`calendar.shopping`>;
  var moviesToWatchCalendar: IEntity<`calendar.movies_to_watch`>;
  var stayInTouchCalendar: IEntity<`calendar.stay_in_touch`>;
  var fitnessCalendar: IEntity<`calendar.fitness`>;
  var selfCareCalendar: IEntity<`calendar.self_care`>;
  var adminCalendar: IEntity<`calendar.admin`>;
  var healthCalendar: IEntity<`calendar.health`>;
  var automationCalendar: IEntity<`calendar.automation`>;
  var socialCalendar: IEntity<`calendar.social`>;
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
