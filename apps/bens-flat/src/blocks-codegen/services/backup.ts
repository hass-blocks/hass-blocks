import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  /**
   * Creates a new backup with automatic backup settings.
   */
  var createAutomaticBackup: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;
}

globalThis.createAutomaticBackup = () =>
  serviceCall({
    name: `Call backup.create_automatic`,
    params: {
      domain: 'backup',
      service: 'create_automatic',
    },
  });
