import { serviceCall, ITarget } from '@hass-blocks/core';

export interface TriggerAutomationProps {
  /**
   * Defines whether or not the conditions will be skipped.
   */
  skip_condition?: boolean;
}

/**
 * Triggers the actions of an automation.
 */
export const triggerAutomation = (
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

/**
 * Toggles (enable / disable) an automation.
 */
export const toggleAutomation = (
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

/**
 * Enables an automation.
 */
export const turnOnAutomation = (
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

/**
 * Disables an automation.
 */
export const turnOffAutomation = (
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

/**
 * Reloads the automation configuration.
 */
export const reloadAutomation = (target: ITarget) =>
  serviceCall({
    name: `Call automation.reload`,
    params: {
      domain: 'automation',
      service: 'reload',
    },
  });
