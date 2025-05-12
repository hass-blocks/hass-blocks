import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Sets the value.
   */
  var setValueText: (target: ITarget, params: SetValueTextProps) => Block;
}

export interface SetValueTextProps {
  /**
   * Enter your text.
   */
  value: string;
}

globalThis.setValueText = (target: ITarget, params: SetValueTextProps) =>
  serviceCall({
    name: `Call text.set_value`,
    params: {
      domain: 'text',
      service: 'set_value',
      service_data: params,
    },
    target,
  });
