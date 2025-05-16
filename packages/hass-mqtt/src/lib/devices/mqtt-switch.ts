import { MqttDevice } from './mqtt-device.ts';
import type { SpecificMqttDeviceConfig } from './specific-mqtt-device-config.ts';
import { IMQTTConnection } from '@types';

/**
 * @public
 *
 * A Home Assistant switch (see {@link https://www.home-assistant.io/integrations/switch.mqtt/})
 */
export class MqttSwitch extends MqttDevice {
  public constructor(
    client: IMQTTConnection,
    config: SpecificMqttDeviceConfig,
  ) {
    super(client, { ...config, type: 'switch' });
    this.client.subscribe(this.commandTopic, this.onStateChange.bind(this));
  }

  private get commandTopic() {
    return `${this.stateTopic}/command`;
  }

  private onStateChange(message: string) {
    this.state = message;
  }

  /**
   * Gets configuration values specific to switches
   */
  protected override getDeviceSpecificConfig() {
    return {
      command_topic: this.commandTopic,
    };
  }

  /**
   * Turn the switch on
   */
  public turnOn() {
    this.state = 'ON';
  }

  /**
   * Turn the switch off
   */
  public turnOff() {
    this.state = 'OFF';
  }
}
