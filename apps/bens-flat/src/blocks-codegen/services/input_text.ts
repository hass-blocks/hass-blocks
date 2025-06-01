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
  var reloadInputText: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;

  interface SetValueInputText {
    /**
     * The target value.
     */
    value: string;
  }

  /**
   * Sets the value.
   */
  var setValueInputText: (
    target: IEntity<`input_text.${string}`> | IArea<string>,
    params: SetValueInputText,
  ) => Block<Partial<ServiceCallArgs<SetValueInputText>> | undefined, void>;
}

globalThis.reloadInputText = () =>
  serviceCall({
    name: `Call input_text.reload`,
    params: {
      domain: 'input_text',
      service: 'reload',
    },
  });

globalThis.setValueInputText = (target, params) =>
  serviceCall({
    name: `Call input_text.set_value`,
    params: {
      domain: 'input_text',
      service: 'set_value',
      service_data: params,
    },
    target,
  });
