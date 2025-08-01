import { afterEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';
import { when } from 'vitest-when';

import { initialiseHass } from '@hass-blocks/hass-ts';
import type { IHomeAssistant } from '@hass-blocks/hass-ts';
import { getConfig, loadPlugins } from '@core';
import type { IBlocksPlugin } from '@types';

import { initialiseBlocks } from './initialise-blocks.ts';
import { createDefaultLogger } from './create-default-logger.ts';

vi.mock('@hass-blocks/hass-ts');
vi.mock('@core');
vi.mock('./lazy-mqtt.ts');
vi.mock('./create-default-logger.ts');

afterEach(() => {
  vi.resetAllMocks();
});

describe('initialiseBlocks', () => {
  it('should use default logger info function when no logger provided', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockLogger = {
      trace: vi.fn(),
      debug: vi.fn(),
      info: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
      fatal: vi.fn(),
    };

    vi.mocked(createDefaultLogger).mockReturnValue(mockLogger);

    when(getConfig).calledWith().thenReturn({
      host: 'test-host',
      port: 8123,
      token: 'test-token',
      websocketPath: '/api/websocket',
      httpPath: '/api',
      mqttUsername: 'test-user',
      mqttPassword: 'test-pass',
      mqttHost: 'test-host',
      mqttPort: 1883,
    });

    vi.mocked(initialiseHass).mockResolvedValue(mockClient);

    await initialiseBlocks();

    expect(mockLogger.info).toHaveBeenCalledWith(
      expect.stringContaining('Initialised Hass Blocks version'),
    );
  });

  it('should load plugins when provided', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockPlugin = mock<IBlocksPlugin>();
    const mockLogger = {
      trace: vi.fn(),
      debug: vi.fn(),
      info: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
      fatal: vi.fn(),
    };

    vi.mocked(createDefaultLogger).mockReturnValue(mockLogger);

    when(getConfig).calledWith().thenReturn({
      host: 'test-host',
      port: 8123,
      token: 'test-token',
      websocketPath: '/api/websocket',
      httpPath: '/api',
      mqttUsername: 'test-user',
      mqttPassword: 'test-pass',
      mqttHost: 'test-host',
      mqttPort: 1883,
    });

    vi.mocked(initialiseHass).mockResolvedValue(mockClient);

    await initialiseBlocks({ plugins: [mockPlugin] });

    expect(loadPlugins).toHaveBeenCalledWith({
      plugins: [mockPlugin],
      events: expect.any(Object),
      client: expect.any(Object),
      config: expect.any(Object),
      logger: expect.any(Object),
    });
  });

  it('should use provided logger instead of default', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockLogger = {
      trace: vi.fn(),
      debug: vi.fn(),
      info: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
      fatal: vi.fn(),
    };

    when(getConfig).calledWith().thenReturn({
      host: 'test-host',
      port: 8123,
      token: 'test-token',
      websocketPath: '/api/websocket',
      httpPath: '/api',
      mqttUsername: 'test-user',
      mqttPassword: 'test-pass',
      mqttHost: 'test-host',
      mqttPort: 1883,
    });

    vi.mocked(initialiseHass).mockResolvedValue(mockClient);

    await initialiseBlocks({ logger: mockLogger });

    expect(mockLogger.info).toHaveBeenCalledWith(
      expect.stringContaining('Initialised Hass Blocks version'),
    );
  });

  it('should use provided client instead of initializing new one', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockLogger = {
      trace: vi.fn(),
      debug: vi.fn(),
      info: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
      fatal: vi.fn(),
    };

    vi.mocked(createDefaultLogger).mockReturnValue(mockLogger);

    when(getConfig).calledWith().thenReturn({
      host: 'test-host',
      port: 8123,
      token: 'test-token',
      websocketPath: '/api/websocket',
      httpPath: '/api',
      mqttUsername: 'test-user',
      mqttPassword: 'test-pass',
      mqttHost: 'test-host',
      mqttPort: 1883,
    });

    await initialiseBlocks({ client: mockClient });

    expect(initialiseHass).not.toHaveBeenCalled();
  });

  it('should use default logger when no logger provided', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockLogger = {
      trace: vi.fn(),
      debug: vi.fn(),
      info: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
      fatal: vi.fn(),
    };

    vi.mocked(createDefaultLogger).mockReturnValue(mockLogger);

    when(getConfig).calledWith().thenReturn({
      host: 'test-host',
      port: 8123,
      token: 'test-token',
      websocketPath: '/api/websocket',
      httpPath: '/api',
      mqttUsername: 'test-user',
      mqttPassword: 'test-pass',
      mqttHost: 'test-host',
      mqttPort: 1883,
    });

    vi.mocked(initialiseHass).mockResolvedValue(mockClient);

    await initialiseBlocks();

    expect(createDefaultLogger).toHaveBeenCalled();
    expect(mockLogger.info).toHaveBeenCalledWith(
      expect.stringContaining('Initialised Hass Blocks version'),
    );
  });
});
