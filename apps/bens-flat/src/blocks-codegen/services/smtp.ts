import { serviceCall, type Block } from '@hass-blocks/core';

declare global {
  /**
   * Reloads smtp notify services.
   */
  var reloadSmtp: () => Block;
}

globalThis.reloadSmtp = () =>
  serviceCall({
    name: `Call smtp.reload`,
    params: {
      domain: 'smtp',
      service: 'reload',
    },
  });
