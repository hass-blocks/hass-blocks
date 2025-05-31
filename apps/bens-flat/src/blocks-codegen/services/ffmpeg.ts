import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface StartFfmpegProps {
    /**
     * Name of entity that will start. Platform dependent.
     */
    entity_id?: string;
  }

  /**
   * Sends a start command to an FFmpeg-based sensor.
   */
  var startFfmpeg: (
    params?: StartFfmpegProps,
  ) => Block<Partial<ServiceCallArgs<StartFfmpegProps>> | undefined, void>;

  interface StopFfmpegProps {
    /**
     * Name of entity that will stop. Platform dependent.
     */
    entity_id?: string;
  }

  /**
   * Sends a stop command to an FFmpeg-based sensor.
   */
  var stopFfmpeg: (
    params?: StopFfmpegProps,
  ) => Block<Partial<ServiceCallArgs<StopFfmpegProps>> | undefined, void>;

  interface RestartFfmpegProps {
    /**
     * Name of entity that will restart. Platform dependent.
     */
    entity_id?: string;
  }

  /**
   * Sends a restart command to an FFmpeg-based sensor.
   */
  var restartFfmpeg: (
    params?: RestartFfmpegProps,
  ) => Block<Partial<ServiceCallArgs<RestartFfmpegProps>> | undefined, void>;
}

globalThis.startFfmpeg = (params) =>
  serviceCall({
    name: `Call ffmpeg.start`,
    params: {
      domain: 'ffmpeg',
      service: 'start',
      service_data: params,
    },
  });

globalThis.stopFfmpeg = (params) =>
  serviceCall({
    name: `Call ffmpeg.stop`,
    params: {
      domain: 'ffmpeg',
      service: 'stop',
      service_data: params,
    },
  });

globalThis.restartFfmpeg = (params) =>
  serviceCall({
    name: `Call ffmpeg.restart`,
    params: {
      domain: 'ffmpeg',
      service: 'restart',
      service_data: params,
    },
  });
