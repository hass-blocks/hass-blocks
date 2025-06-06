import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  interface Unlock {
    /**
     * Code used to unlock the lock
     */
    code?: string;
  }

  /**
   * Unlocks a lock
   */
  var unlock: (
    target: IEntity<`lock.${string}`> | IArea<string>,
    params?: Unlock,
  ) => Block<Partial<Unlock> | undefined, void>;

  interface Lock {
    /**
     * Code used to lock the lock
     */
    code?: string;
  }

  /**
   * Locks a lock
   */
  var lock: (
    target: IEntity<`lock.${string}`> | IArea<string>,
    params?: Lock,
  ) => Block<Partial<Lock> | undefined, void>;

  interface OpenLock {
    /**
     * Code used to open the lock
     */
    code?: string;
  }

  /**
   * Opens a lock
   */
  var openLock: (
    target: IEntity<`lock.${string}`> | IArea<string>,
    params?: OpenLock,
  ) => Block<Partial<OpenLock> | undefined, void>;
}

globalThis.unlock = (target, params) =>
  serviceCall({
    name: `Call lock.unlock`,
    params: {
      domain: 'lock',
      service: 'unlock',
      service_data: params,
    },
    target,
  });

globalThis.lock = (target, params) =>
  serviceCall({
    name: `Call lock.lock`,
    params: {
      domain: 'lock',
      service: 'lock',
      service_data: params,
    },
    target,
  });

globalThis.openLock = (target, params) =>
  serviceCall({
    name: `Call lock.open`,
    params: {
      domain: 'lock',
      service: 'open',
      service_data: params,
    },
    target,
  });
