import { serviceCall } from '@hass-blocks/core';

export interface SearchOpenplantbookProps {
  /**
   * The string to search for
   */
  alias: string;
}

/**
 * Searches Openplantbook for a plant
 */
export const searchOpenplantbook = (params: SearchOpenplantbookProps) =>
  serviceCall({
    name: `Call openplantbook.search`,
    params: {
      domain: 'openplantbook',
      service: 'search',
      service_data: params,
    },
  });

export interface GetOpenplantbookProps {
  /**
   * The name of the species exactly as written in "pid" or "scientific species" in Openplantbook
   */
  species: string;
}

/**
 * Fetches data for a single species
 */
export const getOpenplantbook = (params: GetOpenplantbookProps) =>
  serviceCall({
    name: `Call openplantbook.get`,
    params: {
      domain: 'openplantbook',
      service: 'get',
      service_data: params,
    },
  });

export interface CleanCacheOpenplantbookProps {
  /**
   * Minimum age of entries to clean from the cache. Default to 24 hours if not set
   */
  hours?: number;
}

/**
 * Clean up the cached entries from Openplantbook
 */
export const cleanCacheOpenplantbook = (
  params?: CleanCacheOpenplantbookProps,
) =>
  serviceCall({
    name: `Call openplantbook.clean_cache`,
    params: {
      domain: 'openplantbook',
      service: 'clean_cache',
      service_data: params,
    },
  });

/**
 * Upload sensors data of all plant instances
 */
export const uploadOpenplantbook = () =>
  serviceCall({
    name: `Call openplantbook.upload`,
    params: {
      domain: 'openplantbook',
      service: 'upload',
    },
  });
