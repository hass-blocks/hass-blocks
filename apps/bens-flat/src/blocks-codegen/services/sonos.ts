import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  interface SnapshotSonosProps {
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
  var snapshotSonos: (params: SnapshotSonosProps) => Block;

  interface RestoreSonosProps {
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
  var restoreSonos: (params: RestoreSonosProps) => Block;

  interface SetSleepTimerSonosProps {
    /**
     * Number of seconds to set the timer.
     */
    sleep_time?: number;
  }

  /**
   * Sets a Sonos timer.
   */
  var setSleepTimerSonos: (
    target: IEntity | IArea,
    params: SetSleepTimerSonosProps,
  ) => Block;

  /**
   * Clears a Sonos timer.
   */
  var clearSleepTimerSonos: (target: IEntity | IArea) => Block;

  interface UpdateAlarmSonosProps {
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
    target: IEntity | IArea,
    params?: UpdateAlarmSonosProps,
  ) => Block;

  interface PlayQueueSonosProps {
    /**
     * Position of the song in the queue to start playing from.
     */
    queue_position?: number;
  }

  /**
   * Starts playing the queue from the first item.
   */
  var playQueueSonos: (
    target: IEntity | IArea,
    params: PlayQueueSonosProps,
  ) => Block;

  interface RemoveFromQueueSonosProps {
    /**
     * Position in the queue to remove.
     */
    queue_position?: number;
  }

  /**
   * Removes an item from the queue.
   */
  var removeFromQueueSonos: (
    target: IEntity | IArea,
    params: RemoveFromQueueSonosProps,
  ) => Block;

  /**
   * Returns the contents of the queue.
   */
  var getQueueSonos: (
    target: IEntity<`media_player.${string}`> | IArea,
  ) => Block;
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
