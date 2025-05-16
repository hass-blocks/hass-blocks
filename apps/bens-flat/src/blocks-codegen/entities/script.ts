import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var turnTvOnScript: IEntity<`script.turn_tv_on`>;
  var turnTvModeOnScript: IEntity<`script.turn_tv_mode_on`>;
  var boostBoilerScript: IEntity<`script.boost_boiler`>;
  var updateAllHacsItemsScript: IEntity<`script.update_all_hacs_items`>;
  var todoListScript: IEntity<`script.todo_list`>;
  var openAiTtsScript: IEntity<`script.open_ai_tts`>;
  var readTodaySCalendarScript: IEntity<`script.read_today_s_calendar`>;
  var goodMorningRoutineScript: IEntity<`script.good_morning_routine`>;
  var turnEverythingOff_2Script: IEntity<`script.turn_everything_off_2`>;
  var dismissWelcomeMessageScript: IEntity<`script.dismiss_welcome_message`>;
  var groupSpeakersScript: IEntity<`script.group_speakers`>;
  var unjoinSpeakersScript: IEntity<`script.unjoin_speakers`>;
}

globalThis.turnTvOnScript = entity('script.turn_tv_on');
globalThis.turnTvModeOnScript = entity('script.turn_tv_mode_on');
globalThis.boostBoilerScript = entity('script.boost_boiler');
globalThis.updateAllHacsItemsScript = entity('script.update_all_hacs_items');
globalThis.todoListScript = entity('script.todo_list');
globalThis.openAiTtsScript = entity('script.open_ai_tts');
globalThis.readTodaySCalendarScript = entity('script.read_today_s_calendar');
globalThis.goodMorningRoutineScript = entity('script.good_morning_routine');
globalThis.turnEverythingOff_2Script = entity('script.turn_everything_off_2');
globalThis.dismissWelcomeMessageScript = entity(
  'script.dismiss_welcome_message',
);
globalThis.groupSpeakersScript = entity('script.group_speakers');
globalThis.unjoinSpeakersScript = entity('script.unjoin_speakers');
