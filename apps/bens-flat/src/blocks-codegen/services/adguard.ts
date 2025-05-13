import { serviceCall, Block } from '@hass-blocks/core';
declare global {
  /**
   * Adds a new filter subscription to AdGuard Home.
   */
  var addUrlAdguard: (params: AddUrlAdguardProps) => Block;
  /**
   * Removes a filter subscription from AdGuard Home.
   */
  var removeUrlAdguard: (params: RemoveUrlAdguardProps) => Block;
  /**
   * Enables a filter subscription in AdGuard Home.
   */
  var enableUrlAdguard: (params: EnableUrlAdguardProps) => Block;
  /**
   * Disables a filter subscription in AdGuard Home.
   */
  var disableUrlAdguard: (params: DisableUrlAdguardProps) => Block;
  /**
   * Refreshes all filter subscriptions in AdGuard Home.
   */
  var refreshAdguard: (params?: RefreshAdguardProps) => Block;
}

export interface AddUrlAdguardProps {
  /**
   * The name of the filter subscription.
   */
  name: string;
  /**
   * The filter URL to subscribe to, containing the filter rules.
   */
  url: string;
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

export interface RemoveUrlAdguardProps {
  /**
   * The filter subscription URL to remove.
   */
  url: string;
}

globalThis.removeUrlAdguard = (params) =>
  serviceCall({
    name: `Call adguard.remove_url`,
    params: {
      domain: 'adguard',
      service: 'remove_url',
      service_data: params,
    },
  });

export interface EnableUrlAdguardProps {
  /**
   * The filter subscription URL to enable.
   */
  url: string;
}

globalThis.enableUrlAdguard = (params) =>
  serviceCall({
    name: `Call adguard.enable_url`,
    params: {
      domain: 'adguard',
      service: 'enable_url',
      service_data: params,
    },
  });

export interface DisableUrlAdguardProps {
  /**
   * The filter subscription URL to disable.
   */
  url: string;
}

globalThis.disableUrlAdguard = (params) =>
  serviceCall({
    name: `Call adguard.disable_url`,
    params: {
      domain: 'adguard',
      service: 'disable_url',
      service_data: params,
    },
  });

export interface RefreshAdguardProps {
  /**
   * Force update (bypasses AdGuard Home throttling), omit for a regular refresh.
   */
  force?: boolean;
}

globalThis.refreshAdguard = (params) =>
  serviceCall({
    name: `Call adguard.refresh`,
    params: {
      domain: 'adguard',
      service: 'refresh',
      service_data: params,
    },
  });
