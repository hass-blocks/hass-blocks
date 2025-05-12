import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Unlocks a lock.
   */
  var unlockLock: (target: ITarget, params?: UnlockLockProps) => Block;
  /**
   * Locks a lock.
   */
  var lockLock: (target: ITarget, params?: LockLockProps) => Block;
  /**
   * Opens a lock.
   */
  var openLock: (target: ITarget, params?: OpenLockProps) => Block;
}

export interface UnlockLockProps {
  /**
   * Code used to unlock the lock.
   */
  code?: string;
}

globalThis.unlockLock = (target: ITarget, params?: UnlockLockProps) =>
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

globalThis.lockLock = (target: ITarget, params?: LockLockProps) =>
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

globalThis.openLock = (target: ITarget, params?: OpenLockProps) =>
  serviceCall({
    name: `Call lock.open`,
    params: {
      domain: 'lock',
      service: 'open',
      service_data: params,
    },
    target,
  });
