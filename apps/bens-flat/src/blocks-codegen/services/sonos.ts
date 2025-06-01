import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface SnapshotSonos {
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
  var snapshotSonos: (
    params?: SnapshotSonos,
  ) => Block<Partial<ServiceCallArgs<SnapshotSonos>> | undefined, void>;

  interface RestoreSonos {
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
  var restoreSonos: (
    params?: RestoreSonos,
  ) => Block<Partial<ServiceCallArgs<RestoreSonos>> | undefined, void>;

  interface SetSleepTimerSonos {
    /**
     * Number of seconds to set the timer.
     */
    sleep_time?: number;
  }

  /**
   * Sets a Sonos timer.
   */
  var setSleepTimerSonos: (
    target: IEntity | IArea<string>,
    params?: SetSleepTimerSonos,
  ) => Block<Partial<ServiceCallArgs<SetSleepTimerSonos>> | undefined, void>;

  /**
   * Clears a Sonos timer.
   */
  var clearSleepTimerSonos: (
    target: IEntity | IArea<string>,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface UpdateAlarmSonos {
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
  var updateAlarmSonos: (
    target: IEntity | IArea<string>,
    params: UpdateAlarmSonos,
  ) => Block<Partial<ServiceCallArgs<UpdateAlarmSonos>> | undefined, void>;

  interface PlayQueueSonos {
    /**
     * Position of the song in the queue to start playing from.
     */
    queue_position?: number;
  }

  /**
   * Starts playing the queue from the first item.
   */
  var playQueueSonos: (
    target: IEntity | IArea<string>,
    params?: PlayQueueSonos,
  ) => Block<Partial<ServiceCallArgs<PlayQueueSonos>> | undefined, void>;

  interface RemoveFromQueueSonos {
    /**
     * Position in the queue to remove.
     */
    queue_position?: number;
  }

  /**
   * Removes an item from the queue.
   */
  var removeFromQueueSonos: (
    target: IEntity | IArea<string>,
    params?: RemoveFromQueueSonos,
  ) => Block<Partial<ServiceCallArgs<RemoveFromQueueSonos>> | undefined, void>;

  /**
   * Returns the contents of the queue.
   */
  var getQueueSonos: (
    target: IEntity<`media_player.${string}`> | IArea<string>,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;
}

globalThis.snapshotSonos = (params) =>
  serviceCall({
    name: `Call sonos.snapshot`,
    params: {
      domain: 'sonos',
      service: 'snapshot',
      service_data: params,
    },
  });

globalThis.restoreSonos = (params) =>
  serviceCall({
    name: `Call sonos.restore`,
    params: {
      domain: 'sonos',
      service: 'restore',
      service_data: params,
    },
  });

globalThis.setSleepTimerSonos = (target, params) =>
  serviceCall({
    name: `Call sonos.set_sleep_timer`,
    params: {
      domain: 'sonos',
      service: 'set_sleep_timer',
      service_data: params,
    },
    target,
  });

globalThis.clearSleepTimerSonos = (target) =>
  serviceCall({
    name: `Call sonos.clear_sleep_timer`,
    params: {
      domain: 'sonos',
      service: 'clear_sleep_timer',
    },
    target,
  });

globalThis.updateAlarmSonos = (target, params) =>
  serviceCall({
    name: `Call sonos.update_alarm`,
    params: {
      domain: 'sonos',
      service: 'update_alarm',
      service_data: params,
    },
    target,
  });

globalThis.playQueueSonos = (target, params) =>
  serviceCall({
    name: `Call sonos.play_queue`,
    params: {
      domain: 'sonos',
      service: 'play_queue',
      service_data: params,
    },
    target,
  });

globalThis.removeFromQueueSonos = (target, params) =>
  serviceCall({
    name: `Call sonos.remove_from_queue`,
    params: {
      domain: 'sonos',
      service: 'remove_from_queue',
      service_data: params,
    },
    target,
  });

globalThis.getQueueSonos = (target) =>
  serviceCall({
    name: `Call sonos.get_queue`,
    params: {
      domain: 'sonos',
      service: 'get_queue',
    },
    target,
  });
