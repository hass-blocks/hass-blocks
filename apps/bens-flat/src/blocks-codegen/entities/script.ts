import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var turnTvOnScript: IEntity<`script.${string}`>;
  var turnTvModeOnScript: IEntity<`script.${string}`>;
  var boostBoilerScript: IEntity<`script.${string}`>;
  var updateAllHacsItemsScript: IEntity<`script.${string}`>;
  var todoListScript: IEntity<`script.${string}`>;
  var openAiTtsScript: IEntity<`script.${string}`>;
  var readTodaySCalendarScript: IEntity<`script.${string}`>;
  var goodMorningRoutineScript: IEntity<`script.${string}`>;
  var turnEverythingOff_2Script: IEntity<`script.${string}`>;
  var dismissWelcomeMessageScript: IEntity<`script.${string}`>;
  var groupSpeakersScript: IEntity<`script.${string}`>;
  var unjoinSpeakersScript: IEntity<`script.${string}`>;
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
