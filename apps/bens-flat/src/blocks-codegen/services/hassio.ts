import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface AddonStartHassioProps {
    /**
     * The add-on to start.
     */
    addon: never;
  }

  /**
   * Starts an add-on.
   */
  var addonStartHassio: (
    params: AddonStartHassioProps,
  ) => Block<Partial<ServiceCallArgs<AddonStartHassioProps>> | undefined, void>;

  interface AddonStopHassioProps {
    /**
     * The add-on to stop.
     */
    addon: never;
  }

  /**
   * Stops an add-on.
   */
  var addonStopHassio: (
    params: AddonStopHassioProps,
  ) => Block<Partial<ServiceCallArgs<AddonStopHassioProps>> | undefined, void>;

  interface AddonRestartHassioProps {
    /**
     * The add-on to restart.
     */
    addon: never;
  }

  /**
   * Restarts an add-on.
   */
  var addonRestartHassio: (
    params: AddonRestartHassioProps,
  ) => Block<
    Partial<ServiceCallArgs<AddonRestartHassioProps>> | undefined,
    void
  >;

  interface AddonStdinHassioProps {
    /**
     * The add-on to write to.
     */
    addon: never;
  }

  /**
   * Writes data to the add-on's standard input.
   */
  var addonStdinHassio: (
    params: AddonStdinHassioProps,
  ) => Block<Partial<ServiceCallArgs<AddonStdinHassioProps>> | undefined, void>;

  /**
   * Powers off the host system.
   */
  var hostShutdownHassio: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;

  /**
   * Reboots the host system.
   */
  var hostRebootHassio: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;

  interface BackupFullHassioProps {
    /**
     * Optional (default = current date and time).
     */
    name?: string;
    /**
     * Password to protect the backup with.
     */
    password?: string;
    /**
     * Compresses the backup files.
     */
    compressed?: boolean;
    /**
     * Name of a backup network storage to host backups.
     */
    location?: never;
    /**
     * Exclude the Home Assistant database file from the backup.
     */
    homeassistant_exclude_database?: boolean;
  }

  /**
   * Creates a full backup.
   */
  var backupFullHassio: (
    params?: BackupFullHassioProps,
  ) => Block<Partial<ServiceCallArgs<BackupFullHassioProps>> | undefined, void>;

  interface BackupPartialHassioProps {
    /**
     * Includes Home Assistant settings in the backup.
     */
    homeassistant?: boolean;
    /**
     * Exclude the Home Assistant database file from the backup.
     */
    homeassistant_exclude_database?: boolean;
    /**
     * List of add-ons to include in the backup. Use the name slug of each add-on.
     */
    addons?: Record<string, unknown>;
    /**
     * List of directories to include in the backup.
     */
    folders?: Record<string, unknown>;
    /**
     * Optional (default = current date and time).
     */
    name?: string;
    /**
     * Password to protect the backup with.
     */
    password?: string;
    /**
     * Compresses the backup files.
     */
    compressed?: boolean;
    /**
     * Name of a backup network storage to host backups.
     */
    location?: never;
  }

  /**
   * Creates a partial backup.
   */
  var backupPartialHassio: (
    params?: BackupPartialHassioProps,
  ) => Block<
    Partial<ServiceCallArgs<BackupPartialHassioProps>> | undefined,
    void
  >;

  interface RestoreFullHassioProps {
    /**
     * Slug of backup to restore from.
     */
    slug: string;
    /**
     * Optional password.
     */
    password?: string;
  }

  /**
   * Restores from full backup.
   */
  var restoreFullHassio: (
    params: RestoreFullHassioProps,
  ) => Block<
    Partial<ServiceCallArgs<RestoreFullHassioProps>> | undefined,
    void
  >;

  interface RestorePartialHassioProps {
    /**
     * Slug of backup to restore from.
     */
    slug: string;
    /**
     * Restores Home Assistant.
     */
    homeassistant?: boolean;
    /**
     * List of directories to restore from the backup.
     */
    folders?: Record<string, unknown>;
    /**
     * List of add-ons to restore from the backup. Use the name slug of each add-on.
     */
    addons?: Record<string, unknown>;
    /**
     * Optional password.
     */
    password?: string;
  }

  /**
   * Restores from a partial backup.
   */
  var restorePartialHassio: (
    params: RestorePartialHassioProps,
  ) => Block<
    Partial<ServiceCallArgs<RestorePartialHassioProps>> | undefined,
    void
  >;
}

globalThis.addonStartHassio = (params) =>
  serviceCall({
    name: `Call hassio.addon_start`,
    params: {
      domain: 'hassio',
      service: 'addon_start',
      service_data: params,
    },
  });

globalThis.addonStopHassio = (params) =>
  serviceCall({
    name: `Call hassio.addon_stop`,
    params: {
      domain: 'hassio',
      service: 'addon_stop',
      service_data: params,
    },
  });

globalThis.addonRestartHassio = (params) =>
  serviceCall({
    name: `Call hassio.addon_restart`,
    params: {
      domain: 'hassio',
      service: 'addon_restart',
      service_data: params,
    },
  });

globalThis.addonStdinHassio = (params) =>
  serviceCall({
    name: `Call hassio.addon_stdin`,
    params: {
      domain: 'hassio',
      service: 'addon_stdin',
      service_data: params,
    },
  });

globalThis.hostShutdownHassio = () =>
  serviceCall({
    name: `Call hassio.host_shutdown`,
    params: {
      domain: 'hassio',
      service: 'host_shutdown',
    },
  });

globalThis.hostRebootHassio = () =>
  serviceCall({
    name: `Call hassio.host_reboot`,
    params: {
      domain: 'hassio',
      service: 'host_reboot',
    },
  });

globalThis.backupFullHassio = (params) =>
  serviceCall({
    name: `Call hassio.backup_full`,
    params: {
      domain: 'hassio',
      service: 'backup_full',
      service_data: params,
    },
  });

globalThis.backupPartialHassio = (params) =>
  serviceCall({
    name: `Call hassio.backup_partial`,
    params: {
      domain: 'hassio',
      service: 'backup_partial',
      service_data: params,
    },
  });

globalThis.restoreFullHassio = (params) =>
  serviceCall({
    name: `Call hassio.restore_full`,
    params: {
      domain: 'hassio',
      service: 'restore_full',
      service_data: params,
    },
  });

globalThis.restorePartialHassio = (params) =>
  serviceCall({
    name: `Call hassio.restore_partial`,
    params: {
      domain: 'hassio',
      service: 'restore_partial',
      service_data: params,
    },
  });
