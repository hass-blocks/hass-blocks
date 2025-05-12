import { Block, serviceCall } from '@hass-blocks/core';
declare global {
  /**
   * Sends a start command to an FFmpeg-based sensor.
   */
  var startFfmpeg: (params?: StartFfmpegProps) => Block;
  /**
   * Sends a stop command to an FFmpeg-based sensor.
   */
  var stopFfmpeg: (params?: StopFfmpegProps) => Block;
  /**
   * Sends a restart command to an FFmpeg-based sensor.
   */
  var restartFfmpeg: (params?: RestartFfmpegProps) => Block;
}

export interface StartFfmpegProps {
  /**
   * Name of entity that will start. Platform dependent.
   */
  entity_id?: string;
}

globalThis.startFfmpeg = (params?: StartFfmpegProps) =>
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

globalThis.stopFfmpeg = (params?: StopFfmpegProps) =>
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

globalThis.restartFfmpeg = (params?: RestartFfmpegProps) =>
  serviceCall({
    name: `Call ffmpeg.restart`,
    params: {
      domain: 'ffmpeg',
      service: 'restart',
      service_data: params,
    },
  });
