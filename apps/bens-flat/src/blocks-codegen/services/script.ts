import { serviceCall, ITarget } from '@hass-blocks/core';

export const turnTvOnScript = (target: ITarget) =>
  serviceCall({
    name: `Call script.turn_tv_on`,
    params: {
      domain: 'script',
      service: 'turn_tv_on',
    },
  });

export const turnTvModeOnScript = (target: ITarget) =>
  serviceCall({
    name: `Call script.turn_tv_mode_on`,
    params: {
      domain: 'script',
      service: 'turn_tv_mode_on',
    },
  });

export const boostBoilerScript = (target: ITarget) =>
  serviceCall({
    name: `Call script.boost_boiler`,
    params: {
      domain: 'script',
      service: 'boost_boiler',
    },
  });

export const updateAllHacsItemsScript = (target: ITarget) =>
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

export const todoListScript = (target: ITarget, params: TodoListScriptProps) =>
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

export const openAiTtsScript = (
  target: ITarget,
  params: OpenAiTtsScriptProps,
) =>
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

export const readTodaySCalendarScript = (
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

export const goodMorningRoutineScript = (target: ITarget) =>
  serviceCall({
    name: `Call script.good_morning_routine`,
    params: {
      domain: 'script',
      service: 'good_morning_routine',
    },
  });

export const turnEverythingOff_2Script = (target: ITarget) =>
  serviceCall({
    name: `Call script.turn_everything_off_2`,
    params: {
      domain: 'script',
      service: 'turn_everything_off_2',
    },
  });

export const dismissWelcomeMessageScript = (target: ITarget) =>
  serviceCall({
    name: `Call script.dismiss_welcome_message`,
    params: {
      domain: 'script',
      service: 'dismiss_welcome_message',
    },
  });

export const groupSpeakersScript = (target: ITarget) =>
  serviceCall({
    name: `Call script.group_speakers`,
    params: {
      domain: 'script',
      service: 'group_speakers',
    },
  });

export const unjoinSpeakersScript = (target: ITarget) =>
  serviceCall({
    name: `Call script.unjoin_speakers`,
    params: {
      domain: 'script',
      service: 'unjoin_speakers',
    },
  });

/**
 * Reloads all the available scripts.
 */
export const reloadScript = (target: ITarget) =>
  serviceCall({
    name: `Call script.reload`,
    params: {
      domain: 'script',
      service: 'reload',
    },
  });

export interface TurnOnScriptProps {}

/**
 * Runs the sequence of actions defined in a script.
 */
export const turnOnScript = (target: ITarget, params?: TurnOnScriptProps) =>
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

/**
 * Stops a running script.
 */
export const turnOffScript = (target: ITarget, params?: TurnOffScriptProps) =>
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

/**
 * Starts a script if it isn't running, stops it otherwise.
 */
export const toggleScript = (target: ITarget, params?: ToggleScriptProps) =>
  serviceCall({
    name: `Call script.toggle`,
    params: {
      domain: 'script',
      service: 'toggle',
      service_data: params,
    },
    target,
  });
