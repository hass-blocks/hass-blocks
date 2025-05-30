import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  /**
   * Reloads smtp notify services.
   */
  var reloadSmtp: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;
}

globalThis.reloadSmtp = () =>
  serviceCall({
    name: `Call smtp.reload`,
    params: {
      domain: 'smtp',
      service: 'reload',
    },
  });
