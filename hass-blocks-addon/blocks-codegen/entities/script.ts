import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Turn TV On
   */
  var turnTvOnScript1: IEntity<`script.turn_tv_on`>;
  /**
   * Turn TV mode on
   */
  var turnTvModeOnScript1: IEntity<`script.turn_tv_mode_on`>;
  /**
   * Boost boiler
   */
  var boostBoilerScript1: IEntity<`script.boost_boiler`>;
  /**
   * Update all HACS items
   */
  var updateAllHacsItemsScript1: IEntity<`script.update_all_hacs_items`>;
  /**
   * Read today's todo list
   */
  var todoListScript1: IEntity<`script.todo_list`>;
  /**
   * Open AI TTS
   */
  var openAiTtsScript1: IEntity<`script.open_ai_tts`>;
  /**
   * Read today's calendar
   */
  var readTodaySCalendarScript1: IEntity<`script.read_today_s_calendar`>;
  /**
   * Good morning routine
   */
  var goodMorningRoutineScript1: IEntity<`script.good_morning_routine`>;
  /**
   * Turn everything off
   */
  var turnEverythingOff_2Script1: IEntity<`script.turn_everything_off_2`>;
  /**
   * Dismiss Welcome Message
   */
  var dismissWelcomeMessageScript1: IEntity<`script.dismiss_welcome_message`>;
  /**
   * Join Speakers
   */
  var groupSpeakersScript1: IEntity<`script.group_speakers`>;
  /**
   * Unjoin Speakers
   */
  var unjoinSpeakersScript1: IEntity<`script.unjoin_speakers`>;
}

globalThis.turnTvOnScript1 = entity('script.turn_tv_on', 'Turn TV On');
globalThis.turnTvModeOnScript1 = entity(
  'script.turn_tv_mode_on',
  'Turn TV mode on',
);
globalThis.boostBoilerScript1 = entity('script.boost_boiler', 'Boost boiler');
globalThis.updateAllHacsItemsScript1 = entity(
  'script.update_all_hacs_items',
  'Update all HACS items',
);
globalThis.todoListScript1 = entity(
  'script.todo_list',
  "Read today's todo list",
);
globalThis.openAiTtsScript1 = entity('script.open_ai_tts', 'Open AI TTS');
globalThis.readTodaySCalendarScript1 = entity(
  'script.read_today_s_calendar',
  "Read today's calendar",
);
globalThis.goodMorningRoutineScript1 = entity(
  'script.good_morning_routine',
  'Good morning routine',
);
globalThis.turnEverythingOff_2Script1 = entity(
  'script.turn_everything_off_2',
  'Turn everything off',
);
globalThis.dismissWelcomeMessageScript1 = entity(
  'script.dismiss_welcome_message',
  'Dismiss Welcome Message',
);
globalThis.groupSpeakersScript1 = entity(
  'script.group_speakers',
  'Join Speakers',
);
globalThis.unjoinSpeakersScript1 = entity(
  'script.unjoin_speakers',
  'Unjoin Speakers',
);
