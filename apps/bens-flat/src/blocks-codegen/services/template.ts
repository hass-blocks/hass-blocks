import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  /**
   * Reloads template entities from the YAML-configuration.
   */
  var reloadTemplate: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;
}

globalThis.reloadTemplate = () =>
  serviceCall({
    name: `Call template.reload`,
    params: {
      domain: 'template',
      service: 'reload',
    },
  });
