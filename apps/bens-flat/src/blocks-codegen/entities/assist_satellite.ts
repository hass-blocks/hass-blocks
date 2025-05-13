import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var assistMicrophoneAssistSatellite: IEntity<`assist_satellite.${string}`>;
}

globalThis.assistMicrophoneAssistSatellite = entity(
  'assist_satellite.assist_microphone',
);
