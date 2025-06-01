import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface StartFfmpeg {
    /**
     * Name of entity that will start. Platform dependent.
     */
    entity_id?: string;
  }

  /**
   * Sends a start command to an FFmpeg-based sensor.
   */
  var startFfmpeg: (
    params?: StartFfmpeg,
  ) => Block<Partial<ServiceCallArgs<StartFfmpeg>> | undefined, void>;

  interface StopFfmpeg {
    /**
     * Name of entity that will stop. Platform dependent.
     */
    entity_id?: string;
  }

  /**
   * Sends a stop command to an FFmpeg-based sensor.
   */
  var stopFfmpeg: (
    params?: StopFfmpeg,
  ) => Block<Partial<ServiceCallArgs<StopFfmpeg>> | undefined, void>;

  interface RestartFfmpeg {
    /**
     * Name of entity that will restart. Platform dependent.
     */
    entity_id?: string;
  }

  /**
   * Sends a restart command to an FFmpeg-based sensor.
   */
  var restartFfmpeg: (
    params?: RestartFfmpeg,
  ) => Block<Partial<ServiceCallArgs<RestartFfmpeg>> | undefined, void>;
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
