import { afterEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import type {
  IBlocksPlugin,
  IEventBus,
  IFullBlocksClient,
  ILogger,
} from '@types';
import type { HassConfig } from '@hass-blocks/hass-ts';

import { loadPlugins } from './load-plugins.ts';

afterEach(() => {
  vi.resetAllMocks();
});

describe('loadPlugins', () => {
  it('should emit load-plugins-started and load-plugins-finished events', async () => {
    const mockEvents = mock<IEventBus>();
    const mockClient = mock<IFullBlocksClient>();
    const mockConfig = mock<HassConfig>();
    const mockLogger = mock<ILogger>();
    const mockPlugin = mock<IBlocksPlugin>({
      name: 'test-plugin',
      load: vi.fn().mockResolvedValue(undefined),
    });

    await loadPlugins({
      events: mockEvents,
      client: mockClient,
      config: mockConfig,
      logger: mockLogger,
      plugins: [mockPlugin],
    });

    expect(mockEvents.emit).toHaveBeenCalledWith('load-plugins-started');
    expect(mockEvents.emit).toHaveBeenCalledWith('load-plugins-finished', {
      plugins: ['test-plugin'],
    });
  });

  it('should emit load-plugin-started and load-plugin-finished for each plugin', async () => {
    const mockEvents = mock<IEventBus>();
    const mockClient = mock<IFullBlocksClient>();
    const mockConfig = mock<HassConfig>();
    const mockLogger = mock<ILogger>();
    const mockPlugin = mock<IBlocksPlugin>({
      name: 'test-plugin',
      load: vi.fn().mockResolvedValue(undefined),
    });

    await loadPlugins({
      events: mockEvents,
      client: mockClient,
      config: mockConfig,
      logger: mockLogger,
      plugins: [mockPlugin],
    });

    expect(mockEvents.emit).toHaveBeenCalledWith('load-plugin-started', {
      name: 'test-plugin',
    });
    expect(mockEvents.emit).toHaveBeenCalledWith('load-plugin-finished', {
      name: 'test-plugin',
    });
  });

  it('should call load method on each plugin with correct config', async () => {
    const mockEvents = mock<IEventBus>();
    const mockClient = mock<IFullBlocksClient>();
    const mockConfig = mock<HassConfig>();
    const mockLogger = mock<ILogger>();
    const mockPlugin = mock<IBlocksPlugin>({
      name: 'test-plugin',
      load: vi.fn().mockResolvedValue(undefined),
    });

    await loadPlugins({
      events: mockEvents,
      client: mockClient,
      config: mockConfig,
      logger: mockLogger,
      plugins: [mockPlugin],
    });

    expect(mockPlugin.load).toHaveBeenCalledWith({
      events: mockEvents,
      client: mockClient,
      config: mockConfig,
      logger: mockLogger,
    });
  });

  it('should handle empty plugins array', async () => {
    const mockEvents = mock<IEventBus>();
    const mockClient = mock<IFullBlocksClient>();
    const mockConfig = mock<HassConfig>();
    const mockLogger = mock<ILogger>();

    await loadPlugins({
      events: mockEvents,
      client: mockClient,
      config: mockConfig,
      logger: mockLogger,
      plugins: [],
    });

    expect(mockEvents.emit).toHaveBeenCalledWith('load-plugins-started');
    expect(mockEvents.emit).toHaveBeenCalledWith('load-plugins-finished', {
      plugins: [],
    });
  });
});
