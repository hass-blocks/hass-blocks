import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface SearchOpenplantbookProps {
    /**
     * The string to search for
     */
    alias: string;
  }

  /**
   * Searches Openplantbook for a plant
   */
  var searchOpenplantbook: (
    params: SearchOpenplantbookProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface GetOpenplantbookProps {
    /**
     * The name of the species exactly as written in "pid" or "scientific species" in Openplantbook
     */
    species: string;
  }

  /**
   * Fetches data for a single species
   */
  var getOpenplantbook: (
    params: GetOpenplantbookProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface CleanCacheOpenplantbookProps {
    /**
     * Minimum age of entries to clean from the cache. Default to 24 hours if not set
     */
    hours?: number;
  }

  /**
   * Clean up the cached entries from Openplantbook
   */
  var cleanCacheOpenplantbook: (
    params?: CleanCacheOpenplantbookProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Upload sensors data of all plant instances
   */
  var uploadOpenplantbook: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;
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
