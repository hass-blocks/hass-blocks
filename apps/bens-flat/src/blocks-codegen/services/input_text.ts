import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Reloads helpers from the YAML-configuration.
   */
  var reloadInputText: () => Block;
  /**
   * Sets the value.
   */
  var setValueInputText: (
    target: IEntity<`input_text.${string}`> | IArea,
    params: SetValueInputTextProps,
  ) => Block;
}

globalThis.reloadInputText = () =>
  serviceCall({
    name: `Call input_text.reload`,
    params: {
      domain: 'input_text',
      service: 'reload',
    },
  });

export interface SetValueInputTextProps {
  /**
   * The target value.
   */
  value: string;
}

globalThis.setValueInputText = (
  target: IEntity<`input_text.${string}`> | IArea,
  params: SetValueInputTextProps,
) =>
  serviceCall({
    name: `Call input_text.set_value`,
    params: {
      domain: 'input_text',
      service: 'set_value',
      service_data: params,
    },
    target,
  });
