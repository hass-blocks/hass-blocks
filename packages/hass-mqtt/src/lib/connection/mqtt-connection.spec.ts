import { MqttConnection } from './mqtt-connection.ts';
import { when } from 'vitest-when';
import { mock } from 'vitest-mock-extended';
import {
  connect,
  type MqttClient,
  type MqttClientEventCallbacks,
  type IClientOptions,
  type ClientSubscribeCallback,
  type ISubscriptionMap,
} from 'mqtt';
import type { ILogger } from '@types';

vi.mock('mqtt');

afterEach(() => {
  vi.resetAllMocks();
});

describe('MQTT connection', () => {
  describe('create', () => {
    it('calls connect and waits for the connection', async () => {
      const config: IClientOptions = {
        host: 'test',
        username: 'username',
        password: 'password',
      };

      const mockOn = vi.fn(
        <
          T extends keyof MqttClientEventCallbacks,
          C extends MqttClientEventCallbacks[T],
        >(
          name: T,
          callback: C,
        ) => {
          if (name === 'connect') {
            callback(mock(), mock(), mock());
          }
          return mock();
        },
      );

      const mockMqtt = mock<MqttClient>({
        on: mockOn,
      });

      type ConnectFunc = (opts: IClientOptions) => MqttClient;

      when<ConnectFunc>(connect).calledWith(config).thenReturn(mockMqtt);

      await MqttConnection.create(config, mock());
    });

    it('handles MQTT client errors', async () => {
      const config: IClientOptions = {
        host: 'test',
        username: 'username',
        password: 'password',
      };

      const mockLogger = mock<ILogger>();
      const testError = new Error('Connection failed');

      const mockOn = vi.fn(
        (name: string, callback: (...args: unknown[]) => void) => {
          if (name === 'connect') {
            callback(mock(), mock(), mock());
          }
          if (name === 'error') {
            callback(testError);
          }
          return mock();
        },
      );

      const mockMqtt = mock<MqttClient>({
        on: mockOn,
      });

      type ConnectFunc = (opts: IClientOptions) => MqttClient;

      when<ConnectFunc>(connect).calledWith(config).thenReturn(mockMqtt);

      await MqttConnection.create(config, mockLogger);

      expect(mockLogger.error).toHaveBeenCalledWith('Connection failed');
    });

    it('resolves immediately if client is already connected', async () => {
      const config: IClientOptions = {
        host: 'test',
        username: 'username',
        password: 'password',
      };

      const mockOn = vi.fn(
        <
          T extends keyof MqttClientEventCallbacks,
          C extends MqttClientEventCallbacks[T],
        >(
          name: T,
          callback: C,
        ) => {
          if (name === 'connect') {
            callback(mock(), mock(), mock());
          }
          return mock();
        },
      );

      const mockMqtt = mock<MqttClient>({
        on: mockOn,
      });

      type ConnectFunc = (opts: IClientOptions) => MqttClient;

      when<ConnectFunc>(connect).calledWith(config).thenReturn(mockMqtt);

      const connection = await MqttConnection.create(config, mock());

      await connection.connect();
    });
  });

  describe('publish', () => {
    it('publishes a message on the connection', async () => {
      const config: IClientOptions = {
        host: 'test',
        username: 'username',
        password: 'password',
      };

      const mockOn = vi.fn(
        <
          T extends keyof MqttClientEventCallbacks,
          C extends MqttClientEventCallbacks[T],
        >(
          name: T,
          callback: C,
        ) => {
          if (name === 'connect') {
            callback(mock(), mock(), mock());
          }
          return mock();
        },
      );

      const mockMqtt = mock<MqttClient>({
        on: mockOn,
      });

      type ConnectFunc = (opts: IClientOptions) => MqttClient;

      when<ConnectFunc>(connect).calledWith(config).thenReturn(mockMqtt);

      const client = await MqttConnection.create(config, mock());

      client.publish('foo', { baz: 'bop' });

      expect(mockMqtt.publish).toHaveBeenCalledWith(
        'foo',
        JSON.stringify({ baz: 'bop' }, null, 2),
      );
    });

    it('publishes a string message without JSON stringifying', async () => {
      const config: IClientOptions = {
        host: 'test',
        username: 'username',
        password: 'password',
      };

      const mockOn = vi.fn(
        <
          T extends keyof MqttClientEventCallbacks,
          C extends MqttClientEventCallbacks[T],
        >(
          name: T,
          callback: C,
        ) => {
          if (name === 'connect') {
            callback(mock(), mock(), mock());
          }
          return mock();
        },
      );

      const mockMqtt = mock<MqttClient>({
        on: mockOn,
      });

      type ConnectFunc = (opts: IClientOptions) => MqttClient;

      when<ConnectFunc>(connect).calledWith(config).thenReturn(mockMqtt);

      const client = await MqttConnection.create(config, mock());

      client.publish('foo', 'raw string message');

      expect(mockMqtt.publish).toHaveBeenCalledWith(
        'foo',
        'raw string message',
      );
    });

    it('recieves messages that are published on the topic', async () => {
      const config: IClientOptions = {
        host: 'test',
        username: 'username',
        password: 'password',
      };

      const packet = {
        foo: 'bar',
      };

      const mockOn = vi.fn(
        <
          T extends keyof MqttClientEventCallbacks,
          C extends MqttClientEventCallbacks[T],
        >(
          name: T,
          callback: C,
        ) => {
          if (name === 'connect') {
            callback(mock(), mock(), mock());
          }

          if (name === 'message') {
            // @ts-expect-error - error
            callback('foo', JSON.stringify(packet, null, 2), mock());
          }
          return mock();
        },
      );

      const mockMqtt = mock<MqttClient>({
        on: mockOn,
      });

      mockMqtt.subscribe.mockImplementation(
        // @ts-expect-error - error
        (
          topic: string | string[] | ISubscriptionMap,
          callback?: ClientSubscribeCallback,
        ) => {
          if (topic === 'foo') {
            callback?.(mock<Error>());
          }

          return mock<MqttClient>();
        },
      );

      type ConnectFunc = (opts: IClientOptions) => MqttClient;

      when<ConnectFunc>(connect).calledWith(config).thenReturn(mockMqtt);

      const client = await MqttConnection.create(config, mock());

      const mockHandler = vi.fn();

      client.subscribe('foo', mockHandler);

      expect(mockHandler).toHaveBeenCalledWith(
        JSON.stringify({ foo: 'bar' }, null, 2),
      );
    });
  });
});
