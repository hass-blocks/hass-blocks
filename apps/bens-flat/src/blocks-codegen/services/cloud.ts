import { serviceCall } from '@hass-blocks/core';

/**
 * Makes the instance UI accessible from outside of the local network by enabling your Home Assistant Cloud connection.
 */
export const remoteConnectCloud = () =>
  serviceCall({
    name: `Call cloud.remote_connect`,
    params: {
      domain: 'cloud',
      service: 'remote_connect',
    },
  });

/**
 * Disconnects the instance UI from Home Assistant Cloud. This disables access to it from outside your local network.
 */
export const remoteDisconnectCloud = () =>
  serviceCall({
    name: `Call cloud.remote_disconnect`,
    params: {
      domain: 'cloud',
      service: 'remote_disconnect',
    },
  });
