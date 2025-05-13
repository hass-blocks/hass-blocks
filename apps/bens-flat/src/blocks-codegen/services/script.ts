import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  var turnTvOnScript: () => Block;

  var turnTvModeOnScript: () => Block;

  var boostBoilerScript: () => Block;

  var updateAllHacsItemsScript: () => Block;

  interface TodoListScriptProps {
    player: string;
  }

  var todoListScript: (params?: TodoListScriptProps) => Block;

  interface OpenAiTtsScriptProps {
    message: string;
    player: string;
  }

  var openAiTtsScript: (params?: OpenAiTtsScriptProps) => Block;

  interface ReadTodaySCalendarScriptProps {
    player?: string;
  }

  var readTodaySCalendarScript: (
    params: ReadTodaySCalendarScriptProps,
  ) => Block;

  var goodMorningRoutineScript: () => Block;

  var turnEverythingOff_2Script: () => Block;

  var dismissWelcomeMessageScript: () => Block;

  var groupSpeakersScript: () => Block;

  var unjoinSpeakersScript: () => Block;

  /**
   * Reloads all the available scripts.
   */
  var reloadScript: () => Block;

  /**
   * Runs the sequence of actions defined in a script.
   */
  var turnOnScript: (target: IEntity<`script.${string}`> | IArea) => Block;

  /**
   * Stops a running script.
   */
  var turnOffScript: (target: IEntity<`script.${string}`> | IArea) => Block;

  /**
   * Starts a script if it isn't running, stops it otherwise.
   */
  var toggleScript: (target: IEntity<`script.${string}`> | IArea) => Block;
}

globalThis.turnTvOnScript = () =>
  serviceCall({
    name: `Call script.turn_tv_on`,
    params: {
      domain: 'script',
      service: 'turn_tv_on',
    },
  });

globalThis.turnTvModeOnScript = () =>
  serviceCall({
    name: `Call script.turn_tv_mode_on`,
    params: {
      domain: 'script',
      service: 'turn_tv_mode_on',
    },
  });

globalThis.boostBoilerScript = () =>
  serviceCall({
    name: `Call script.boost_boiler`,
    params: {
      domain: 'script',
      service: 'boost_boiler',
    },
  });

globalThis.updateAllHacsItemsScript = () =>
  serviceCall({
    name: `Call script.update_all_hacs_items`,
    params: {
      domain: 'script',
      service: 'update_all_hacs_items',
    },
  });

globalThis.todoListScript = (params) =>
  serviceCall({
    name: `Call script.todo_list`,
    params: {
      domain: 'script',
      service: 'todo_list',
      service_data: params,
    },
  });

globalThis.openAiTtsScript = (params) =>
  serviceCall({
    name: `Call script.open_ai_tts`,
    params: {
      domain: 'script',
      service: 'open_ai_tts',
      service_data: params,
    },
  });

globalThis.readTodaySCalendarScript = (params) =>
  serviceCall({
    name: `Call script.read_today_s_calendar`,
    params: {
      domain: 'script',
      service: 'read_today_s_calendar',
      service_data: params,
    },
  });

globalThis.goodMorningRoutineScript = () =>
  serviceCall({
    name: `Call script.good_morning_routine`,
    params: {
      domain: 'script',
      service: 'good_morning_routine',
    },
  });

globalThis.turnEverythingOff_2Script = () =>
  serviceCall({
    name: `Call script.turn_everything_off_2`,
    params: {
      domain: 'script',
      service: 'turn_everything_off_2',
    },
  });

globalThis.dismissWelcomeMessageScript = () =>
  serviceCall({
    name: `Call script.dismiss_welcome_message`,
    params: {
      domain: 'script',
      service: 'dismiss_welcome_message',
    },
  });

globalThis.groupSpeakersScript = () =>
  serviceCall({
    name: `Call script.group_speakers`,
    params: {
      domain: 'script',
      service: 'group_speakers',
    },
  });

globalThis.unjoinSpeakersScript = () =>
  serviceCall({
    name: `Call script.unjoin_speakers`,
    params: {
      domain: 'script',
      service: 'unjoin_speakers',
    },
  });

globalThis.reloadScript = () =>
  serviceCall({
    name: `Call script.reload`,
    params: {
      domain: 'script',
      service: 'reload',
    },
  });

globalThis.turnOnScript = (target) =>
  serviceCall({
    name: `Call script.turn_on`,
    params: {
      domain: 'script',
      service: 'turn_on',
    },
    target,
  });

globalThis.turnOffScript = (target) =>
  serviceCall({
    name: `Call script.turn_off`,
    params: {
      domain: 'script',
      service: 'turn_off',
    },
    target,
  });

globalThis.toggleScript = (target) =>
  serviceCall({
    name: `Call script.toggle`,
    params: {
      domain: 'script',
      service: 'toggle',
    },
    target,
  });
