import { serviceCall, type Block } from '@hass-blocks/core';

declare global {
  /**
   * Reloads the intent script from the YAML-configuration.
   */
  var reloadIntentScript: () => Block;
}

globalThis.reloadIntentScript = () =>
  serviceCall({
    name: `Call intent_script.reload`,
    params: {
      domain: 'intent_script',
      service: 'reload',
    },
  });
