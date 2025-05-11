import { serviceCall } from '@hass-blocks/core';

/**
 * Reloads zones from the YAML-configuration.
 */
export const reloadZone = () =>
  serviceCall({
    name: `Call zone.reload`,
    params: {
      domain: 'zone',
      service: 'reload',
    },
  });
