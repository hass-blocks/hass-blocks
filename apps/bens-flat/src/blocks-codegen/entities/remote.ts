import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var bensAppleTvRemote: ITarget;
}

globalThis.bensAppleTvRemote = entity('remote.bens_apple_tv');
