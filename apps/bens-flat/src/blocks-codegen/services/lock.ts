import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface UnlockLockProps {
    /**
     * Code used to unlock the lock.
     */
    code?: string;
  }

  /**
   * Unlocks a lock.
   */
  var unlockLock: (
    target: IEntity<`lock.${string}`> | IArea,
    params?: UnlockLockProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface LockLockProps {
    /**
     * Code used to lock the lock.
     */
    code?: string;
  }

  /**
   * Locks a lock.
   */
  var lockLock: (
    target: IEntity<`lock.${string}`> | IArea,
    params?: LockLockProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface OpenLockProps {
    /**
     * Code used to open the lock.
     */
    code?: string;
  }

  /**
   * Opens a lock.
   */
  var openLock: (
    target: IEntity<`lock.${string}`> | IArea,
    params?: OpenLockProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;
}

globalThis.unlockLock = (target, params) =>
  serviceCall({
    name: `Call lock.unlock`,
    params: {
      domain: 'lock',
      service: 'unlock',
      service_data: params,
    },
    target,
  });

globalThis.lockLock = (target, params) =>
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
