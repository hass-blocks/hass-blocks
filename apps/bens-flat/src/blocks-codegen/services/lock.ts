import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Unlocks a lock.
   */
  var unlockLock: (
    target: IEntity<`lock.${string}`> | IArea,
    params?: UnlockLockProps,
  ) => Block;
  /**
   * Locks a lock.
   */
  var lockLock: (
    target: IEntity<`lock.${string}`> | IArea,
    params?: LockLockProps,
  ) => Block;
  /**
   * Opens a lock.
   */
  var openLock: (
    target: IEntity<`lock.${string}`> | IArea,
    params?: OpenLockProps,
  ) => Block;
}

export interface UnlockLockProps {
  /**
   * Code used to unlock the lock.
   */
  code?: string;
}

globalThis.unlockLock = (
  target: IEntity<`lock.${string}`> | IArea,
  params?: UnlockLockProps,
) =>
  serviceCall({
    name: `Call lock.unlock`,
    params: {
      domain: 'lock',
      service: 'unlock',
      service_data: params,
    },
    target,
  });

export interface LockLockProps {
  /**
   * Code used to lock the lock.
   */
  code?: string;
}

globalThis.lockLock = (
  target: IEntity<`lock.${string}`> | IArea,
  params?: LockLockProps,
) =>
  serviceCall({
    name: `Call lock.lock`,
    params: {
      domain: 'lock',
      service: 'lock',
      service_data: params,
    },
    target,
  });

export interface OpenLockProps {
  /**
   * Code used to open the lock.
   */
  code?: string;
}

globalThis.openLock = (
  target: IEntity<`lock.${string}`> | IArea,
  params?: OpenLockProps,
) =>
  serviceCall({
    name: `Call lock.open`,
    params: {
      domain: 'lock',
      service: 'open',
      service_data: params,
    },
    target,
  });
