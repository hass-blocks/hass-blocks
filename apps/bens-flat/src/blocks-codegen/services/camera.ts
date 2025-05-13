import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  /**
   * Enables the motion detection.
   */
  var enableMotionDetectionCamera: (
    target: IEntity<`camera.${string}`> | IArea,
  ) => Block;

  /**
   * Disables the motion detection.
   */
  var disableMotionDetectionCamera: (
    target: IEntity<`camera.${string}`> | IArea,
  ) => Block;

  /**
   * Turns off the camera.
   */
  var turnOffCamera: (target: IEntity<`camera.${string}`> | IArea) => Block;

  /**
   * Turns on the camera.
   */
  var turnOnCamera: (target: IEntity<`camera.${string}`> | IArea) => Block;

  interface SnapshotCameraProps {
    /**
     * Full path to filename.
     */
    filename: string;
  }

  /**
   * Takes a snapshot from a camera.
   */
  var snapshotCamera: (
    target: IEntity<`camera.${string}`> | IArea,
    params?: SnapshotCameraProps,
  ) => Block;

  interface PlayStreamCameraProps {
    /**
     * Media players to stream to.
     */
    media_player: string;
    /**
     * Stream format supported by the media player.
     */
    format?: never;
  }

  /**
   * Plays the camera stream on a supported media player.
   */
  var playStreamCamera: (
    target: IEntity<`camera.${string}`> | IArea,
    params?: PlayStreamCameraProps,
  ) => Block;

  interface RecordCameraProps {
    /**
     * Full path to filename. Must be mp4.
     */
    filename: string;
    /**
     * Planned duration of the recording. The actual duration may vary.
     */
    duration?: number;
    /**
     * Planned lookback period to include in the recording (in addition to the duration). Only available if there is currently an active HLS stream. The actual length of the lookback period may vary.
     */
    lookback?: number;
  }

  /**
   * Creates a recording of a live camera feed.
   */
  var recordCamera: (
    target: IEntity<`camera.${string}`> | IArea,
    params?: RecordCameraProps,
  ) => Block;
}

globalThis.enableMotionDetectionCamera = (target) =>
  serviceCall({
    name: `Call camera.enable_motion_detection`,
    params: {
      domain: 'camera',
      service: 'enable_motion_detection',
    },
    target,
  });

globalThis.disableMotionDetectionCamera = (target) =>
  serviceCall({
    name: `Call camera.disable_motion_detection`,
    params: {
      domain: 'camera',
      service: 'disable_motion_detection',
    },
    target,
  });

globalThis.turnOffCamera = (target) =>
  serviceCall({
    name: `Call camera.turn_off`,
    params: {
      domain: 'camera',
      service: 'turn_off',
    },
    target,
  });

globalThis.turnOnCamera = (target) =>
  serviceCall({
    name: `Call camera.turn_on`,
    params: {
      domain: 'camera',
      service: 'turn_on',
    },
    target,
  });

globalThis.snapshotCamera = (target, params) =>
  serviceCall({
    name: `Call camera.snapshot`,
    params: {
      domain: 'camera',
      service: 'snapshot',
      service_data: params,
    },
    target,
  });

globalThis.playStreamCamera = (target, params) =>
  serviceCall({
    name: `Call camera.play_stream`,
    params: {
      domain: 'camera',
      service: 'play_stream',
      service_data: params,
    },
    target,
  });

globalThis.recordCamera = (target, params) =>
  serviceCall({
    name: `Call camera.record`,
    params: {
      domain: 'camera',
      service: 'record',
      service_data: params,
    },
    target,
  });
