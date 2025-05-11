import { serviceCall, ITarget } from '@hass-blocks/core';

export interface EnableMotionDetectionCameraProps {}

/**
 * Enables the motion detection.
 */
export const enableMotionDetectionCamera = (
  target: ITarget,
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

/**
 * Disables the motion detection.
 */
export const disableMotionDetectionCamera = (
  target: ITarget,
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

/**
 * Turns off the camera.
 */
export const turnOffCamera = (target: ITarget, params?: TurnOffCameraProps) =>
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

/**
 * Turns on the camera.
 */
export const turnOnCamera = (target: ITarget, params?: TurnOnCameraProps) =>
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

/**
 * Takes a snapshot from a camera.
 */
export const snapshotCamera = (target: ITarget, params: SnapshotCameraProps) =>
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

/**
 * Plays the camera stream on a supported media player.
 */
export const playStreamCamera = (
  target: ITarget,
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

/**
 * Creates a recording of a live camera feed.
 */
export const recordCamera = (target: ITarget, params: RecordCameraProps) =>
  serviceCall({
    name: `Call camera.record`,
    params: {
      domain: 'camera',
      service: 'record',
      service_data: params,
    },
    target,
  });
