import { serviceCall, type Block } from '@hass-blocks/core';

declare global {
  /**
   * Reloads zones from the YAML-configuration
   */
  var reloadZone: () => Block<Partial<unknown> | undefined, void>;
}

globalThis.reloadZone = () =>
  serviceCall({
    name: `Call zone.reload`,
    params: {
      domain: 'zone',
      service: 'reload',
    },
  });
