import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * assist microphone
   */
  var assistMicrophoneAssistSatellite: IEntity<`assist_satellite.assist_microphone`>;
}

globalThis.assistMicrophoneAssistSatellite = entity(
  'assist_satellite.assist_microphone',
  'assist microphone',
);
