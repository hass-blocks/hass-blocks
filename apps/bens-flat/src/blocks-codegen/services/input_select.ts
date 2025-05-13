import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Reloads helpers from the YAML-configuration.
   */
  var reloadInputSelect: () => Block;
  /**
   * Selects the first option.
   */
  var selectFirstInputSelect: (
    target: IEntity<`input_select.${string}`> | IArea,
    params?: SelectFirstInputSelectProps,
  ) => Block;
  /**
   * Selects the last option.
   */
  var selectLastInputSelect: (
    target: IEntity<`input_select.${string}`> | IArea,
    params?: SelectLastInputSelectProps,
  ) => Block;
  /**
   * Selects the next option.
   */
  var selectNextInputSelect: (
    target: IEntity<`input_select.${string}`> | IArea,
    params?: SelectNextInputSelectProps,
  ) => Block;
  /**
   * Selects an option.
   */
  var selectOptionInputSelect: (
    target: IEntity<`input_select.${string}`> | IArea,
    params: SelectOptionInputSelectProps,
  ) => Block;
  /**
   * Selects the previous option.
   */
  var selectPreviousInputSelect: (
    target: IEntity<`input_select.${string}`> | IArea,
    params?: SelectPreviousInputSelectProps,
  ) => Block;
  /**
   * Sets the options.
   */
  var setOptionsInputSelect: (
    target: IEntity<`input_select.${string}`> | IArea,
    params: SetOptionsInputSelectProps,
  ) => Block;
}

globalThis.reloadInputSelect = () =>
  serviceCall({
    name: `Call input_select.reload`,
    params: {
      domain: 'input_select',
      service: 'reload',
    },
  });

export interface SelectFirstInputSelectProps {}

globalThis.selectFirstInputSelect = (target, params) =>
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

globalThis.selectLastInputSelect = (target, params) =>
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

globalThis.selectNextInputSelect = (target, params) =>
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

globalThis.selectOptionInputSelect = (target, params) =>
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

globalThis.selectPreviousInputSelect = (target, params) =>
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

globalThis.setOptionsInputSelect = (target, params) =>
  serviceCall({
    name: `Call input_select.set_options`,
    params: {
      domain: 'input_select',
      service: 'set_options',
      service_data: params,
    },
    target,
  });
