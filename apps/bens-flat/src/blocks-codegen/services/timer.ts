import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Reloads timers from the YAML-configuration.
   */
  var reloadTimer: (target: ITarget) => Block;
  /**
   * Starts a timer or restarts it with a provided duration.
   */
  var startTimer: (target: ITarget, params?: StartTimerProps) => Block;
  /**
   * Pauses a running timer, retaining the remaining duration for later continuation.
   */
  var pauseTimer: (target: ITarget, params?: PauseTimerProps) => Block;
  /**
   * Resets a timer's duration to the last known initial value without firing the timer finished event.
   */
  var cancelTimer: (target: ITarget, params?: CancelTimerProps) => Block;
  /**
   * Finishes a running timer earlier than scheduled.
   */
  var finishTimer: (target: ITarget, params?: FinishTimerProps) => Block;
  /**
   * Changes a timer by adding or subtracting a given duration.
   */
  var changeTimer: (target: ITarget, params: ChangeTimerProps) => Block;
}

globalThis.reloadTimer = (target: ITarget) =>
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

globalThis.startTimer = (target: ITarget, params?: StartTimerProps) =>
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

globalThis.pauseTimer = (target: ITarget, params?: PauseTimerProps) =>
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

globalThis.cancelTimer = (target: ITarget, params?: CancelTimerProps) =>
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

globalThis.finishTimer = (target: ITarget, params?: FinishTimerProps) =>
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

globalThis.changeTimer = (target: ITarget, params: ChangeTimerProps) =>
  serviceCall({
    name: `Call timer.change`,
    params: {
      domain: 'timer',
      service: 'change',
      service_data: params,
    },
    target,
  });
