import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  /**
   * Selects the first option.
   */
  var selectFirst: (
    target: IEntity<`select.${string}`> | IArea<string>,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Selects the last option.
   */
  var selectLast: (
    target: IEntity<`select.${string}`> | IArea<string>,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface SelectNext {
    /**
     * If the option should cycle from the last to the first.
     */
    cycle?: boolean;
  }

  /**
   * Selects the next option.
   */
  var selectNext: (
    target: IEntity<`select.${string}`> | IArea<string>,
    params?: SelectNext,
  ) => Block<Partial<ServiceCallArgs<SelectNext>> | undefined, void>;

  interface SelectOption {
    /**
     * Option to be selected.
     */
    option: string;
  }

  /**
   * Selects an option.
   */
  var selectOption: (
    target: IEntity<`select.${string}`> | IArea<string>,
    params: SelectOption,
  ) => Block<Partial<ServiceCallArgs<SelectOption>> | undefined, void>;

  interface SelectPrevious {
    /**
     * If the option should cycle from the first to the last.
     */
    cycle?: boolean;
  }

  /**
   * Selects the previous option.
   */
  var selectPrevious: (
    target: IEntity<`select.${string}`> | IArea<string>,
    params?: SelectPrevious,
  ) => Block<Partial<ServiceCallArgs<SelectPrevious>> | undefined, void>;
}

globalThis.selectFirst = (target) =>
  serviceCall({
    name: `Call select.select_first`,
    params: {
      domain: 'select',
      service: 'select_first',
    },
    target,
  });

globalThis.selectLast = (target) =>
  serviceCall({
    name: `Call select.select_last`,
    params: {
      domain: 'select',
      service: 'select_last',
    },
    target,
  });

globalThis.selectNext = (target, params) =>
  serviceCall({
    name: `Call select.select_next`,
    params: {
      domain: 'select',
      service: 'select_next',
      service_data: params,
    },
    target,
  });

globalThis.selectOption = (target, params) =>
  serviceCall({
    name: `Call select.select_option`,
    params: {
      domain: 'select',
      service: 'select_option',
      service_data: params,
    },
    target,
  });

globalThis.selectPrevious = (target, params) =>
  serviceCall({
    name: `Call select.select_previous`,
    params: {
      domain: 'select',
      service: 'select_previous',
      service_data: params,
    },
    target,
  });
