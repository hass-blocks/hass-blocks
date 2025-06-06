import { serviceCall, type Block } from '@hass-blocks/core';

declare global {
  interface SearchOpenplantbook {
    /**
     * The string to search for
     */
    alias: string;
  }

  /**
   * Searches Openplantbook for a plant
   */
  var searchOpenplantbook: (
    params: SearchOpenplantbook,
  ) => Block<Partial<SearchOpenplantbook> | undefined, void>;

  interface GetOpenplantbook {
    /**
     * The name of the species exactly as written in "pid" or "scientific species" in Openplantbook
     */
    species: string;
  }

  /**
   * Fetches data for a single species
   */
  var getOpenplantbook: (
    params: GetOpenplantbook,
  ) => Block<Partial<GetOpenplantbook> | undefined, void>;

  interface CleanCacheOpenplantbook {
    /**
     * Minimum age of entries to clean from the cache. Default to 24 hours if not set
     */
    hours?: number;
  }

  /**
   * Clean up the cached entries from Openplantbook
   */
  var cleanCacheOpenplantbook: (
    params?: CleanCacheOpenplantbook,
  ) => Block<Partial<CleanCacheOpenplantbook> | undefined, void>;

  /**
   * Upload sensors data of all plant instances
   */
  var uploadOpenplantbook: () => Block<Partial<unknown> | undefined, void>;
}

globalThis.searchOpenplantbook = (params) =>
  serviceCall({
    name: `Call openplantbook.search`,
    params: {
      domain: 'openplantbook',
      service: 'search',
      service_data: params,
    },
  });

globalThis.getOpenplantbook = (params) =>
  serviceCall({
    name: `Call openplantbook.get`,
    params: {
      domain: 'openplantbook',
      service: 'get',
      service_data: params,
    },
  });

globalThis.cleanCacheOpenplantbook = (params) =>
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
