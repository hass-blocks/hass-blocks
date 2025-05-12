import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  var turnTvOnScript: (target: ITarget) => Block;
  var turnTvModeOnScript: (target: ITarget) => Block;
  var boostBoilerScript: (target: ITarget) => Block;
  var updateAllHacsItemsScript: (target: ITarget) => Block;
  var todoListScript: (target: ITarget, params: TodoListScriptProps) => Block;
  var openAiTtsScript: (target: ITarget, params: OpenAiTtsScriptProps) => Block;
  var readTodaySCalendarScript: (
    target: ITarget,
    params?: ReadTodaySCalendarScriptProps,
  ) => Block;
  var goodMorningRoutineScript: (target: ITarget) => Block;
  var turnEverythingOff_2Script: (target: ITarget) => Block;
  var dismissWelcomeMessageScript: (target: ITarget) => Block;
  var groupSpeakersScript: (target: ITarget) => Block;
  var unjoinSpeakersScript: (target: ITarget) => Block;
  /**
   * Reloads all the available scripts.
   */
  var reloadScript: (target: ITarget) => Block;
  /**
   * Runs the sequence of actions defined in a script.
   */
  var turnOnScript: (target: ITarget, params?: TurnOnScriptProps) => Block;
  /**
   * Stops a running script.
   */
  var turnOffScript: (target: ITarget, params?: TurnOffScriptProps) => Block;
  /**
   * Starts a script if it isn't running, stops it otherwise.
   */
  var toggleScript: (target: ITarget, params?: ToggleScriptProps) => Block;
}

globalThis.turnTvOnScript = (target: ITarget) =>
  serviceCall({
    name: `Call script.turn_tv_on`,
    params: {
      domain: 'script',
      service: 'turn_tv_on',
    },
  });

globalThis.turnTvModeOnScript = (target: ITarget) =>
  serviceCall({
    name: `Call script.turn_tv_mode_on`,
    params: {
      domain: 'script',
      service: 'turn_tv_mode_on',
    },
  });

globalThis.boostBoilerScript = (target: ITarget) =>
  serviceCall({
    name: `Call script.boost_boiler`,
    params: {
      domain: 'script',
      service: 'boost_boiler',
    },
  });

globalThis.updateAllHacsItemsScript = (target: ITarget) =>
  serviceCall({
    name: `Call script.update_all_hacs_items`,
    params: {
      domain: 'script',
      service: 'update_all_hacs_items',
    },
  });

export interface TodoListScriptProps {
  player: string;
}

globalThis.todoListScript = (target: ITarget, params: TodoListScriptProps) =>
  serviceCall({
    name: `Call script.todo_list`,
    params: {
      domain: 'script',
      service: 'todo_list',
      service_data: params,
    },
  });

export interface OpenAiTtsScriptProps {
  message: string;
  player: string;
}

globalThis.openAiTtsScript = (target: ITarget, params: OpenAiTtsScriptProps) =>
  serviceCall({
    name: `Call script.open_ai_tts`,
    params: {
      domain: 'script',
      service: 'open_ai_tts',
      service_data: params,
    },
  });

export interface ReadTodaySCalendarScriptProps {
  player?: string;
}

globalThis.readTodaySCalendarScript = (
  target: ITarget,
  params?: ReadTodaySCalendarScriptProps,
) =>
  serviceCall({
    name: `Call script.read_today_s_calendar`,
    params: {
      domain: 'script',
      service: 'read_today_s_calendar',
      service_data: params,
    },
  });

globalThis.goodMorningRoutineScript = (target: ITarget) =>
  serviceCall({
    name: `Call script.good_morning_routine`,
    params: {
      domain: 'script',
      service: 'good_morning_routine',
    },
  });

globalThis.turnEverythingOff_2Script = (target: ITarget) =>
  serviceCall({
    name: `Call script.turn_everything_off_2`,
    params: {
      domain: 'script',
      service: 'turn_everything_off_2',
    },
  });

globalThis.dismissWelcomeMessageScript = (target: ITarget) =>
  serviceCall({
    name: `Call script.dismiss_welcome_message`,
    params: {
      domain: 'script',
      service: 'dismiss_welcome_message',
    },
  });

globalThis.groupSpeakersScript = (target: ITarget) =>
  serviceCall({
    name: `Call script.group_speakers`,
    params: {
      domain: 'script',
      service: 'group_speakers',
    },
  });

globalThis.unjoinSpeakersScript = (target: ITarget) =>
  serviceCall({
    name: `Call script.unjoin_speakers`,
    params: {
      domain: 'script',
      service: 'unjoin_speakers',
    },
  });

globalThis.reloadScript = (target: ITarget) =>
  serviceCall({
    name: `Call script.reload`,
    params: {
      domain: 'script',
      service: 'reload',
    },
  });

export interface TurnOnScriptProps {}

globalThis.turnOnScript = (target: ITarget, params?: TurnOnScriptProps) =>
  serviceCall({
    name: `Call script.turn_on`,
    params: {
      domain: 'script',
      service: 'turn_on',
      service_data: params,
    },
    target,
  });

export interface TurnOffScriptProps {}

globalThis.turnOffScript = (target: ITarget, params?: TurnOffScriptProps) =>
  serviceCall({
    name: `Call script.turn_off`,
    params: {
      domain: 'script',
      service: 'turn_off',
      service_data: params,
    },
    target,
  });

export interface ToggleScriptProps {}

globalThis.toggleScript = (target: ITarget, params?: ToggleScriptProps) =>
  serviceCall({
    name: `Call script.toggle`,
    params: {
      domain: 'script',
      service: 'toggle',
      service_data: params,
    },
    target,
  });
