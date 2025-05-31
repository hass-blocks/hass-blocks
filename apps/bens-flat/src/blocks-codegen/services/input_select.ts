import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  /**
   * Reloads helpers from the YAML-configuration.
   */
  var reloadInputSelect: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;

  /**
   * Selects the first option.
   */
  var selectFirstInputSelect: (
    target: IEntity<`input_select.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Selects the last option.
   */
  var selectLastInputSelect: (
    target: IEntity<`input_select.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface SelectNextInputSelectProps {
    /**
     * If the option should cycle from the last to the first option on the list.
     */
    cycle?: boolean;
  }

  /**
   * Selects the next option.
   */
  var selectNextInputSelect: (
    target: IEntity<`input_select.${string}`> | IArea,
    params?: SelectNextInputSelectProps,
  ) => Block<
    Partial<ServiceCallArgs<SelectNextInputSelectProps>> | undefined,
    void
  >;

  interface SelectOptionInputSelectProps {
    /**
     * Option to be selected.
     */
    option: string;
  }

  /**
   * Selects an option.
   */
  var selectOptionInputSelect: (
    target: IEntity<`input_select.${string}`> | IArea,
    params: SelectOptionInputSelectProps,
  ) => Block<
    Partial<ServiceCallArgs<SelectOptionInputSelectProps>> | undefined,
    void
  >;

  interface SelectPreviousInputSelectProps {
    /**
     * If the option should cycle from the first to the last option on the list.
     */
    cycle?: boolean;
  }

  /**
   * Selects the previous option.
   */
  var selectPreviousInputSelect: (
    target: IEntity<`input_select.${string}`> | IArea,
    params?: SelectPreviousInputSelectProps,
  ) => Block<
    Partial<ServiceCallArgs<SelectPreviousInputSelectProps>> | undefined,
    void
  >;

  interface SetOptionsInputSelectProps {
    /**
     * List of options.
     */
    options: string;
  }

  /**
   * Sets the options.
   */
  var setOptionsInputSelect: (
    target: IEntity<`input_select.${string}`> | IArea,
    params: SetOptionsInputSelectProps,
  ) => Block<
    Partial<ServiceCallArgs<SetOptionsInputSelectProps>> | undefined,
    void
  >;
}

globalThis.reloadInputSelect = () =>
  serviceCall({
    name: `Call input_select.reload`,
    params: {
      domain: 'input_select',
      service: 'reload',
    },
  });

globalThis.selectFirstInputSelect = (target) =>
  serviceCall({
    name: `Call input_select.select_first`,
    params: {
      domain: 'input_select',
      service: 'select_first',
    },
    target,
  });

globalThis.selectLastInputSelect = (target) =>
  serviceCall({
    name: `Call input_select.select_last`,
    params: {
      domain: 'input_select',
      service: 'select_last',
    },
    target,
  });

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
