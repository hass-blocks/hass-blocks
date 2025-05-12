import { Block, serviceCall } from '@hass-blocks/core';
declare global {
  /**
   * Searches Openplantbook for a plant
   */
  var searchOpenplantbook: (params: SearchOpenplantbookProps) => Block;
  /**
   * Fetches data for a single species
   */
  var getOpenplantbook: (params: GetOpenplantbookProps) => Block;
  /**
   * Clean up the cached entries from Openplantbook
   */
  var cleanCacheOpenplantbook: (params?: CleanCacheOpenplantbookProps) => Block;
  /**
   * Upload sensors data of all plant instances
   */
  var uploadOpenplantbook: () => Block;
}

export interface SearchOpenplantbookProps {
  /**
   * The string to search for
   */
  alias: string;
}

globalThis.searchOpenplantbook = (params: SearchOpenplantbookProps) =>
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

globalThis.getOpenplantbook = (params: GetOpenplantbookProps) =>
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

globalThis.cleanCacheOpenplantbook = (params?: CleanCacheOpenplantbookProps) =>
  serviceCall({
    name: `Call openplantbook.clean_cache`,
    params: {
      domain: 'openplantbook',
      service: 'clean_cache',
      service_data: params,
    },
  });

globalThis.uploadOpenplantbook = () =>
  serviceCall({
    name: `Call openplantbook.upload`,
    params: {
      domain: 'openplantbook',
      service: 'upload',
    },
  });
