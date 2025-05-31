import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface SetValueTextProps {
    /**
     * Enter your text.
     */
    value: string;
  }

  /**
   * Sets the value.
   */
  var setValueText: (
    target: IEntity<`text.${string}`> | IArea,
    params: SetValueTextProps,
  ) => Block<Partial<ServiceCallArgs<SetValueTextProps>> | undefined, void>;
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
