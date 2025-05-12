import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var assistMicrophoneAssistSatellite: ITarget;
}

globalThis.assistMicrophoneAssistSatellite = entity(
  'assist_satellite.assist_microphone',
);
