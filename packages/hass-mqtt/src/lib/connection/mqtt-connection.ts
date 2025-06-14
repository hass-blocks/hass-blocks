import type { ILogger } from '@types';
import mqtt, { type IClientOptions, type MqttClient } from 'mqtt';

/**
 * @public
 *
 * A connection to the Home Assistant MQTT broker
 */
export class MqttConnection {
  private _client: MqttClient | undefined;

  private constructor(
    private options: IClientOptions,
    private logger: ILogger,
  ) {}

  private get client(): MqttClient {
    if (!this._client) {
      this._client = mqtt.connect(this.options);

      this.client.on('error', (message) => {
        this.logger.error(message.message);
      });
    }
    return this._client;
  }

  private initialise() {
    return new Promise<void>((accept) => {
      if (this._client) {
        return accept();
      }
      this.client.on('connect', () => {
        accept();
      });
    });
  }

  /**
   * Start the connection
   */
  public async connect(): Promise<void> {
    await this.initialise();
  }

  /**
   * Publish some data to a topic
   *
   * @param topic - The key of the topic to publish to
   * @param data - The data to publish
   */
  public async publish(topic: string, data: Record<string, unknown> | string) {
    const dataString =
      typeof data !== 'string' ? JSON.stringify(data, null, 2) : data;
    this.logger.trace(`${topic} -> ${dataString}`);
    this.client.publish(topic, dataString);
  }

  /**
   *  Subscribe to a specific MQTT topic
   *
   * @param topic - The topic to subscribe to
   * @param handler - Will be called when there is a new message on the topic
   */
  public async subscribe(topic: string, handler: (message: string) => void) {
    this.client.subscribe(topic, () => {
      this.logger.info(`Successfully subscribed to ${topic}`);
      this.client.on('message', async (messageTopic, message) => {
        this.logger.trace(`received on ${messageTopic}: ${message}`);
        if (messageTopic === topic) {
          handler(message.toString());
        }
      });
    });
  }

  /**
   * Create and initialise an MQTT connection
   *
   * @param options - Options for the MQTT client
   * @returns
   */
  public static async create(options: IClientOptions, logger: ILogger) {
    const connection = new MqttConnection(options, logger);
    await connection.connect();
    return connection;
  }
}
