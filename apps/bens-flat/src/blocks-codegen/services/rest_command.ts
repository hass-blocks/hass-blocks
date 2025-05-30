import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  var shutdownImacRestCommand: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;

  /**
   * Reloads RESTful commands from the YAML-configuration.
   */
  var reloadRestCommand: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;
}

globalThis.shutdownImacRestCommand = () =>
  serviceCall({
    name: `Call rest_command.shutdown_imac`,
    params: {
      domain: 'rest_command',
      service: 'shutdown_imac',
    },
  });

globalThis.reloadRestCommand = () =>
  serviceCall({
    name: `Call rest_command.reload`,
    params: {
      domain: 'rest_command',
      service: 'reload',
    },
  });
