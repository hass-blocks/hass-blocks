import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface AddUrlAdguardProps {
    /**
     * The name of the filter subscription.
     */
    name: string;
    /**
     * The filter URL to subscribe to, containing the filter rules.
     */
    url: string;
  }

  /**
   * Adds a new filter subscription to AdGuard Home.
   */
  var addUrlAdguard: (
    params: AddUrlAdguardProps,
  ) => Block<Partial<ServiceCallArgs<AddUrlAdguardProps>> | undefined, void>;

  interface RemoveUrlAdguardProps {
    /**
     * The filter subscription URL to remove.
     */
    url: string;
  }

  /**
   * Removes a filter subscription from AdGuard Home.
   */
  var removeUrlAdguard: (
    params: RemoveUrlAdguardProps,
  ) => Block<Partial<ServiceCallArgs<RemoveUrlAdguardProps>> | undefined, void>;

  interface EnableUrlAdguardProps {
    /**
     * The filter subscription URL to enable.
     */
    url: string;
  }

  /**
   * Enables a filter subscription in AdGuard Home.
   */
  var enableUrlAdguard: (
    params: EnableUrlAdguardProps,
  ) => Block<Partial<ServiceCallArgs<EnableUrlAdguardProps>> | undefined, void>;

  interface DisableUrlAdguardProps {
    /**
     * The filter subscription URL to disable.
     */
    url: string;
  }

  /**
   * Disables a filter subscription in AdGuard Home.
   */
  var disableUrlAdguard: (
    params: DisableUrlAdguardProps,
  ) => Block<
    Partial<ServiceCallArgs<DisableUrlAdguardProps>> | undefined,
    void
  >;

  interface RefreshAdguardProps {
    /**
     * Force update (bypasses AdGuard Home throttling), omit for a regular refresh.
     */
    force?: boolean;
  }

  /**
   * Refreshes all filter subscriptions in AdGuard Home.
   */
  var refreshAdguard: (
    params?: RefreshAdguardProps,
  ) => Block<Partial<ServiceCallArgs<RefreshAdguardProps>> | undefined, void>;
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
