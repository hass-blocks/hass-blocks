import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  interface TriggerAutomationProps {
    /**
     * Defines whether or not the conditions will be skipped.
     */
    skip_condition?: boolean;
  }

  /**
   * Triggers the actions of an automation.
   */
  var triggerAutomation: (
    target: IEntity<`automation.${string}`> | IArea,
    params: TriggerAutomationProps,
  ) => Block;

  /**
   * Toggles (enable / disable) an automation.
   */
  var toggleAutomation: (
    target: IEntity<`automation.${string}`> | IArea,
  ) => Block;

  /**
   * Enables an automation.
   */
  var turnOnAutomation: (
    target: IEntity<`automation.${string}`> | IArea,
  ) => Block;

  interface TurnOffAutomationProps {
    /**
     * Stops currently running actions.
     */
    stop_actions?: boolean;
  }

  /**
   * Disables an automation.
   */
  var turnOffAutomation: (
    target: IEntity<`automation.${string}`> | IArea,
    params: TurnOffAutomationProps,
  ) => Block;

  /**
   * Reloads the automation configuration.
   */
  var reloadAutomation: () => Block;
}

globalThis.triggerAutomation = (target, params) =>
  serviceCall({
    name: `Call automation.trigger`,
    params: {
      domain: 'automation',
      service: 'trigger',
      service_data: params,
    },
    target,
  });

globalThis.toggleAutomation = (target) =>
  serviceCall({
    name: `Call automation.toggle`,
    params: {
      domain: 'automation',
      service: 'toggle',
    },
    target,
  });

globalThis.turnOnAutomation = (target) =>
  serviceCall({
    name: `Call automation.turn_on`,
    params: {
      domain: 'automation',
      service: 'turn_on',
    },
    target,
  });

globalThis.turnOffAutomation = (target, params) =>
  serviceCall({
    name: `Call automation.turn_off`,
    params: {
      domain: 'automation',
      service: 'turn_off',
      service_data: params,
    },
    target,
  });

globalThis.reloadAutomation = () =>
  serviceCall({
    name: `Call automation.reload`,
    params: {
      domain: 'automation',
      service: 'reload',
    },
  });
