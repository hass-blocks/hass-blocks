import type { MqttConnection } from '@connection';

/**
 * @public
 *
 * Configuration for MQTT devices
 */
export interface MqttDeviceConfig {
  /**
   * String representing the device type
   */
  type: string;

  /**
   * Prefix for the discovery topic
   */
  discoveryPrefix: string;

  /**
   * Unique identifier for the device
   */
  uniqueId: string;

  /**
   * Context for the device - will be used as a prefix for the state topic
   */
  context: string;
  /**
   * Friendly name for the device
   */
  friendlyName: string;

  /**
   * Device class for the device
   */
  deviceClass: string;
}

/**
 * @public
 *
 * Base class for all Mqtt Devices
 */
export abstract class MqttDevice {
  private _stateTopic: string;
  private genericConfig: MqttDeviceConfig;
  private _state: string | undefined;

  constructor(
    /**
     * The underlying MQTT client
     */
    protected client: MqttConnection,
    config: MqttDeviceConfig,
  ) {
    this.genericConfig = config;
    this._stateTopic = `${this.genericConfig.context}/${this.genericConfig.uniqueId}/${this.genericConfig.type}/state`;
  }

  /**
   * The state topic that this device will publish to
   */
  protected get stateTopic() {
    return this._stateTopic;
  }

  /**
   * The unique ID that can be used to refer to this device
   */
  public get uniqueId() {
    return this.genericConfig.uniqueId;
  }

  /**
   * Subclasses can override this method to provide configuration information
   * specific to that kind of device
   */
  protected abstract getDeviceSpecificConfig(): Record<string, unknown>;

  private onWakeup(message: string) {
    if (message === 'online') {
      this.triggerDiscovery();
    }
  }

  /**
   * Initialise the device
   */
  public initialise() {
    const homeassistantstatustopic = 'homeassistant/status';
    this.triggerDiscovery();
    this.client.subscribe(homeassistantstatustopic, this.onWakeup.bind(this));
  }

  private get discoveryTopic() {
    return `${this.genericConfig.discoveryPrefix}/${this.genericConfig.type}/${this.genericConfig.uniqueId}/config`;
  }

  /**
   * Delete the switch in Home Assistant
   */
  public delete() {
    this.client.publish(this.discoveryTopic, '');
  }

  private triggerDiscovery() {
    const discoveryConfig = {
      state_topic: this.stateTopic,
      unique_id: this.genericConfig.uniqueId,
      device_class: this.genericConfig.deviceClass,
      device: {
        identifiers: [`device_${this.genericConfig.uniqueId}`],
        name: this.genericConfig.friendlyName,
      },
      object_id: this.genericConfig.uniqueId,
      friendly_name: this.genericConfig.friendlyName,
      ...this.getDeviceSpecificConfig(),
    };

    this.client.publish(this.discoveryTopic, discoveryConfig);
  }

  /**
   * Get the state of the device
   */
  public get state(): string {
    return this._state ?? '';
  }

  protected set state(state: string) {
    if (state !== this._state) {
      this._state = state;
      this.client.publish(this.stateTopic, state);
    }
  }
}
