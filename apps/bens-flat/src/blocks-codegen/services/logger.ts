import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

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
  var setDefaultLevelLogger: (
    params?: SetDefaultLevelLoggerProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Sets the log level for one or more integrations.
   */
  var setLevelLogger: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;
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
