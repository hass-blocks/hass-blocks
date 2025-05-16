import { HassBlocksError } from '@errors';
import { type IMQTTConnection, MqttConnection } from '@hass-blocks/hass-mqtt';

interface LazyMqttOptions {
  host: string | undefined;
  port: number | undefined;
  username: string | undefined;
  password: string | undefined;
}

export class LazyMqtt implements IMQTTConnection {
  private theConnection: MqttConnection | undefined;

  public constructor(private config: LazyMqttOptions) {}

  private async initialisedConnection(): Promise<MqttConnection> {
    if (!this.theConnection) {
      const { host, port, username, password } = this.config;
      if (!host || !port || !username || !password) {
        throw new HassBlocksError(
          `Could not load MQTT client - missing credentials`,
        );
      }
      this.theConnection = await MqttConnection.create({
        host,
        port,
        username,
        password,
      });
    }
    return this.theConnection;
  }

  async connect(): Promise<void> {
    const connection = await this.initialisedConnection();
    await connection.connect();
  }

  async publish(
    topic: string,
    data: Record<string, unknown> | string,
  ): Promise<void> {
    const connection = await this.initialisedConnection();
    connection.publish(topic, data);
  }

  async subscribe(
    topic: string,
    handler: (message: string) => void,
  ): Promise<void> {
    const connection = await this.initialisedConnection();
    connection.subscribe(topic, handler);
  }
}
