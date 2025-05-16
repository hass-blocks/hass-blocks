import { MqttDevice } from './mqtt-device.ts';
import type { SpecificMqttDeviceConfig } from './specific-mqtt-device-config.ts';
import { IMQTTConnection } from '@types';

export class MqttSensor extends MqttDevice {
  public constructor(
    client: IMQTTConnection,
    config: SpecificMqttDeviceConfig,
  ) {
    super(client, { ...config, type: 'sensor' });
  }

  public override getDeviceSpecificConfig(): Record<string, unknown> {
    return {};
  }
}
