import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  interface SetValueText {
    /**
     * Enter your text
     */
    value: string;
  }

  /**
   * Sets the value
   */
  var setValueText: (
    target: IEntity<`text.${string}`> | IArea<string>,
    params: SetValueText,
  ) => Block<Partial<SetValueText> | undefined, void>;
}

globalThis.setValueText = (target, params) =>
  serviceCall({
    name: `Call text.set_value`,
    params: {
      domain: 'text',
      service: 'set_value',
      service_data: params,
    },
    target,
  });
