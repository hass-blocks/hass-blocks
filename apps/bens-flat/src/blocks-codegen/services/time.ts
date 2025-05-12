import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Sets the time.
   */
  var setValueTime: (target: ITarget, params: SetValueTimeProps) => Block;
}

export interface SetValueTimeProps {
  /**
   * The time to set.
   */
  time: string;
}

globalThis.setValueTime = (target: ITarget, params: SetValueTimeProps) =>
  serviceCall({
    name: `Call time.set_value`,
    params: {
      domain: 'time',
      service: 'set_value',
      service_data: params,
    },
    target,
  });
