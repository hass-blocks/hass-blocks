import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  interface InstallUpdateProps {
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
  var installUpdate: (
    target: IEntity<`update.${string}`> | IArea,
    params?: InstallUpdateProps,
  ) => Block;

  /**
   * Marks currently available update as skipped.
   */
  var skipUpdate: (target: IEntity<`update.${string}`> | IArea) => Block;

  /**
   * Removes the skipped version marker from an update.
   */
  var clearSkippedUpdate: (
    target: IEntity<`update.${string}`> | IArea,
  ) => Block;
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

globalThis.skipUpdate = (target) =>
  serviceCall({
    name: `Call update.skip`,
    params: {
      domain: 'update',
      service: 'skip',
    },
    target,
  });

globalThis.clearSkippedUpdate = (target) =>
  serviceCall({
    name: `Call update.clear_skipped`,
    params: {
      domain: 'update',
      service: 'clear_skipped',
    },
    target,
  });
