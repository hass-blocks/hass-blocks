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

      // No assertion because this is mostly just testing the promise resolves
      await MqttConnection.create(config);
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

      const client = await MqttConnection.create(config);

      client.publish('foo', { baz: 'bop' });

      expect(mockMqtt.publish).toHaveBeenCalledWith(
        'foo',
        JSON.stringify({ baz: 'bop' }, null, 2),
      );
    });

    describe('subscribe', () => {
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
              // @ts-expect-error
              callback('foo', JSON.stringify(packet, null, 2), mock());
            }
            return mock();
          },
        );

        const mockMqtt = mock<MqttClient>({
          on: mockOn,
        });

        mockMqtt.subscribe.mockImplementation(
          // @ts-expect-error
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

        const client = await MqttConnection.create(config);

        const mockHandler = vi.fn();

        client.subscribe('foo', mockHandler);

        expect(mockHandler).toHaveBeenCalledWith(
          JSON.stringify({ foo: 'bar' }, null, 2),
        );
      });
    });
  });
});
