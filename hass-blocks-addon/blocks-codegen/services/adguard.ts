import { serviceCall, type Block } from '@hass-blocks/core';

declare global {
  interface AddUrlAdguard {
    /**
     * The name of the filter subscription
     */
    name: string;
    /**
     * The filter URL to subscribe to, containing the filter rules
     */
    url: string;
  }

  /**
   * Adds a new filter subscription to AdGuard Home
   */
  var addUrlAdguard: (
    params: AddUrlAdguard,
  ) => Block<Partial<AddUrlAdguard> | undefined, void>;

  interface RemoveUrlAdguard {
    /**
     * The filter subscription URL to remove
     */
    url: string;
  }

  /**
   * Removes a filter subscription from AdGuard Home
   */
  var removeUrlAdguard: (
    params: RemoveUrlAdguard,
  ) => Block<Partial<RemoveUrlAdguard> | undefined, void>;

  interface EnableUrlAdguard {
    /**
     * The filter subscription URL to enable
     */
    url: string;
  }

  /**
   * Enables a filter subscription in AdGuard Home
   */
  var enableUrlAdguard: (
    params: EnableUrlAdguard,
  ) => Block<Partial<EnableUrlAdguard> | undefined, void>;

  interface DisableUrlAdguard {
    /**
     * The filter subscription URL to disable
     */
    url: string;
  }

  /**
   * Disables a filter subscription in AdGuard Home
   */
  var disableUrlAdguard: (
    params: DisableUrlAdguard,
  ) => Block<Partial<DisableUrlAdguard> | undefined, void>;

  interface RefreshAdguard {
    /**
     * Force update (bypasses AdGuard Home throttling), omit for a regular refresh
     */
    force?: boolean;
  }

  /**
   * Refreshes all filter subscriptions in AdGuard Home
   */
  var refreshAdguard: (
    params?: RefreshAdguard,
  ) => Block<Partial<RefreshAdguard> | undefined, void>;
}

globalThis.addUrlAdguard = (params) =>
  serviceCall({
    name: `Call adguard.add_url`,
    params: {
      domain: 'adguard',
      service: 'add_url',
      service_data: params,
    },
  });

globalThis.removeUrlAdguard = (params) =>
  serviceCall({
    name: `Call adguard.remove_url`,
    params: {
      domain: 'adguard',
      service: 'remove_url',
      service_data: params,
    },
  });

globalThis.enableUrlAdguard = (params) =>
  serviceCall({
    name: `Call adguard.enable_url`,
    params: {
      domain: 'adguard',
      service: 'enable_url',
      service_data: params,
    },
  });

globalThis.disableUrlAdguard = (params) =>
  serviceCall({
    name: `Call adguard.disable_url`,
    params: {
      domain: 'adguard',
      service: 'disable_url',
      service_data: params,
    },
  });

globalThis.refreshAdguard = (params) =>
  serviceCall({
    name: `Call adguard.refresh`,
    params: {
      domain: 'adguard',
      service: 'refresh',
      service_data: params,
    },
  });
