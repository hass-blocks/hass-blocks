import { serviceCall, ITarget } from '@hass-blocks/core';

/**
 * Reloads timers from the YAML-configuration.
 */
export const reloadTimer = (target: ITarget) =>
  serviceCall({
    name: `Call timer.reload`,
    params: {
      domain: 'timer',
      service: 'reload',
    },
  });

export interface StartTimerProps {
  /**
   * Custom duration to restart the timer with.
   */
  duration?: string;
}

/**
 * Starts a timer or restarts it with a provided duration.
 */
export const startTimer = (target: ITarget, params?: StartTimerProps) =>
  serviceCall({
    name: `Call timer.start`,
    params: {
      domain: 'timer',
      service: 'start',
      service_data: params,
    },
    target,
  });

export interface PauseTimerProps {}

/**
 * Pauses a running timer, retaining the remaining duration for later continuation.
 */
export const pauseTimer = (target: ITarget, params?: PauseTimerProps) =>
  serviceCall({
    name: `Call timer.pause`,
    params: {
      domain: 'timer',
      service: 'pause',
      service_data: params,
    },
    target,
  });

export interface CancelTimerProps {}

/**
 * Resets a timer's duration to the last known initial value without firing the timer finished event.
 */
export const cancelTimer = (target: ITarget, params?: CancelTimerProps) =>
  serviceCall({
    name: `Call timer.cancel`,
    params: {
      domain: 'timer',
      service: 'cancel',
      service_data: params,
    },
    target,
  });

export interface FinishTimerProps {}

/**
 * Finishes a running timer earlier than scheduled.
 */
export const finishTimer = (target: ITarget, params?: FinishTimerProps) =>
  serviceCall({
    name: `Call timer.finish`,
    params: {
      domain: 'timer',
      service: 'finish',
      service_data: params,
    },
    target,
  });

export interface ChangeTimerProps {
  /**
   * Duration to add to or subtract from the running timer.
   */
  duration: string;
}

/**
 * Changes a timer by adding or subtracting a given duration.
 */
export const changeTimer = (target: ITarget, params: ChangeTimerProps) =>
  serviceCall({
    name: `Call timer.change`,
    params: {
      domain: 'timer',
      service: 'change',
      service_data: params,
    },
    target,
  });
