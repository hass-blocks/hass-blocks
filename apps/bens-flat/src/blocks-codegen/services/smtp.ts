import { serviceCall } from '@hass-blocks/core';

/**
 * Reloads smtp notify services.
 */
export const reloadSmtp = () =>
  serviceCall({
    name: `Call smtp.reload`,
    params: {
      domain: 'smtp',
      service: 'reload',
    },
  });
