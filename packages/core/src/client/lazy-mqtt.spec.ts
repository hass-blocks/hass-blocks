import { afterEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { MqttConnection } from '@hass-blocks/hass-mqtt';
import type { ILogger } from '@types';

import { LazyMqtt } from './lazy-mqtt.ts';

vi.mock('@hass-blocks/hass-mqtt');

afterEach(() => {
  vi.resetAllMocks();
});

describe('LazyMqtt', () => {
  it('should call connect on the underlying connection', async () => {
    const mockLogger = mock<ILogger>();
    const mockConnection = mock<MqttConnection>();

    vi.mocked(MqttConnection.create).mockResolvedValue(mockConnection);

    const lazyMqtt = new LazyMqtt(
      {
        host: 'test-host',
        port: 1883,
        username: 'test-user',
        password: 'test-pass',
      },
      mockLogger,
    );

    await lazyMqtt.connect();

    expect(mockConnection.connect).toHaveBeenCalled();
  });

  it('should call publish on the underlying connection', async () => {
    const mockLogger = mock<ILogger>();
    const mockConnection = mock<MqttConnection>();

    vi.mocked(MqttConnection.create).mockResolvedValue(mockConnection);

    const lazyMqtt = new LazyMqtt(
      {
        host: 'test-host',
        port: 1883,
        username: 'test-user',
        password: 'test-pass',
      },
      mockLogger,
    );

    const topic = 'test/topic';
    const data = { message: 'test' };

    await lazyMqtt.publish(topic, data);

    expect(mockConnection.publish).toHaveBeenCalledWith(topic, data);
  });

  it('should call subscribe on the underlying connection', async () => {
    const mockLogger = mock<ILogger>();
    const mockConnection = mock<MqttConnection>();

    vi.mocked(MqttConnection.create).mockResolvedValue(mockConnection);

    const lazyMqtt = new LazyMqtt(
      {
        host: 'test-host',
        port: 1883,
        username: 'test-user',
        password: 'test-pass',
      },
      mockLogger,
    );

    const topic = 'test/topic';
    const handler = vi.fn();

    await lazyMqtt.subscribe(topic, handler);

    expect(mockConnection.subscribe).toHaveBeenCalledWith(topic, handler);
  });

  it('should lazily create connection only when publish is called and reuse it', async () => {
    const mockLogger = mock<ILogger>();
    const mockConnection = mock<MqttConnection>();

    vi.mocked(MqttConnection.create).mockResolvedValue(mockConnection);

    const lazyMqtt = new LazyMqtt(
      {
        host: 'test-host',
        port: 1883,
        username: 'test-user',
        password: 'test-pass',
      },
      mockLogger,
    );

    expect(MqttConnection.create).not.toHaveBeenCalled();

    await lazyMqtt.publish('test/topic', { data: 'test' });

    expect(MqttConnection.create).toHaveBeenCalledTimes(1);

    await lazyMqtt.subscribe('test/topic', vi.fn());

    expect(MqttConnection.create).toHaveBeenCalledTimes(1);
  });

  it('should throw error when missing credentials', async () => {
    const mockLogger = mock<ILogger>();

    const lazyMqtt = new LazyMqtt(
      {
        host: undefined,
        port: 1883,
        username: 'test-user',
        password: 'test-pass',
      },
      mockLogger,
    );

    await expect(
      lazyMqtt.publish('test/topic', { data: 'test' }),
    ).rejects.toThrow('Could not load MQTT client - missing credentials');
  });
});
