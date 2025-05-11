import { serviceCall } from '@hass-blocks/core';

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

/**
 * Adds a new filter subscription to AdGuard Home.
 */
export const addUrlAdguard = (params: AddUrlAdguardProps) =>
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

/**
 * Removes a filter subscription from AdGuard Home.
 */
export const removeUrlAdguard = (params: RemoveUrlAdguardProps) =>
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

/**
 * Enables a filter subscription in AdGuard Home.
 */
export const enableUrlAdguard = (params: EnableUrlAdguardProps) =>
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

/**
 * Disables a filter subscription in AdGuard Home.
 */
export const disableUrlAdguard = (params: DisableUrlAdguardProps) =>
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

/**
 * Refreshes all filter subscriptions in AdGuard Home.
 */
export const refreshAdguard = (params?: RefreshAdguardProps) =>
  serviceCall({
    name: `Call adguard.refresh`,
    params: {
      domain: 'adguard',
      service: 'refresh',
      service_data: params,
    },
  });
