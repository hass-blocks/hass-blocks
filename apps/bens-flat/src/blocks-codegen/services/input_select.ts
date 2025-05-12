import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Reloads helpers from the YAML-configuration.
   */
  var reloadInputSelect: (target: ITarget) => Block;
  /**
   * Selects the first option.
   */
  var selectFirstInputSelect: (
    target: ITarget,
    params?: SelectFirstInputSelectProps,
  ) => Block;
  /**
   * Selects the last option.
   */
  var selectLastInputSelect: (
    target: ITarget,
    params?: SelectLastInputSelectProps,
  ) => Block;
  /**
   * Selects the next option.
   */
  var selectNextInputSelect: (
    target: ITarget,
    params?: SelectNextInputSelectProps,
  ) => Block;
  /**
   * Selects an option.
   */
  var selectOptionInputSelect: (
    target: ITarget,
    params: SelectOptionInputSelectProps,
  ) => Block;
  /**
   * Selects the previous option.
   */
  var selectPreviousInputSelect: (
    target: ITarget,
    params?: SelectPreviousInputSelectProps,
  ) => Block;
  /**
   * Sets the options.
   */
  var setOptionsInputSelect: (
    target: ITarget,
    params: SetOptionsInputSelectProps,
  ) => Block;
}

globalThis.reloadInputSelect = (target: ITarget) =>
  serviceCall({
    name: `Call input_select.reload`,
    params: {
      domain: 'input_select',
      service: 'reload',
    },
  });

export interface SelectFirstInputSelectProps {}

globalThis.selectFirstInputSelect = (
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

globalThis.selectLastInputSelect = (
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

globalThis.selectNextInputSelect = (
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

globalThis.selectOptionInputSelect = (
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

globalThis.selectPreviousInputSelect = (
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

globalThis.setOptionsInputSelect = (
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
