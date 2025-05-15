import type { MqttConnection } from '../mqtt-connection.ts';
import { MqttDevice } from './mqtt-device.ts';
import type { SpecificMqttDeviceConfig } from './specific-mqtt-device-config.ts';

export class MqttSensor extends MqttDevice {
  public constructor(client: MqttConnection, config: SpecificMqttDeviceConfig) {
    super(client, { ...config, type: 'sensor' });
  }

  public override getDeviceSpecificConfig(): Record<string, unknown> {
    return {};
  }
}
