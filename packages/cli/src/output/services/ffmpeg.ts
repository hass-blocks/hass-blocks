import { serviceCall } from '@hass-blocks/core';

export interface StartFfmpegProps {
  /**
   * Name of entity that will start. Platform dependent.
   */
  entity_id?: string;
}

/**
 * Sends a start command to an FFmpeg-based sensor.
 */
export const startFfmpeg = (params: StartFfmpegProps) =>
  serviceCall({
    name: `Call ffmpeg.start`,
    params: {
      domain: 'ffmpeg',
      service: 'start',
      service_data: params,
    },
  });

export interface StopFfmpegProps {
  /**
   * Name of entity that will stop. Platform dependent.
   */
  entity_id?: string;
}

/**
 * Sends a stop command to an FFmpeg-based sensor.
 */
export const stopFfmpeg = (params: StopFfmpegProps) =>
  serviceCall({
    name: `Call ffmpeg.stop`,
    params: {
      domain: 'ffmpeg',
      service: 'stop',
      service_data: params,
    },
  });

export interface RestartFfmpegProps {
  /**
   * Name of entity that will restart. Platform dependent.
   */
  entity_id?: string;
}

/**
 * Sends a restart command to an FFmpeg-based sensor.
 */
export const restartFfmpeg = (params: RestartFfmpegProps) =>
  serviceCall({
    name: `Call ffmpeg.restart`,
    params: {
      domain: 'ffmpeg',
      service: 'restart',
      service_data: params,
    },
  });
