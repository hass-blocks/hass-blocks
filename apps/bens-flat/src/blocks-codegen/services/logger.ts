import { Block, serviceCall } from '@hass-blocks/core';
declare global {
  /**
   * Sets the default log level for integrations.
   */
  var setDefaultLevelLogger: (params?: SetDefaultLevelLoggerProps) => Block;
  /**
   * Sets the log level for one or more integrations.
   */
  var setLevelLogger: () => Block;
}

export interface SetDefaultLevelLoggerProps {
  /**
   * Default severity level for all integrations.
   */
  level?: never;
}

globalThis.setDefaultLevelLogger = (params?: SetDefaultLevelLoggerProps) =>
  serviceCall({
    name: `Call logger.set_default_level`,
    params: {
      domain: 'logger',
      service: 'set_default_level',
      service_data: params,
    },
  });

globalThis.setLevelLogger = () =>
  serviceCall({
    name: `Call logger.set_level`,
    params: {
      domain: 'logger',
      service: 'set_level',
    },
  });
