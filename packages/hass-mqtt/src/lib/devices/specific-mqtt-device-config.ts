import type { MqttDeviceConfig } from './mqtt-device.ts';

/**
 * @public
 *
 * Config for a given MQTT device
 */
export type SpecificMqttDeviceConfig<
  T extends Record<string, unknown> = Record<string, unknown>,
> = Omit<MqttDeviceConfig, 'type'> & T;
