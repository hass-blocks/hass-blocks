import { Block, serviceCall } from '@hass-blocks/core';
declare global {
  /**
   * Reloads template entities from the YAML-configuration.
   */
  var reloadTemplate: () => Block;
}

globalThis.reloadTemplate = () =>
  serviceCall({
    name: `Call template.reload`,
    params: {
      domain: 'template',
      service: 'reload',
    },
  });
