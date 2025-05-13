import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Sets the value.
   */
  var setValueText: (
    target: IEntity<`text.${string}`> | IArea,
    params: SetValueTextProps,
  ) => Block;
}

export interface SetValueTextProps {
  /**
   * Enter your text.
   */
  value: string;
}

globalThis.setValueText = (
  target: IEntity<`text.${string}`> | IArea,
  params: SetValueTextProps,
) =>
  serviceCall({
    name: `Call text.set_value`,
    params: {
      domain: 'text',
      service: 'set_value',
      service_data: params,
    },
    target,
  });
