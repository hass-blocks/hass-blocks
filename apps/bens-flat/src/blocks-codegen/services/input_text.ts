import { serviceCall, ITarget } from '@hass-blocks/core';

/**
 * Reloads helpers from the YAML-configuration.
 */
export const reloadInputText = (target: ITarget) =>
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

/**
 * Sets the value.
 */
export const setValueInputText = (
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
