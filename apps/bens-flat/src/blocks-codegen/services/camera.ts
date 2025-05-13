import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Enables the motion detection.
   */
  var enableMotionDetectionCamera: (
    target: IEntity<`camera.${string}`> | IArea,
    params?: EnableMotionDetectionCameraProps,
  ) => Block;
  /**
   * Disables the motion detection.
   */
  var disableMotionDetectionCamera: (
    target: IEntity<`camera.${string}`> | IArea,
    params?: DisableMotionDetectionCameraProps,
  ) => Block;
  /**
   * Turns off the camera.
   */
  var turnOffCamera: (
    target: IEntity<`camera.${string}`> | IArea,
    params?: TurnOffCameraProps,
  ) => Block;
  /**
   * Turns on the camera.
   */
  var turnOnCamera: (
    target: IEntity<`camera.${string}`> | IArea,
    params?: TurnOnCameraProps,
  ) => Block;
  /**
   * Takes a snapshot from a camera.
   */
  var snapshotCamera: (
    target: IEntity<`camera.${string}`> | IArea,
    params: SnapshotCameraProps,
  ) => Block;
  /**
   * Plays the camera stream on a supported media player.
   */
  var playStreamCamera: (
    target: IEntity<`camera.${string}`> | IArea,
    params: PlayStreamCameraProps,
  ) => Block;
  /**
   * Creates a recording of a live camera feed.
   */
  var recordCamera: (
    target: IEntity<`camera.${string}`> | IArea,
    params: RecordCameraProps,
  ) => Block;
}

export interface EnableMotionDetectionCameraProps {}

globalThis.enableMotionDetectionCamera = (
  target: IEntity<`camera.${string}`> | IArea,
  params?: EnableMotionDetectionCameraProps,
) =>
  serviceCall({
    name: `Call camera.enable_motion_detection`,
    params: {
      domain: 'camera',
      service: 'enable_motion_detection',
      service_data: params,
    },
    target,
  });

export interface DisableMotionDetectionCameraProps {}

globalThis.disableMotionDetectionCamera = (
  target: IEntity<`camera.${string}`> | IArea,
  params?: DisableMotionDetectionCameraProps,
) =>
  serviceCall({
    name: `Call camera.disable_motion_detection`,
    params: {
      domain: 'camera',
      service: 'disable_motion_detection',
      service_data: params,
    },
    target,
  });

export interface TurnOffCameraProps {}

globalThis.turnOffCamera = (
  target: IEntity<`camera.${string}`> | IArea,
  params?: TurnOffCameraProps,
) =>
  serviceCall({
    name: `Call camera.turn_off`,
    params: {
      domain: 'camera',
      service: 'turn_off',
      service_data: params,
    },
    target,
  });

export interface TurnOnCameraProps {}

globalThis.turnOnCamera = (
  target: IEntity<`camera.${string}`> | IArea,
  params?: TurnOnCameraProps,
) =>
  serviceCall({
    name: `Call camera.turn_on`,
    params: {
      domain: 'camera',
      service: 'turn_on',
      service_data: params,
    },
    target,
  });

export interface SnapshotCameraProps {
  /**
   * Full path to filename.
   */
  filename: string;
}

globalThis.snapshotCamera = (
  target: IEntity<`camera.${string}`> | IArea,
  params: SnapshotCameraProps,
) =>
  serviceCall({
    name: `Call camera.snapshot`,
    params: {
      domain: 'camera',
      service: 'snapshot',
      service_data: params,
    },
    target,
  });

export interface PlayStreamCameraProps {
  /**
   * Media players to stream to.
   */
  media_player: string;
  /**
   * Stream format supported by the media player.
   */
  format?: never;
}

globalThis.playStreamCamera = (
  target: IEntity<`camera.${string}`> | IArea,
  params: PlayStreamCameraProps,
) =>
  serviceCall({
    name: `Call camera.play_stream`,
    params: {
      domain: 'camera',
      service: 'play_stream',
      service_data: params,
    },
    target,
  });

export interface RecordCameraProps {
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

globalThis.recordCamera = (
  target: IEntity<`camera.${string}`> | IArea,
  params: RecordCameraProps,
) =>
  serviceCall({
    name: `Call camera.record`,
    params: {
      domain: 'camera',
      service: 'record',
      service_data: params,
    },
    target,
  });
