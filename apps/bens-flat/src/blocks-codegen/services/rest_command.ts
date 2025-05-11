import { serviceCall } from '@hass-blocks/core';

export const shutdownImacRestCommand = () =>
  serviceCall({
    name: `Call rest_command.shutdown_imac`,
    params: {
      domain: 'rest_command',
      service: 'shutdown_imac',
    },
  });

/**
 * Reloads RESTful commands from the YAML-configuration.
 */
export const reloadRestCommand = () =>
  serviceCall({
    name: `Call rest_command.reload`,
    params: {
      domain: 'rest_command',
      service: 'reload',
    },
  });
