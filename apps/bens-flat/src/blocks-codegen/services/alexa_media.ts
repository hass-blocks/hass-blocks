import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface ForceLogoutAlexaMediaProps {
    /**
     * Accounts to clear. Empty will clear all.
     */
    email?: never;
  }

  /**
   * Force account to logout. Used mainly for debugging.
   */
  var forceLogoutAlexaMedia: (
    params?: ForceLogoutAlexaMediaProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface UpdateLastCalledAlexaMediaProps {
    /**
     * List of Alexa accounts to update. If empty, will update all known accounts.
     */
    email?: never;
  }

  /**
   * Forces update of last_called echo device for each Alexa account.
   */
  var updateLastCalledAlexaMedia: (
    params?: UpdateLastCalledAlexaMediaProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface RestoreVolumeAlexaMediaProps {
    /**
     * Entity to restore the previous volume level on
     */
    entity_id: string;
  }

  /**
   * Restore previous volume level on Alexa media player device
   */
  var restoreVolumeAlexaMedia: (
    params: RestoreVolumeAlexaMediaProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface GetHistoryRecordsAlexaMediaProps {
    /**
     * Entity to get the history for
     */
    entity_id: string;
    /**
     * Number of entries to get
     */
    entries?: never;
  }

  /**
   * Parses the history records for the specified device
   */
  var getHistoryRecordsAlexaMedia: (
    params: GetHistoryRecordsAlexaMediaProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;
}

globalThis.forceLogoutAlexaMedia = (params) =>
  serviceCall({
    name: `Call alexa_media.force_logout`,
    params: {
      domain: 'alexa_media',
      service: 'force_logout',
      service_data: params,
    },
  });

globalThis.updateLastCalledAlexaMedia = (params) =>
  serviceCall({
    name: `Call alexa_media.update_last_called`,
    params: {
      domain: 'alexa_media',
      service: 'update_last_called',
      service_data: params,
    },
  });

globalThis.restoreVolumeAlexaMedia = (params) =>
  serviceCall({
    name: `Call alexa_media.restore_volume`,
    params: {
      domain: 'alexa_media',
      service: 'restore_volume',
      service_data: params,
    },
  });

globalThis.getHistoryRecordsAlexaMedia = (params) =>
  serviceCall({
    name: `Call alexa_media.get_history_records`,
    params: {
      domain: 'alexa_media',
      service: 'get_history_records',
      service_data: params,
    },
  });
