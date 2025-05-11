import { serviceCall } from '@hass-blocks/core';

/**
 * Reloads template entities from the YAML-configuration.
 */
export const reloadTemplate = () =>
  serviceCall({
    name: `Call template.reload`,
    params: {
      domain: 'template',
      service: 'reload',
    },
  });
