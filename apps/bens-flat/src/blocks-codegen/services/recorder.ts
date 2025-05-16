import { serviceCall, type Block } from '@hass-blocks/core';

declare global {
  interface PurgeRecorderProps {
    /**
     * Number of days to keep the data in the database. Starting today, counting backward. A value of `7` means that everything older than a week will be purged.
     */
    keep_days?: number;
    /**
     * Attempt to save disk space by rewriting the entire database file.
     */
    repack?: boolean;
    /**
     * Apply `entity_id` and `event_type` filters in addition to time-based purge.
     */
    apply_filter?: boolean;
  }

  /**
   * Starts purge task - to clean up old data from your database.
   */
  var purgeRecorder: (params?: PurgeRecorderProps) => Block;

  interface PurgeEntitiesRecorderProps {
    /**
     * List of entities for which the data is to be removed from the Recorder database.
     */
    entity_id?: string;
    /**
     * List of domains for which the data needs to be removed from the Recorder database.
     */
    domains?: never;
    /**
     * List of glob patterns used to select the entities for which the data is to be removed from the Recorder database.
     */
    entity_globs?: never;
    /**
     * Number of days to keep the data for rows matching the filter. Starting today, counting backward. A value of `7` means that everything older than a week will be purged. The default of 0 days will remove all matching rows immediately.
     */
    keep_days?: number;
  }

  /**
   * Starts a purge task to remove the data related to specific entities from your database.
   */
  var purgeEntitiesRecorder: (params?: PurgeEntitiesRecorderProps) => Block;

  /**
   * Starts the recording of events and state changes.
   */
  var enableRecorder: () => Block;

  /**
   * Stops the recording of events and state changes.
   */
  var disableRecorder: () => Block;
}

globalThis.purgeRecorder = (params) =>
  serviceCall({
    name: `Call recorder.purge`,
    params: {
      domain: 'recorder',
      service: 'purge',
      service_data: params,
    },
  });

globalThis.purgeEntitiesRecorder = (params) =>
  serviceCall({
    name: `Call recorder.purge_entities`,
    params: {
      domain: 'recorder',
      service: 'purge_entities',
      service_data: params,
    },
  });

globalThis.enableRecorder = () =>
  serviceCall({
    name: `Call recorder.enable`,
    params: {
      domain: 'recorder',
      service: 'enable',
    },
  });

globalThis.disableRecorder = () =>
  serviceCall({
    name: `Call recorder.disable`,
    params: {
      domain: 'recorder',
      service: 'disable',
    },
  });
