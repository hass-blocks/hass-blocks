import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Disarms the alarm.
   */
  var alarmDisarmAlarmControlPanel: (
    target: ITarget,
    params?: AlarmDisarmAlarmControlPanelProps,
  ) => Block;
  /**
   * Arms the alarm in the home mode.
   */
  var alarmArmHomeAlarmControlPanel: (
    target: ITarget,
    params?: AlarmArmHomeAlarmControlPanelProps,
  ) => Block;
  /**
   * Arms the alarm in the away mode.
   */
  var alarmArmAwayAlarmControlPanel: (
    target: ITarget,
    params?: AlarmArmAwayAlarmControlPanelProps,
  ) => Block;
  /**
   * Arms the alarm in the night mode.
   */
  var alarmArmNightAlarmControlPanel: (
    target: ITarget,
    params?: AlarmArmNightAlarmControlPanelProps,
  ) => Block;
  /**
   * Arms the alarm in the vacation mode.
   */
  var alarmArmVacationAlarmControlPanel: (
    target: ITarget,
    params?: AlarmArmVacationAlarmControlPanelProps,
  ) => Block;
  /**
   * Arms the alarm while allowing to bypass a custom area.
   */
  var alarmArmCustomBypassAlarmControlPanel: (
    target: ITarget,
    params?: AlarmArmCustomBypassAlarmControlPanelProps,
  ) => Block;
  /**
   * Triggers the alarm manually.
   */
  var alarmTriggerAlarmControlPanel: (
    target: ITarget,
    params?: AlarmTriggerAlarmControlPanelProps,
  ) => Block;
}

export interface AlarmDisarmAlarmControlPanelProps {
  /**
   * Code to disarm the alarm.
   */
  code?: string;
}

globalThis.alarmDisarmAlarmControlPanel = (
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

globalThis.alarmArmHomeAlarmControlPanel = (
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

globalThis.alarmArmAwayAlarmControlPanel = (
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

globalThis.alarmArmNightAlarmControlPanel = (
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

globalThis.alarmArmVacationAlarmControlPanel = (
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

globalThis.alarmArmCustomBypassAlarmControlPanel = (
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

globalThis.alarmTriggerAlarmControlPanel = (
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
