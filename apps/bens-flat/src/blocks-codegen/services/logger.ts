import { serviceCall } from '@hass-blocks/core';

export interface SetDefaultLevelLoggerProps {
  /**
   * Default severity level for all integrations.
   */
  level?: never;
}

/**
 * Sets the default log level for integrations.
 */
export const setDefaultLevelLogger = (params?: SetDefaultLevelLoggerProps) =>
  serviceCall({
    name: `Call logger.set_default_level`,
    params: {
      domain: 'logger',
      service: 'set_default_level',
      service_data: params,
    },
  });

/**
 * Sets the log level for one or more integrations.
 */
export const setLevelLogger = () =>
  serviceCall({
    name: `Call logger.set_level`,
    params: {
      domain: 'logger',
      service: 'set_level',
    },
  });
