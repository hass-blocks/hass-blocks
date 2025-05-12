import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Triggers the actions of an automation.
   */
  var triggerAutomation: (
    target: ITarget,
    params?: TriggerAutomationProps,
  ) => Block;
  /**
   * Toggles (enable / disable) an automation.
   */
  var toggleAutomation: (
    target: ITarget,
    params?: ToggleAutomationProps,
  ) => Block;
  /**
   * Enables an automation.
   */
  var turnOnAutomation: (
    target: ITarget,
    params?: TurnOnAutomationProps,
  ) => Block;
  /**
   * Disables an automation.
   */
  var turnOffAutomation: (
    target: ITarget,
    params?: TurnOffAutomationProps,
  ) => Block;
  /**
   * Reloads the automation configuration.
   */
  var reloadAutomation: (target: ITarget) => Block;
}

export interface TriggerAutomationProps {
  /**
   * Defines whether or not the conditions will be skipped.
   */
  skip_condition?: boolean;
}

globalThis.triggerAutomation = (
  target: ITarget,
  params?: TriggerAutomationProps,
) =>
  serviceCall({
    name: `Call automation.trigger`,
    params: {
      domain: 'automation',
      service: 'trigger',
      service_data: params,
    },
    target,
  });

export interface ToggleAutomationProps {}

globalThis.toggleAutomation = (
  target: ITarget,
  params?: ToggleAutomationProps,
) =>
  serviceCall({
    name: `Call automation.toggle`,
    params: {
      domain: 'automation',
      service: 'toggle',
      service_data: params,
    },
    target,
  });

export interface TurnOnAutomationProps {}

globalThis.turnOnAutomation = (
  target: ITarget,
  params?: TurnOnAutomationProps,
) =>
  serviceCall({
    name: `Call automation.turn_on`,
    params: {
      domain: 'automation',
      service: 'turn_on',
      service_data: params,
    },
    target,
  });

export interface TurnOffAutomationProps {
  /**
   * Stops currently running actions.
   */
  stop_actions?: boolean;
}

globalThis.turnOffAutomation = (
  target: ITarget,
  params?: TurnOffAutomationProps,
) =>
  serviceCall({
    name: `Call automation.turn_off`,
    params: {
      domain: 'automation',
      service: 'turn_off',
      service_data: params,
    },
    target,
  });

globalThis.reloadAutomation = (target: ITarget) =>
  serviceCall({
    name: `Call automation.reload`,
    params: {
      domain: 'automation',
      service: 'reload',
    },
  });
