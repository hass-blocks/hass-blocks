import { serviceCall, ITarget } from '@hass-blocks/core';

export interface UnlockLockProps {
  /**
   * Code used to unlock the lock.
   */
  code?: string;
}

/**
 * Unlocks a lock.
 */
export const unlockLock = (target: ITarget, params?: UnlockLockProps) =>
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

/**
 * Locks a lock.
 */
export const lockLock = (target: ITarget, params?: LockLockProps) =>
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

/**
 * Opens a lock.
 */
export const openLock = (target: ITarget, params?: OpenLockProps) =>
  serviceCall({
    name: `Call lock.open`,
    params: {
      domain: 'lock',
      service: 'open',
      service_data: params,
    },
    target,
  });
