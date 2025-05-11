import { serviceCall } from '@hass-blocks/core';

export interface AddonStartHassioProps {
  /**
   * The add-on to start.
   */
  addon: never;
}

/**
 * Starts an add-on.
 */
export const addonStartHassio = (params: AddonStartHassioProps) =>
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

/**
 * Stops an add-on.
 */
export const addonStopHassio = (params: AddonStopHassioProps) =>
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

/**
 * Restarts an add-on.
 */
export const addonRestartHassio = (params: AddonRestartHassioProps) =>
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

/**
 * Writes data to the add-on's standard input.
 */
export const addonStdinHassio = (params: AddonStdinHassioProps) =>
  serviceCall({
    name: `Call hassio.addon_stdin`,
    params: {
      domain: 'hassio',
      service: 'addon_stdin',
      service_data: params,
    },
  });

/**
 * Powers off the host system.
 */
export const hostShutdownHassio = () =>
  serviceCall({
    name: `Call hassio.host_shutdown`,
    params: {
      domain: 'hassio',
      service: 'host_shutdown',
    },
  });

/**
 * Reboots the host system.
 */
export const hostRebootHassio = () =>
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

/**
 * Creates a full backup.
 */
export const backupFullHassio = (params?: BackupFullHassioProps) =>
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

/**
 * Creates a partial backup.
 */
export const backupPartialHassio = (params?: BackupPartialHassioProps) =>
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

/**
 * Restores from full backup.
 */
export const restoreFullHassio = (params: RestoreFullHassioProps) =>
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

/**
 * Restores from a partial backup.
 */
export const restorePartialHassio = (params: RestorePartialHassioProps) =>
  serviceCall({
    name: `Call hassio.restore_partial`,
    params: {
      domain: 'hassio',
      service: 'restore_partial',
      service_data: params,
    },
  });
