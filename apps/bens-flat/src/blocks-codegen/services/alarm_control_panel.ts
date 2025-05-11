import { serviceCall, ITarget } from '@hass-blocks/core';

export interface AlarmDisarmAlarmControlPanelProps {
  /**
   * Code to disarm the alarm.
   */
  code?: string;
}

/**
 * Disarms the alarm.
 */
export const alarmDisarmAlarmControlPanel = (
  target: ITarget,
  params?: AlarmDisarmAlarmControlPanelProps,
) =>
  serviceCall({
    name: `Call alarm_control_panel.alarm_disarm`,
    params: {
      domain: 'alarm_control_panel',
      service: 'alarm_disarm',
      service_data: params,
    },
    target,
  });

export interface AlarmArmHomeAlarmControlPanelProps {
  /**
   * Code to arm the alarm.
   */
  code?: string;
}

/**
 * Arms the alarm in the home mode.
 */
export const alarmArmHomeAlarmControlPanel = (
  target: ITarget,
  params?: AlarmArmHomeAlarmControlPanelProps,
) =>
  serviceCall({
    name: `Call alarm_control_panel.alarm_arm_home`,
    params: {
      domain: 'alarm_control_panel',
      service: 'alarm_arm_home',
      service_data: params,
    },
    target,
  });

export interface AlarmArmAwayAlarmControlPanelProps {
  /**
   * Code to arm the alarm.
   */
  code?: string;
}

/**
 * Arms the alarm in the away mode.
 */
export const alarmArmAwayAlarmControlPanel = (
  target: ITarget,
  params?: AlarmArmAwayAlarmControlPanelProps,
) =>
  serviceCall({
    name: `Call alarm_control_panel.alarm_arm_away`,
    params: {
      domain: 'alarm_control_panel',
      service: 'alarm_arm_away',
      service_data: params,
    },
    target,
  });

export interface AlarmArmNightAlarmControlPanelProps {
  /**
   * Code to arm the alarm.
   */
  code?: string;
}

/**
 * Arms the alarm in the night mode.
 */
export const alarmArmNightAlarmControlPanel = (
  target: ITarget,
  params?: AlarmArmNightAlarmControlPanelProps,
) =>
  serviceCall({
    name: `Call alarm_control_panel.alarm_arm_night`,
    params: {
      domain: 'alarm_control_panel',
      service: 'alarm_arm_night',
      service_data: params,
    },
    target,
  });

export interface AlarmArmVacationAlarmControlPanelProps {
  /**
   * Code to arm the alarm.
   */
  code?: string;
}

/**
 * Arms the alarm in the vacation mode.
 */
export const alarmArmVacationAlarmControlPanel = (
  target: ITarget,
  params?: AlarmArmVacationAlarmControlPanelProps,
) =>
  serviceCall({
    name: `Call alarm_control_panel.alarm_arm_vacation`,
    params: {
      domain: 'alarm_control_panel',
      service: 'alarm_arm_vacation',
      service_data: params,
    },
    target,
  });

export interface AlarmArmCustomBypassAlarmControlPanelProps {
  /**
   * Code to arm the alarm.
   */
  code?: string;
}

/**
 * Arms the alarm while allowing to bypass a custom area.
 */
export const alarmArmCustomBypassAlarmControlPanel = (
  target: ITarget,
  params?: AlarmArmCustomBypassAlarmControlPanelProps,
) =>
  serviceCall({
    name: `Call alarm_control_panel.alarm_arm_custom_bypass`,
    params: {
      domain: 'alarm_control_panel',
      service: 'alarm_arm_custom_bypass',
      service_data: params,
    },
    target,
  });

export interface AlarmTriggerAlarmControlPanelProps {
  /**
   * Code to arm the alarm.
   */
  code?: string;
}

/**
 * Triggers the alarm manually.
 */
export const alarmTriggerAlarmControlPanel = (
  target: ITarget,
  params?: AlarmTriggerAlarmControlPanelProps,
) =>
  serviceCall({
    name: `Call alarm_control_panel.alarm_trigger`,
    params: {
      domain: 'alarm_control_panel',
      service: 'alarm_trigger',
      service_data: params,
    },
    target,
  });
