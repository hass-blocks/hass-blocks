import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Reloads helpers from the YAML-configuration.
   */
  var reloadInputDatetime: () => Block;
  /**
   * Sets the date and/or time.
   */
  var setDatetimeInputDatetime: (
    target: IEntity<`input_datetime.${string}`> | IArea,
    params?: SetDatetimeInputDatetimeProps,
  ) => Block;
}

globalThis.reloadInputDatetime = () =>
  serviceCall({
    name: `Call input_datetime.reload`,
    params: {
      domain: 'input_datetime',
      service: 'reload',
    },
  });

export interface SetDatetimeInputDatetimeProps {
  /**
   * The target date.
   */
  date?: string;
  /**
   * The target time.
   */
  time?: string;
  /**
   * The target date & time.
   */
  datetime?: string;
  /**
   * The target date & time, expressed by a UNIX timestamp.
   */
  timestamp?: number;
}

globalThis.setDatetimeInputDatetime = (target, params) =>
  serviceCall({
    name: `Call input_datetime.set_datetime`,
    params: {
      domain: 'input_datetime',
      service: 'set_datetime',
      service_data: params,
    },
    target,
  });
