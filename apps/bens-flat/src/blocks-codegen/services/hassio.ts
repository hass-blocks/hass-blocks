import { Block, serviceCall } from '@hass-blocks/core';
declare global {
  /**
   * Starts an add-on.
   */
  var addonStartHassio: (params: AddonStartHassioProps) => Block;
  /**
   * Stops an add-on.
   */
  var addonStopHassio: (params: AddonStopHassioProps) => Block;
  /**
   * Restarts an add-on.
   */
  var addonRestartHassio: (params: AddonRestartHassioProps) => Block;
  /**
   * Writes data to the add-on's standard input.
   */
  var addonStdinHassio: (params: AddonStdinHassioProps) => Block;
  /**
   * Powers off the host system.
   */
  var hostShutdownHassio: () => Block;
  /**
   * Reboots the host system.
   */
  var hostRebootHassio: () => Block;
  /**
   * Creates a full backup.
   */
  var backupFullHassio: (params?: BackupFullHassioProps) => Block;
  /**
   * Creates a partial backup.
   */
  var backupPartialHassio: (params?: BackupPartialHassioProps) => Block;
  /**
   * Restores from full backup.
   */
  var restoreFullHassio: (params: RestoreFullHassioProps) => Block;
  /**
   * Restores from a partial backup.
   */
  var restorePartialHassio: (params: RestorePartialHassioProps) => Block;
}

export interface AddonStartHassioProps {
  /**
   * The add-on to start.
   */
  addon: never;
}

globalThis.addonStartHassio = (params: AddonStartHassioProps) =>
  serviceCall({
    name: `Call hassio.addon_start`,
    params: {
      domain: 'hassio',
      service: 'addon_start',
      service_data: params,
    },
  });

export interface AddonStopHassioProps {
  /**
   * The add-on to stop.
   */
  addon: never;
}

globalThis.addonStopHassio = (params: AddonStopHassioProps) =>
  serviceCall({
    name: `Call hassio.addon_stop`,
    params: {
      domain: 'hassio',
      service: 'addon_stop',
      service_data: params,
    },
  });

export interface AddonRestartHassioProps {
  /**
   * The add-on to restart.
   */
  addon: never;
}

globalThis.addonRestartHassio = (params: AddonRestartHassioProps) =>
  serviceCall({
    name: `Call hassio.addon_restart`,
    params: {
      domain: 'hassio',
      service: 'addon_restart',
      service_data: params,
    },
  });

export interface AddonStdinHassioProps {
  /**
   * The add-on to write to.
   */
  addon: never;
}

globalThis.addonStdinHassio = (params: AddonStdinHassioProps) =>
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

export interface BackupFullHassioProps {
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

globalThis.backupFullHassio = (params?: BackupFullHassioProps) =>
  serviceCall({
    name: `Call hassio.backup_full`,
    params: {
      domain: 'hassio',
      service: 'backup_full',
      service_data: params,
    },
  });

export interface BackupPartialHassioProps {
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
  addons?: never;
  /**
   * List of directories to include in the backup.
   */
  folders?: never;
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

globalThis.backupPartialHassio = (params?: BackupPartialHassioProps) =>
  serviceCall({
    name: `Call hassio.backup_partial`,
    params: {
      domain: 'hassio',
      service: 'backup_partial',
      service_data: params,
    },
  });

export interface RestoreFullHassioProps {
  /**
   * Slug of backup to restore from.
   */
  slug: string;
  /**
   * Optional password.
   */
  password?: string;
}

globalThis.restoreFullHassio = (params: RestoreFullHassioProps) =>
  serviceCall({
    name: `Call hassio.restore_full`,
    params: {
      domain: 'hassio',
      service: 'restore_full',
      service_data: params,
    },
  });

export interface RestorePartialHassioProps {
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
  folders?: never;
  /**
   * List of add-ons to restore from the backup. Use the name slug of each add-on.
   */
  addons?: never;
  /**
   * Optional password.
   */
  password?: string;
}

globalThis.restorePartialHassio = (params: RestorePartialHassioProps) =>
  serviceCall({
    name: `Call hassio.restore_partial`,
    params: {
      domain: 'hassio',
      service: 'restore_partial',
      service_data: params,
    },
  });
