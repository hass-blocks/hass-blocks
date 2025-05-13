import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Sets the time.
   */
  var setValueTime: (
    target: IEntity<`time.${string}`> | IArea,
    params: SetValueTimeProps,
  ) => Block;
}

export interface SetValueTimeProps {
  /**
   * The time to set.
   */
  time: string;
}

globalThis.setValueTime = (
  target: IEntity<`time.${string}`> | IArea,
  params: SetValueTimeProps,
) =>
  serviceCall({
    name: `Call time.set_value`,
    params: {
      domain: 'time',
      service: 'set_value',
      service_data: params,
    },
    target,
  });
