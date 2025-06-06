import { serviceCall, type Block } from '@hass-blocks/core';

declare global {
  /**
   * Makes the instance UI accessible from outside of the local network by enabling your Home Assistant Cloud connection
   */
  var remoteConnectCloud: () => Block<Partial<unknown> | undefined, void>;

  /**
   * Disconnects the instance UI from Home Assistant Cloud. This disables access to it from outside your local network
   */
  var remoteDisconnectCloud: () => Block<Partial<unknown> | undefined, void>;
}

globalThis.remoteConnectCloud = () =>
  serviceCall({
    name: `Call cloud.remote_connect`,
    params: {
      domain: 'cloud',
      service: 'remote_connect',
    },
  });

globalThis.remoteDisconnectCloud = () =>
  serviceCall({
    name: `Call cloud.remote_disconnect`,
    params: {
      domain: 'cloud',
      service: 'remote_disconnect',
    },
  });
