import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var bensAppleTvRemote: IEntity<`remote.${string}`>;
}

globalThis.bensAppleTvRemote = entity('remote.bens_apple_tv');
