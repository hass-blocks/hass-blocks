import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Bens Apple TV
   */
  var bensAppleTvRemote: IEntity<`remote.bens_apple_tv`>;
}

globalThis.bensAppleTvRemote = entity('remote.bens_apple_tv', 'Bens Apple TV');
