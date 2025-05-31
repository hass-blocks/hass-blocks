import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface AlarmDisarmAlarmControlPanelProps {
    /**
     * Code to disarm the alarm.
     */
    code?: string;
  }

  /**
   * Disarms the alarm.
   */
  var alarmDisarmAlarmControlPanel: (
    target: IEntity<`alarm_control_panel.${string}`> | IArea,
    params?: AlarmDisarmAlarmControlPanelProps,
  ) => Block<
    Partial<ServiceCallArgs<AlarmDisarmAlarmControlPanelProps>> | undefined,
    void
  >;

  interface AlarmArmHomeAlarmControlPanelProps {
    /**
     * Code to arm the alarm.
     */
    code?: string;
  }

  /**
   * Arms the alarm in the home mode.
   */
  var alarmArmHomeAlarmControlPanel: (
    target: IEntity<`alarm_control_panel.${string}`> | IArea,
    params?: AlarmArmHomeAlarmControlPanelProps,
  ) => Block<
    Partial<ServiceCallArgs<AlarmArmHomeAlarmControlPanelProps>> | undefined,
    void
  >;

  interface AlarmArmAwayAlarmControlPanelProps {
    /**
     * Code to arm the alarm.
     */
    code?: string;
  }

  /**
   * Arms the alarm in the away mode.
   */
  var alarmArmAwayAlarmControlPanel: (
    target: IEntity<`alarm_control_panel.${string}`> | IArea,
    params?: AlarmArmAwayAlarmControlPanelProps,
  ) => Block<
    Partial<ServiceCallArgs<AlarmArmAwayAlarmControlPanelProps>> | undefined,
    void
  >;

  interface AlarmArmNightAlarmControlPanelProps {
    /**
     * Code to arm the alarm.
     */
    code?: string;
  }

  /**
   * Arms the alarm in the night mode.
   */
  var alarmArmNightAlarmControlPanel: (
    target: IEntity<`alarm_control_panel.${string}`> | IArea,
    params?: AlarmArmNightAlarmControlPanelProps,
  ) => Block<
    Partial<ServiceCallArgs<AlarmArmNightAlarmControlPanelProps>> | undefined,
    void
  >;

  interface AlarmArmVacationAlarmControlPanelProps {
    /**
     * Code to arm the alarm.
     */
    code?: string;
  }

  /**
   * Arms the alarm in the vacation mode.
   */
  var alarmArmVacationAlarmControlPanel: (
    target: IEntity<`alarm_control_panel.${string}`> | IArea,
    params?: AlarmArmVacationAlarmControlPanelProps,
  ) => Block<
    | Partial<ServiceCallArgs<AlarmArmVacationAlarmControlPanelProps>>
    | undefined,
    void
  >;

  interface AlarmArmCustomBypassAlarmControlPanelProps {
    /**
     * Code to arm the alarm.
     */
    code?: string;
  }

  /**
   * Arms the alarm while allowing to bypass a custom area.
   */
  var alarmArmCustomBypassAlarmControlPanel: (
    target: IEntity<`alarm_control_panel.${string}`> | IArea,
    params?: AlarmArmCustomBypassAlarmControlPanelProps,
  ) => Block<
    | Partial<ServiceCallArgs<AlarmArmCustomBypassAlarmControlPanelProps>>
    | undefined,
    void
  >;

  interface AlarmTriggerAlarmControlPanelProps {
    /**
     * Code to arm the alarm.
     */
    code?: string;
  }

  /**
   * Triggers the alarm manually.
   */
  var alarmTriggerAlarmControlPanel: (
    target: IEntity<`alarm_control_panel.${string}`> | IArea,
    params?: AlarmTriggerAlarmControlPanelProps,
  ) => Block<
    Partial<ServiceCallArgs<AlarmTriggerAlarmControlPanelProps>> | undefined,
    void
  >;
}

globalThis.alarmDisarmAlarmControlPanel = (target, params) =>
  serviceCall({
    name: `Call alarm_control_panel.alarm_disarm`,
    params: {
      domain: 'alarm_control_panel',
      service: 'alarm_disarm',
      service_data: params,
    },
    target,
  });

globalThis.alarmArmHomeAlarmControlPanel = (target, params) =>
  serviceCall({
    name: `Call alarm_control_panel.alarm_arm_home`,
    params: {
      domain: 'alarm_control_panel',
      service: 'alarm_arm_home',
      service_data: params,
    },
    target,
  });

globalThis.alarmArmAwayAlarmControlPanel = (target, params) =>
  serviceCall({
    name: `Call alarm_control_panel.alarm_arm_away`,
    params: {
      domain: 'alarm_control_panel',
      service: 'alarm_arm_away',
      service_data: params,
    },
    target,
  });

globalThis.alarmArmNightAlarmControlPanel = (target, params) =>
  serviceCall({
    name: `Call alarm_control_panel.alarm_arm_night`,
    params: {
      domain: 'alarm_control_panel',
      service: 'alarm_arm_night',
      service_data: params,
    },
    target,
  });

globalThis.alarmArmVacationAlarmControlPanel = (target, params) =>
  serviceCall({
    name: `Call alarm_control_panel.alarm_arm_vacation`,
    params: {
      domain: 'alarm_control_panel',
      service: 'alarm_arm_vacation',
      service_data: params,
    },
    target,
  });

globalThis.alarmArmCustomBypassAlarmControlPanel = (target, params) =>
  serviceCall({
    name: `Call alarm_control_panel.alarm_arm_custom_bypass`,
    params: {
      domain: 'alarm_control_panel',
      service: 'alarm_arm_custom_bypass',
      service_data: params,
    },
    target,
  });

globalThis.alarmTriggerAlarmControlPanel = (target, params) =>
  serviceCall({
    name: `Call alarm_control_panel.alarm_trigger`,
    params: {
      domain: 'alarm_control_panel',
      service: 'alarm_trigger',
      service_data: params,
    },
    target,
  });
