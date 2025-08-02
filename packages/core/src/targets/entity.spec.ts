import { afterEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import type { HassEntity, IFullBlocksClient } from '@types';
import type { StateChangedEvent } from '@hass-blocks/hass-ts';
import type { IMQTTConnection } from '@hass-blocks/hass-mqtt';

import { Entity, entity } from './entity.ts';

afterEach(() => {
  vi.resetAllMocks();
});

describe('Entity', () => {
  it('should create entity with id and default name', () => {
    const testEntity = new Entity('light.living_room');

    expect(testEntity.name).toBe('light.living_room');
    expect(testEntity.targetIds).toEqual({
      entity_id: ['light.living_room'],
    });
    expect(testEntity.toString()).toBe('light.living_room');
  });

  it('should create entity with id and custom friendly name', () => {
    const testEntity = new Entity('light.living_room', 'Living Room Light');

    expect(testEntity.name).toBe('Living Room Light');
    expect(testEntity.targetIds).toEqual({
      entity_id: ['light.living_room'],
    });
    expect(testEntity.toString()).toBe('Living Room Light');
  });

  it('should throw error when accessing currentState before initialization', () => {
    const testEntity = new Entity('light.living_room');

    expect(() => testEntity.currentState).toThrow(
      "Entity has not been initialised! Put it in the target array of any block that is attached to a registered automation and you'll be able to get its state",
    );
  });

  it('should initialize successfully and provide current state', async () => {
    const testEntity = new Entity('light.living_room');
    const mockMqtt = mock<IMQTTConnection>();
    const mockEntity = mock<HassEntity>();
    const mockHass = mock<IFullBlocksClient>({
      getEntity: vi.fn().mockReturnValue(mockEntity),
      onStateChanged: vi.fn().mockResolvedValue(undefined),
    });

    await testEntity.initialise(mockHass, mockMqtt);

    expect(mockHass.getEntity).toHaveBeenCalledWith('light.living_room');
    expect(mockHass.onStateChanged).toHaveBeenCalledWith(
      'light.living_room',
      expect.any(Function),
    );
    expect(testEntity.currentState).toBe(mockEntity);
  });

  it('should rethrow original error when initialization fails with generic error', async () => {
    const testEntity = new Entity('light.invalid');
    const mockMqtt = mock<IMQTTConnection>();
    const originalError = new Error('Entity not found');
    const mockHass = mock<IFullBlocksClient>({
      getEntity: vi.fn().mockImplementation(() => {
        throw originalError;
      }),
      onStateChanged: vi.fn().mockResolvedValue(undefined),
    });

    await expect(testEntity.initialise(mockHass, mockMqtt)).rejects.toThrow(
      'Entity not found',
    );
  });

  it('should update current state when state change event is received', async () => {
    const testEntity = new Entity('light.living_room', 'Living Room Light');
    let stateChangeCallback: (event: StateChangedEvent) => void = vi.fn();

    const mockHass = mock<IFullBlocksClient>();
    mockHass.getEntity.mockReturnValue({
      entity_id: 'light.living_room',
      state: 'off',
      attributes: {},
      last_changed: '',
      last_updated: '',
      context: { id: '', parent_id: null, user_id: '' },
    });
    mockHass.onStateChanged.mockImplementation((_entityId, callback) => {
      stateChangeCallback = callback;
      return Promise.resolve(() => {
        // NOOP
      });
    });
    const mockMqtt = mock<IMQTTConnection>();

    await testEntity.initialise(mockHass, mockMqtt);

    const newStateEvent: StateChangedEvent = {
      event_type: 'state_changed',
      time_fired: '2023-01-01T00:00:00.000Z',
      origin: 'LOCAL',
      context: { id: 'test-context', parent_id: null, user_id: 'test-user' },
      data: {
        entity_id: 'light.living_room',
        new_state: {
          entity_id: 'light.living_room',
          state: 'on',
          attributes: {},
          last_changed: '',
          last_updated: '',
          last_reported: '',
          context: { id: '', parent_id: null, user_id: '' },
        },
        old_state: {
          entity_id: 'light.living_room',
          state: 'off',
          attributes: {},
          last_changed: '',
          last_updated: '',
          last_reported: '',
          context: { id: '', parent_id: null, user_id: '' },
        },
      },
    };

    stateChangeCallback(newStateEvent);

    expect(testEntity.currentState?.state).toBe('on');
  });
});

describe('entity factory function', () => {
  it('should create entity instance using factory function', () => {
    const testEntity = entity('light.kitchen', 'Kitchen Light');

    expect(testEntity).toBeInstanceOf(Entity);
    expect(testEntity.toString()).toBe('Kitchen Light');
    expect(testEntity.targetIds).toEqual({
      entity_id: ['light.kitchen'],
    });
  });
});
