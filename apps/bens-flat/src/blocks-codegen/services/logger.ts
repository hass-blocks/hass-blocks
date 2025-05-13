import { serviceCall, type Block } from '@hass-blocks/core';

declare global {
  interface SetDefaultLevelLoggerProps {
    /**
     * Default severity level for all integrations.
     */
    level?: never;
  }

  /**
   * Sets the default log level for integrations.
   */
  var setDefaultLevelLogger: (params: SetDefaultLevelLoggerProps) => Block;

  /**
   * Sets the log level for one or more integrations.
   */
  var setLevelLogger: () => Block;
}

globalThis.setDefaultLevelLogger = (params) =>
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
