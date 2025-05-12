import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Selects the first option.
   */
  var selectFirstSelect: (
    target: ITarget,
    params?: SelectFirstSelectProps,
  ) => Block;
  /**
   * Selects the last option.
   */
  var selectLastSelect: (
    target: ITarget,
    params?: SelectLastSelectProps,
  ) => Block;
  /**
   * Selects the next option.
   */
  var selectNextSelect: (
    target: ITarget,
    params?: SelectNextSelectProps,
  ) => Block;
  /**
   * Selects an option.
   */
  var selectOptionSelect: (
    target: ITarget,
    params: SelectOptionSelectProps,
  ) => Block;
  /**
   * Selects the previous option.
   */
  var selectPreviousSelect: (
    target: ITarget,
    params?: SelectPreviousSelectProps,
  ) => Block;
}

export interface SelectFirstSelectProps {}

globalThis.selectFirstSelect = (
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

globalThis.selectLastSelect = (
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

globalThis.selectNextSelect = (
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

globalThis.selectOptionSelect = (
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

globalThis.selectPreviousSelect = (
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
