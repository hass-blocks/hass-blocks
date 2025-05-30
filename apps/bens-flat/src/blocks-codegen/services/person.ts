import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  /**
   * Reloads persons from the YAML-configuration.
   */
  var reloadPerson: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;
}

globalThis.reloadPerson = () =>
  serviceCall({
    name: `Call person.reload`,
    params: {
      domain: 'person',
      service: 'reload',
    },
  });
