import { serviceCall, ITarget } from '@hass-blocks/core';

export interface InstallUpdateProps {
  /**
   * The version to install. If omitted, the latest version will be installed.
   */
  version?: string;
  /**
   * If supported by the integration, this creates a backup before starting the update.
   */
  backup?: boolean;
}

/**
 * Installs an update for a device or service.
 */
export const installUpdate = (target: ITarget, params?: InstallUpdateProps) =>
  serviceCall({
    name: `Call update.install`,
    params: {
      domain: 'update',
      service: 'install',
      service_data: params,
    },
    target,
  });

export interface SkipUpdateProps {}

/**
 * Marks currently available update as skipped.
 */
export const skipUpdate = (target: ITarget, params?: SkipUpdateProps) =>
  serviceCall({
    name: `Call update.skip`,
    params: {
      domain: 'update',
      service: 'skip',
      service_data: params,
    },
    target,
  });

export interface ClearSkippedUpdateProps {}

/**
 * Removes the skipped version marker from an update.
 */
export const clearSkippedUpdate = (
  target: ITarget,
  params?: ClearSkippedUpdateProps,
) =>
  serviceCall({
    name: `Call update.clear_skipped`,
    params: {
      domain: 'update',
      service: 'clear_skipped',
      service_data: params,
    },
    target,
  });
