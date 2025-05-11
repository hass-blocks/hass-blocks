import { serviceCall, ITarget } from '@hass-blocks/core';

/**
 * Reloads helpers from the YAML-configuration.
 */
export const reloadInputSelect = (target: ITarget) =>
  serviceCall({
    name: `Call input_select.reload`,
    params: {
      domain: 'input_select',
      service: 'reload',
    },
  });

export interface SelectFirstInputSelectProps {}

/**
 * Selects the first option.
 */
export const selectFirstInputSelect = (
  target: ITarget,
  params?: SelectFirstInputSelectProps,
) =>
  serviceCall({
    name: `Call input_select.select_first`,
    params: {
      domain: 'input_select',
      service: 'select_first',
      service_data: params,
    },
    target,
  });

export interface SelectLastInputSelectProps {}

/**
 * Selects the last option.
 */
export const selectLastInputSelect = (
  target: ITarget,
  params?: SelectLastInputSelectProps,
) =>
  serviceCall({
    name: `Call input_select.select_last`,
    params: {
      domain: 'input_select',
      service: 'select_last',
      service_data: params,
    },
    target,
  });

export interface SelectNextInputSelectProps {
  /**
   * If the option should cycle from the last to the first option on the list.
   */
  cycle?: boolean;
}

/**
 * Selects the next option.
 */
export const selectNextInputSelect = (
  target: ITarget,
  params?: SelectNextInputSelectProps,
) =>
  serviceCall({
    name: `Call input_select.select_next`,
    params: {
      domain: 'input_select',
      service: 'select_next',
      service_data: params,
    },
    target,
  });

export interface SelectOptionInputSelectProps {
  /**
   * Option to be selected.
   */
  option: string;
}

/**
 * Selects an option.
 */
export const selectOptionInputSelect = (
  target: ITarget,
  params: SelectOptionInputSelectProps,
) =>
  serviceCall({
    name: `Call input_select.select_option`,
    params: {
      domain: 'input_select',
      service: 'select_option',
      service_data: params,
    },
    target,
  });

export interface SelectPreviousInputSelectProps {
  /**
   * If the option should cycle from the first to the last option on the list.
   */
  cycle?: boolean;
}

/**
 * Selects the previous option.
 */
export const selectPreviousInputSelect = (
  target: ITarget,
  params?: SelectPreviousInputSelectProps,
) =>
  serviceCall({
    name: `Call input_select.select_previous`,
    params: {
      domain: 'input_select',
      service: 'select_previous',
      service_data: params,
    },
    target,
  });

export interface SetOptionsInputSelectProps {
  /**
   * List of options.
   */
  options: string;
}

/**
 * Sets the options.
 */
export const setOptionsInputSelect = (
  target: ITarget,
  params: SetOptionsInputSelectProps,
) =>
  serviceCall({
    name: `Call input_select.set_options`,
    params: {
      domain: 'input_select',
      service: 'set_options',
      service_data: params,
    },
    target,
  });
