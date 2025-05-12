import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Reloads helpers from the YAML-configuration.
   */
  var reloadInputText: (target: ITarget) => Block;
  /**
   * Sets the value.
   */
  var setValueInputText: (
    target: ITarget,
    params: SetValueInputTextProps,
  ) => Block;
}

globalThis.reloadInputText = (target: ITarget) =>
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
  target: ITarget,
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
