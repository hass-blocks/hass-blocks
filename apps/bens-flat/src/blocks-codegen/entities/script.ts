import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var turnTvOnScript: ITarget;
  var turnTvModeOnScript: ITarget;
  var boostBoilerScript: ITarget;
  var updateAllHacsItemsScript: ITarget;
  var todoListScript: ITarget;
  var openAiTtsScript: ITarget;
  var readTodaySCalendarScript: ITarget;
  var goodMorningRoutineScript: ITarget;
  var turnEverythingOff_2Script: ITarget;
  var dismissWelcomeMessageScript: ITarget;
  var groupSpeakersScript: ITarget;
  var unjoinSpeakersScript: ITarget;
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
