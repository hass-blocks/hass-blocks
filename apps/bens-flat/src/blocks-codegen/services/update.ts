import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Installs an update for a device or service.
   */
  var installUpdate: (target: ITarget, params?: InstallUpdateProps) => Block;
  /**
   * Marks currently available update as skipped.
   */
  var skipUpdate: (target: ITarget, params?: SkipUpdateProps) => Block;
  /**
   * Removes the skipped version marker from an update.
   */
  var clearSkippedUpdate: (
    target: ITarget,
    params?: ClearSkippedUpdateProps,
  ) => Block;
}

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

globalThis.installUpdate = (target: ITarget, params?: InstallUpdateProps) =>
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

globalThis.skipUpdate = (target: ITarget, params?: SkipUpdateProps) =>
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

globalThis.clearSkippedUpdate = (
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
