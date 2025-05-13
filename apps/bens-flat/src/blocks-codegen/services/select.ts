import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  /**
   * Selects the first option.
   */
  var selectFirstSelect: (target: IEntity<`select.${string}`> | IArea) => Block;

  /**
   * Selects the last option.
   */
  var selectLastSelect: (target: IEntity<`select.${string}`> | IArea) => Block;

  interface SelectNextSelectProps {
    /**
     * If the option should cycle from the last to the first.
     */
    cycle?: boolean;
  }

  /**
   * Selects the next option.
   */
  var selectNextSelect: (
    target: IEntity<`select.${string}`> | IArea,
    params: SelectNextSelectProps,
  ) => Block;

  interface SelectOptionSelectProps {
    /**
     * Option to be selected.
     */
    option: string;
  }

  /**
   * Selects an option.
   */
  var selectOptionSelect: (
    target: IEntity<`select.${string}`> | IArea,
    params?: SelectOptionSelectProps,
  ) => Block;

  interface SelectPreviousSelectProps {
    /**
     * If the option should cycle from the first to the last.
     */
    cycle?: boolean;
  }

  /**
   * Selects the previous option.
   */
  var selectPreviousSelect: (
    target: IEntity<`select.${string}`> | IArea,
    params: SelectPreviousSelectProps,
  ) => Block;
}

globalThis.selectFirstSelect = (target) =>
  serviceCall({
    name: `Call select.select_first`,
    params: {
      domain: 'select',
      service: 'select_first',
    },
    target,
  });

globalThis.selectLastSelect = (target) =>
  serviceCall({
    name: `Call select.select_last`,
    params: {
      domain: 'select',
      service: 'select_last',
    },
    target,
  });

globalThis.selectNextSelect = (target, params) =>
  serviceCall({
    name: `Call select.select_next`,
    params: {
      domain: 'select',
      service: 'select_next',
      service_data: params,
    },
    target,
  });

globalThis.selectOptionSelect = (target, params) =>
  serviceCall({
    name: `Call select.select_option`,
    params: {
      domain: 'select',
      service: 'select_option',
      service_data: params,
    },
    target,
  });

globalThis.selectPreviousSelect = (target, params) =>
  serviceCall({
    name: `Call select.select_previous`,
    params: {
      domain: 'select',
      service: 'select_previous',
      service_data: params,
    },
    target,
  });
