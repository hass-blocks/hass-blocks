import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  /**
   * Reloads the intent script from the YAML-configuration.
   */
  var reloadIntentScript: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;
}

globalThis.reloadIntentScript = () =>
  serviceCall({
    name: `Call intent_script.reload`,
    params: {
      domain: 'intent_script',
      service: 'reload',
    },
  });
