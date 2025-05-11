import { serviceCall } from '@hass-blocks/core';

/**
 * Reloads the intent script from the YAML-configuration.
 */
export const reloadIntentScript = () =>
  serviceCall({
    name: `Call intent_script.reload`,
    params: {
      domain: 'intent_script',
      service: 'reload',
    },
  });
