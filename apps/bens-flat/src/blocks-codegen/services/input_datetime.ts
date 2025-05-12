import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Reloads helpers from the YAML-configuration.
   */
  var reloadInputDatetime: (target: ITarget) => Block;
  /**
   * Sets the date and/or time.
   */
  var setDatetimeInputDatetime: (
    target: ITarget,
    params?: SetDatetimeInputDatetimeProps,
  ) => Block;
}

globalThis.reloadInputDatetime = (target: ITarget) =>
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

globalThis.setDatetimeInputDatetime = (
  target: ITarget,
  params?: SetDatetimeInputDatetimeProps,
) =>
  serviceCall({
    name: `Call input_datetime.set_datetime`,
    params: {
      domain: 'input_datetime',
      service: 'set_datetime',
      service_data: params,
    },
    target,
  });
