import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  /**
   * Reloads timers from the YAML-configuration.
   */
  var reloadTimer: () => Block;

  interface StartTimerProps {
    /**
     * Custom duration to restart the timer with.
     */
    duration?: string;
  }

  /**
   * Starts a timer or restarts it with a provided duration.
   */
  var startTimer: (
    target: IEntity<`timer.${string}`> | IArea,
    params: StartTimerProps,
  ) => Block;

  /**
   * Pauses a running timer, retaining the remaining duration for later continuation.
   */
  var pauseTimer: (target: IEntity<`timer.${string}`> | IArea) => Block;

  /**
   * Resets a timer's duration to the last known initial value without firing the timer finished event.
   */
  var cancelTimer: (target: IEntity<`timer.${string}`> | IArea) => Block;

  /**
   * Finishes a running timer earlier than scheduled.
   */
  var finishTimer: (target: IEntity<`timer.${string}`> | IArea) => Block;

  interface ChangeTimerProps {
    /**
     * Duration to add to or subtract from the running timer.
     */
    duration: string;
  }

  /**
   * Changes a timer by adding or subtracting a given duration.
   */
  var changeTimer: (
    target: IEntity<`timer.${string}`> | IArea,
    params?: ChangeTimerProps,
  ) => Block;
}

globalThis.reloadTimer = () =>
  serviceCall({
    name: `Call timer.reload`,
    params: {
      domain: 'timer',
      service: 'reload',
    },
  });

globalThis.startTimer = (target, params) =>
  serviceCall({
    name: `Call timer.start`,
    params: {
      domain: 'timer',
      service: 'start',
      service_data: params,
    },
    target,
  });

globalThis.pauseTimer = (target) =>
  serviceCall({
    name: `Call timer.pause`,
    params: {
      domain: 'timer',
      service: 'pause',
    },
    target,
  });

globalThis.cancelTimer = (target) =>
  serviceCall({
    name: `Call timer.cancel`,
    params: {
      domain: 'timer',
      service: 'cancel',
    },
    target,
  });

globalThis.finishTimer = (target) =>
  serviceCall({
    name: `Call timer.finish`,
    params: {
      domain: 'timer',
      service: 'finish',
    },
    target,
  });

globalThis.changeTimer = (target, params) =>
  serviceCall({
    name: `Call timer.change`,
    params: {
      domain: 'timer',
      service: 'change',
      service_data: params,
    },
    target,
  });
