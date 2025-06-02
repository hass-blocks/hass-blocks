import type { IMQTTConnection } from '@hass-blocks/hass-mqtt';
import type { IHass } from './i-hass.ts';

export interface IInitialisable {
  /**
   * If defined, this method will be called when the parent automation is registered.
   * If any configuration is invalid, an error should be thrown
   */
  initialise(client: IHass, mqtt: IMQTTConnection): Promise<void>;
}
