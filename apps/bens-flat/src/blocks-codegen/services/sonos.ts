import { serviceCall, ITarget } from '@hass-blocks/core';

export interface SnapshotSonosProps {
  /**
   * Name of entity that will be snapshot.
   */
  entity_id?: string;
  /**
   * Whether the snapshot should include the group layout and the state of other speakers in the group.
   */
  with_group?: boolean;
}

/**
 * Takes a snapshot of a media player.
 */
export const snapshotSonos = (target: ITarget, params?: SnapshotSonosProps) =>
  serviceCall({
    name: `Call sonos.snapshot`,
    params: {
      domain: 'sonos',
      service: 'snapshot',
      service_data: params,
    },
  });

export interface RestoreSonosProps {
  /**
   * Name of entity that will be restored.
   */
  entity_id?: string;
  /**
   * Whether the group layout and the state of other speakers in the group should also be restored.
   */
  with_group?: boolean;
}

/**
 * Restores a snapshot of a media player.
 */
export const restoreSonos = (target: ITarget, params?: RestoreSonosProps) =>
  serviceCall({
    name: `Call sonos.restore`,
    params: {
      domain: 'sonos',
      service: 'restore',
      service_data: params,
    },
  });

export interface SetSleepTimerSonosProps {
  /**
   * Number of seconds to set the timer.
   */
  sleep_time?: number;
}

/**
 * Sets a Sonos timer.
 */
export const setSleepTimerSonos = (
  target: ITarget,
  params?: SetSleepTimerSonosProps,
) =>
  serviceCall({
    name: `Call sonos.set_sleep_timer`,
    params: {
      domain: 'sonos',
      service: 'set_sleep_timer',
      service_data: params,
    },
    target,
  });

export interface ClearSleepTimerSonosProps {}

/**
 * Clears a Sonos timer.
 */
export const clearSleepTimerSonos = (
  target: ITarget,
  params?: ClearSleepTimerSonosProps,
) =>
  serviceCall({
    name: `Call sonos.clear_sleep_timer`,
    params: {
      domain: 'sonos',
      service: 'clear_sleep_timer',
      service_data: params,
    },
    target,
  });

export interface UpdateAlarmSonosProps {
  /**
   * The ID of the alarm to be updated.
   */
  alarm_id: number;
  /**
   * The time for the alarm.
   */
  time?: string;
  /**
   * The alarm volume level.
   */
  volume?: number;
  /**
   * Whether or not to enable the alarm.
   */
  enabled?: boolean;
  /**
   * Whether the alarm also plays on grouped players.
   */
  include_linked_zones?: boolean;
}

/**
 * Updates an alarm with new time and volume settings.
 */
export const updateAlarmSonos = (
  target: ITarget,
  params: UpdateAlarmSonosProps,
) =>
  serviceCall({
    name: `Call sonos.update_alarm`,
    params: {
      domain: 'sonos',
      service: 'update_alarm',
      service_data: params,
    },
    target,
  });

export interface PlayQueueSonosProps {
  /**
   * Position of the song in the queue to start playing from.
   */
  queue_position?: number;
}

/**
 * Starts playing the queue from the first item.
 */
export const playQueueSonos = (target: ITarget, params?: PlayQueueSonosProps) =>
  serviceCall({
    name: `Call sonos.play_queue`,
    params: {
      domain: 'sonos',
      service: 'play_queue',
      service_data: params,
    },
    target,
  });

export interface RemoveFromQueueSonosProps {
  /**
   * Position in the queue to remove.
   */
  queue_position?: number;
}

/**
 * Removes an item from the queue.
 */
export const removeFromQueueSonos = (
  target: ITarget,
  params?: RemoveFromQueueSonosProps,
) =>
  serviceCall({
    name: `Call sonos.remove_from_queue`,
    params: {
      domain: 'sonos',
      service: 'remove_from_queue',
      service_data: params,
    },
    target,
  });

export interface GetQueueSonosProps {}

/**
 * Returns the contents of the queue.
 */
export const getQueueSonos = (target: ITarget, params?: GetQueueSonosProps) =>
  serviceCall({
    name: `Call sonos.get_queue`,
    params: {
      domain: 'sonos',
      service: 'get_queue',
      service_data: params,
    },
    target,
  });
