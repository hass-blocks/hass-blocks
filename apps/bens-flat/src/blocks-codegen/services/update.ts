import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Installs an update for a device or service.
   */
  var installUpdate: (
    target: IEntity<`update.${string}`> | IArea,
    params?: InstallUpdateProps,
  ) => Block;
  /**
   * Marks currently available update as skipped.
   */
  var skipUpdate: (
    target: IEntity<`update.${string}`> | IArea,
    params?: SkipUpdateProps,
  ) => Block;
  /**
   * Removes the skipped version marker from an update.
   */
  var clearSkippedUpdate: (
    target: IEntity<`update.${string}`> | IArea,
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

globalThis.installUpdate = (target, params) =>
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

globalThis.skipUpdate = (target, params) =>
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

globalThis.clearSkippedUpdate = (target, params) =>
  serviceCall({
    name: `Call update.clear_skipped`,
    params: {
      domain: 'update',
      service: 'clear_skipped',
      service_data: params,
    },
    target,
  });
