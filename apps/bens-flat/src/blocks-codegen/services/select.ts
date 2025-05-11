import { serviceCall, ITarget } from '@hass-blocks/core';

export interface SelectFirstSelectProps {}

/**
 * Selects the first option.
 */
export const selectFirstSelect = (
  target: ITarget,
  params?: SelectFirstSelectProps,
) =>
  serviceCall({
    name: `Call select.select_first`,
    params: {
      domain: 'select',
      service: 'select_first',
      service_data: params,
    },
    target,
  });

export interface SelectLastSelectProps {}

/**
 * Selects the last option.
 */
export const selectLastSelect = (
  target: ITarget,
  params?: SelectLastSelectProps,
) =>
  serviceCall({
    name: `Call select.select_last`,
    params: {
      domain: 'select',
      service: 'select_last',
      service_data: params,
    },
    target,
  });

export interface SelectNextSelectProps {
  /**
   * If the option should cycle from the last to the first.
   */
  cycle?: boolean;
}

/**
 * Selects the next option.
 */
export const selectNextSelect = (
  target: ITarget,
  params?: SelectNextSelectProps,
) =>
  serviceCall({
    name: `Call select.select_next`,
    params: {
      domain: 'select',
      service: 'select_next',
      service_data: params,
    },
    target,
  });

export interface SelectOptionSelectProps {
  /**
   * Option to be selected.
   */
  option: string;
}

/**
 * Selects an option.
 */
export const selectOptionSelect = (
  target: ITarget,
  params: SelectOptionSelectProps,
) =>
  serviceCall({
    name: `Call select.select_option`,
    params: {
      domain: 'select',
      service: 'select_option',
      service_data: params,
    },
    target,
  });

export interface SelectPreviousSelectProps {
  /**
   * If the option should cycle from the first to the last.
   */
  cycle?: boolean;
}

/**
 * Selects the previous option.
 */
export const selectPreviousSelect = (
  target: ITarget,
  params?: SelectPreviousSelectProps,
) =>
  serviceCall({
    name: `Call select.select_previous`,
    params: {
      domain: 'select',
      service: 'select_previous',
      service_data: params,
    },
    target,
  });
