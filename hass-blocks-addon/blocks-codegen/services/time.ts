import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  interface SetValueTime {
    /**
     * The time to set
     */
    time: string;
  }

  /**
   * Sets the time
   */
  var setValueTime: (
    target: IEntity<`time.${string}`> | IArea<string>,
    params: SetValueTime,
  ) => Block<Partial<SetValueTime> | undefined, void>;
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
