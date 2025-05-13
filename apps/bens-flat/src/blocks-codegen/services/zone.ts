import { serviceCall, Block } from '@hass-blocks/core';
declare global {
  /**
   * Reloads zones from the YAML-configuration.
   */
  var reloadZone: () => Block;
}

globalThis.reloadZone = () =>
  serviceCall({
    name: `Call zone.reload`,
    params: {
      domain: 'zone',
      service: 'reload',
    },
  });
