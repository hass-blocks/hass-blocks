import { serviceCall, Block } from '@hass-blocks/core';
declare global {
  /**
   * Deletes all log entries.
   */
  var clearSystemLog: () => Block;
  /**
   * Write log entry.
   */
  var writeSystemLog: (params: WriteSystemLogProps) => Block;
}

globalThis.clearSystemLog = () =>
  serviceCall({
    name: `Call system_log.clear`,
    params: {
      domain: 'system_log',
      service: 'clear',
    },
  });

export interface WriteSystemLogProps {
  /**
   * Message to log.
   */
  message: string;
  /**
   * Log level.
   */
  level?: never;
  /**
   * Logger name under which to log the message. Defaults to `system_log.external`.
   */
  logger?: string;
}

globalThis.writeSystemLog = (params) =>
  serviceCall({
    name: `Call system_log.write`,
    params: {
      domain: 'system_log',
      service: 'write',
      service_data: params,
    },
  });
