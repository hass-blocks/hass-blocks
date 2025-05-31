import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface SetValueTimeProps {
    /**
     * The time to set.
     */
    time: string;
  }

  /**
   * Sets the time.
   */
  var setValueTime: (
    target: IEntity<`time.${string}`> | IArea,
    params: SetValueTimeProps,
  ) => Block<Partial<ServiceCallArgs<SetValueTimeProps>> | undefined, void>;
}

globalThis.setValueTime = (target, params) =>
  serviceCall({
    name: `Call time.set_value`,
    params: {
      domain: 'time',
      service: 'set_value',
      service_data: params,
    },
    target,
  });
