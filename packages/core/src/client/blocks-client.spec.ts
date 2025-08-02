import { afterEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';
import { when } from 'vitest-when';

import type {
  IHomeAssistant,
  StateChangedEvent,
  HassArea,
  Service,
} from '@hass-blocks/hass-ts';
import type { IEventBus, IMutableNode, ITriggerable, IEntity } from '@types';
import type { IMQTTConnection } from '@hass-blocks/hass-mqtt';

import { BlocksClient } from './blocks-client.ts';

afterEach(() => {
  vi.resetAllMocks();
});

describe('BlocksClient', () => {
  it('should handle non-Error exceptions in registerAutomation', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();
    const mockAutomation = mock<IMutableNode & ITriggerable>({
      name: 'Test Automation',
    });

    when(mockClient.getStates).calledWith().thenResolve([]);

    const nonErrorException = 'string error';
    mockAutomation.initialise.mockRejectedValue(nonErrorException);

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);

    await expect(client.registerAutomation(mockAutomation)).rejects.toBe(
      nonErrorException,
    );
  });

  it('should handle onStateChanged when entity does not exist', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();

    when(mockClient.getStates).calledWith().thenResolve([]);

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);

    const callback = vi.fn();
    await client.onStateChanged('nonexistent.entity', callback);

    expect(mockBus.emit).toHaveBeenCalledWith('generalFailure', {
      message: "You tried to subscribe to an entity that doesn't exist",
      error: expect.any(Error),
    });
  });

  it('should emit log event when Error is thrown in registerAutomation', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();
    const mockAutomation = mock<IMutableNode & ITriggerable>({
      name: 'Test Automation',
    });

    when(mockClient.getStates).calledWith().thenResolve([]);

    const errorMessage = 'Initialization failed';
    mockAutomation.initialise.mockRejectedValue(new Error(errorMessage));

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);

    await client.registerAutomation(mockAutomation);

    expect(mockBus.emit).toHaveBeenCalledWith('log-event', {
      message: `Failed to register automation ${mockAutomation.name}: Error: ${errorMessage}`,
      module: 'core',
      level: 'error',
    });
  });

  it('should emit trace log event when onStateChanged receives matching event', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();

    const existingEntity = {
      entity_id: 'light.living_room',
      state: 'off',
      attributes: {},
      last_changed: '2023-01-01T00:00:00Z',
      last_reported: '2023-01-01T00:00:00Z',
      last_updated: '2023-01-01T00:00:00Z',
      context: { id: 'test', parent_id: null, user_id: 'test-user' },
    };
    when(mockClient.getStates).calledWith().thenResolve([existingEntity]);

    let eventCallback: (event: StateChangedEvent) => void = vi.fn();
    mockClient.on.mockImplementation(
      vi.fn().mockImplementation((callback) => {
        eventCallback = callback;
        return Promise.resolve('test-id');
      }),
    );

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);

    const userCallback = vi.fn();
    await client.onStateChanged('light.living_room', userCallback);

    const stateChangedEvent: StateChangedEvent = {
      event_type: 'state_changed',
      time_fired: '2023-01-01T00:00:01Z',
      origin: 'LOCAL',
      context: { id: 'event-context', parent_id: null, user_id: 'test-user' },
      data: {
        entity_id: 'light.living_room',
        new_state: {
          entity_id: 'light.living_room',
          state: 'on',
          attributes: {},
          last_changed: '2023-01-01T00:00:01Z',
          last_reported: '2023-01-01T00:00:01Z',
          last_updated: '2023-01-01T00:00:01Z',
          context: { id: 'test2', parent_id: null, user_id: 'test-user' },
        },
        old_state: {
          entity_id: 'light.living_room',
          state: 'off',
          attributes: {},
          last_changed: '2023-01-01T00:00:00Z',
          last_reported: '2023-01-01T00:00:00Z',
          last_updated: '2023-01-01T00:00:00Z',
          context: { id: 'test', parent_id: null, user_id: 'test-user' },
        },
      },
    };

    eventCallback(stateChangedEvent);

    expect(mockBus.emit).toHaveBeenCalledWith('log-event', {
      message: `Recieved ${stateChangedEvent.event_type} - ${stateChangedEvent}`,
      level: 'trace',
      module: 'core',
    });
    expect(userCallback).toHaveBeenCalledWith(stateChangedEvent);
  });

  it('should prevent memory leaks by not accumulating listeners on multiple onStateChanged calls', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();

    const existingEntity = {
      entity_id: 'light.living_room',
      state: 'off',
      attributes: {},
      last_changed: '2023-01-01T00:00:00Z',
      last_reported: '2023-01-01T00:00:00Z',
      last_updated: '2023-01-01T00:00:00Z',
      context: { id: 'test', parent_id: null, user_id: 'test-user' },
    };
    when(mockClient.getStates).calledWith().thenResolve([existingEntity]);

    mockClient.on.mockResolvedValue('subscription-id');

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);

    await client.loadStates();

    const callback1 = vi.fn();
    const callback2 = vi.fn();

    await client.onStateChanged('light.living_room', callback1);
    await client.onStateChanged('light.living_room', callback2);

    expect(mockClient.on).toHaveBeenCalledTimes(1);
  });

  it('should get state by string id', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();

    const entityState = {
      entity_id: 'light.living_room',
      state: 'on',
      attributes: {},
      last_changed: '',
      last_reported: '',
      last_updated: '',
      context: { id: '', parent_id: null, user_id: '' },
    };
    when(mockClient.getStates).calledWith().thenResolve([entityState]);

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);
    await client.loadStates();

    const state = client.getState('light.living_room');

    expect(state).toBe('on');
  });

  it('should get state by entity object', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();
    const mockEntity = mock<IEntity<'light.kitchen'>>({
      targetIds: { entity_id: ['light.kitchen'] },
    });

    const entityState = {
      entity_id: 'light.kitchen',
      state: 'off',
      attributes: {},
      last_changed: '',
      last_reported: '',
      last_updated: '',
      context: { id: '', parent_id: null, user_id: '' },
    };
    when(mockClient.getStates).calledWith().thenResolve([entityState]);

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);
    await client.loadStates();

    const state = client.getState(mockEntity);

    expect(state).toBe('off');
  });

  it('should get services and cache them', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();

    const services = {
      light: {
        turn_on: mock<Service>({
          name: 'turn_on',
          description: 'Turn on light',
          fields: {},
        }),
        turn_off: mock<Service>({
          name: 'turn_off',
          description: 'Turn off light',
          fields: {},
        }),
      },
    };
    when(mockClient.getServices).calledWith().thenResolve(services);

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);

    const result1 = await client.getServices();
    const result2 = await client.getServices();

    expect(result1).toBe(services);
    expect(result2).toBe(services);
    expect(mockClient.getServices).toHaveBeenCalledTimes(1);
  });

  it('should get entity by string id', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();

    const entityState = {
      entity_id: 'light.bedroom',
      state: 'on',
      attributes: {},
      last_changed: '',
      last_reported: '',
      last_updated: '',
      context: { id: '', parent_id: null, user_id: '' },
    };
    when(mockClient.getStates).calledWith().thenResolve([entityState]);

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);
    await client.loadStates();

    const entity = client.getEntity('light.bedroom');

    expect(entity).toEqual(entityState);
  });

  it('should get entity by entity object', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();
    const mockEntity = mock<IEntity<'switch.hallway'>>({
      targetIds: { entity_id: ['switch.hallway'] },
    });

    const entityState = {
      entity_id: 'switch.hallway',
      state: 'off',
      attributes: {},
      last_changed: '',
      last_reported: '',
      last_updated: '',
      context: { id: '', parent_id: null, user_id: '' },
    };
    when(mockClient.getStates).calledWith().thenResolve([entityState]);

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);
    await client.loadStates();

    const entity = client.getEntity(mockEntity);

    expect(entity).toEqual(entityState);
  });

  it('should get areas and cache them', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();

    const areas = [
      mock<HassArea>({ area_id: 'living_room', name: 'Living Room' }),
    ];
    when(mockClient.getAreas).calledWith().thenResolve(areas);

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);

    const result1 = await client.getAreas();
    const result2 = await client.getAreas();

    expect(result1).toBe(areas);
    expect(result2).toBe(areas);
    expect(mockClient.getAreas).toHaveBeenCalledTimes(1);
  });

  it('should return registered automations', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();
    const mockTrigger = mock<{ attachToClient: () => Promise<void> }>({
      attachToClient: vi.fn().mockResolvedValue(undefined),
    });
    const mockAutomation = mock<IMutableNode & ITriggerable>({
      name: 'Test Automation',
      trigger: mockTrigger,
      initialise: vi.fn().mockResolvedValue(undefined),
      toJson: vi.fn().mockReturnValue({ name: 'Test Automation' }),
    });

    when(mockClient.getStates).calledWith().thenResolve([]);

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);

    await client.registerAutomation(mockAutomation);
    const automations = client.getAutomations();

    expect(automations).toHaveLength(1);
    expect(automations[0]).toBe(mockAutomation);
  });

  it('should register trigger and load states if not loaded', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();

    when(mockClient.getStates).calledWith().thenResolve([]);
    when(mockClient.registerTrigger)
      .calledWith(expect.any(Object), expect.any(Function))
      .thenResolve();

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);
    const trigger = { platform: 'state' };
    const callback = vi.fn();

    await client.registerTrigger(trigger, callback);

    expect(mockClient.getStates).toHaveBeenCalled();
    expect(mockClient.registerTrigger).toHaveBeenCalledWith(
      trigger,
      expect.any(Function),
    );
  });

  it('should call service through client', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();

    const serviceParams = {
      domain: 'light',
      service: 'turn_on',
      target: { entity_id: 'light.test' },
    };
    when(mockClient.callService).calledWith(serviceParams).thenResolve();

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);

    await client.callService(serviceParams);

    expect(mockClient.callService).toHaveBeenCalledWith(serviceParams);
  });

  it('should throw error when getStates called before loadStates', () => {
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);

    expect(() => client.getStates()).toThrow(
      'States have not been loaded yet - is blocks initialised?',
    );
  });

  it('should return states map when getStates called after loadStates', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();

    const entityState = {
      entity_id: 'light.test',
      state: 'on',
      attributes: {},
      last_changed: '',
      last_reported: '',
      last_updated: '',
      context: { id: '', parent_id: null, user_id: '' },
    };
    when(mockClient.getStates).calledWith().thenResolve([entityState]);

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);
    await client.loadStates();

    const states = client.getStates();

    expect(states).toBeInstanceOf(Map);
    expect(states.get('light.test')).toEqual(entityState);
  });

  it('should throw InitialStatesNotLoadedError when accessing entity before loadStates', () => {
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);

    expect(() => client.getState('light.test')).toThrow();
  });

  it('should throw EntityDoesNotExistError when accessing nonexistent entity', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();

    when(mockClient.getStates).calledWith().thenResolve([]);

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);
    await client.loadStates();

    expect(() => client.getState('nonexistent.entity')).toThrow();
  });

  it('should periodically refresh states every 5 minutes', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();
    mockClient.on.mockResolvedValue('subscription-id');

    const initialStates = [
      {
        entity_id: 'light.test',
        state: 'on',
        attributes: {},
        last_changed: '',
        last_reported: '',
        last_updated: '',
        context: { id: '', parent_id: null, user_id: '' },
      },
    ];

    const updatedStates = [
      {
        entity_id: 'light.test',
        state: 'off',
        attributes: {},
        last_changed: '',
        last_reported: '',
        last_updated: '',
        context: { id: '', parent_id: null, user_id: '' },
      },
      {
        entity_id: 'light.new',
        state: 'on',
        attributes: {},
        last_changed: '',
        last_reported: '',
        last_updated: '',
        context: { id: '', parent_id: null, user_id: '' },
      },
    ];

    mockClient.getStates
      .mockResolvedValueOnce(initialStates)
      .mockResolvedValueOnce(updatedStates)
      .mockResolvedValue([]);

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);
    await client.loadStates();

    expect(client.getStates().size).toBe(1);
    expect(client.getState('light.test')).toBe('on');

    vi.advanceTimersByTime(5 * 60 * 1000);
    await vi.waitFor(() => {
      expect(mockClient.getStates).toHaveBeenCalledTimes(2);
    });

    expect(client.getStates().size).toBe(2);
    expect(client.getState('light.test')).toBe('off');
    expect(client.getState('light.new')).toBe('on');

    await client.shutdown();
    vi.useRealTimers();
  });

  it('should clear periodic refresh timer on shutdown', async () => {
    vi.useFakeTimers();
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();

    when(mockClient.getStates).calledWith().thenResolve([]);

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);
    await client.loadStates();

    await client.shutdown();

    vi.advanceTimersByTime(5 * 60 * 1000);
    await vi.runAllTimersAsync();

    expect(mockClient.getStates).toHaveBeenCalledTimes(1);

    vi.useRealTimers();
  });

  it('should allow unsubscribing from state changes', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();

    const existingEntity = {
      entity_id: 'light.living_room',
      state: 'off',
      attributes: {},
      last_changed: '2023-01-01T00:00:00Z',
      last_reported: '2023-01-01T00:00:00Z',
      last_updated: '2023-01-01T00:00:00Z',
      context: { id: 'test', parent_id: null, user_id: 'test-user' },
    };
    when(mockClient.getStates).calledWith().thenResolve([existingEntity]);

    let eventCallback: (event: StateChangedEvent) => void = vi.fn();
    mockClient.on.mockImplementation(
      vi.fn().mockImplementation((callback) => {
        eventCallback = callback;
        return Promise.resolve('test-id');
      }),
    );

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);

    const userCallback = vi.fn();
    const unsubscribe = await client.onStateChanged(
      'light.living_room',
      userCallback,
    );

    const stateChangedEvent: StateChangedEvent = {
      event_type: 'state_changed',
      time_fired: '2023-01-01T00:00:01Z',
      origin: 'LOCAL',
      context: { id: 'event-context', parent_id: null, user_id: 'test-user' },
      data: {
        entity_id: 'light.living_room',
        new_state: {
          entity_id: 'light.living_room',
          state: 'on',
          attributes: {},
          last_changed: '2023-01-01T00:00:01Z',
          last_reported: '2023-01-01T00:00:01Z',
          last_updated: '2023-01-01T00:00:01Z',
          context: { id: 'test2', parent_id: null, user_id: 'test-user' },
        },
        old_state: existingEntity,
      },
    };

    eventCallback(stateChangedEvent);
    expect(userCallback).toHaveBeenCalledWith(stateChangedEvent);

    (await unsubscribe)();

    userCallback.mockClear();
    eventCallback(stateChangedEvent);
    expect(userCallback).not.toHaveBeenCalled();
  });

  it('should clean up entity callbacks map when last callback is removed', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();

    const existingEntity = {
      entity_id: 'light.living_room',
      state: 'off',
      attributes: {},
      last_changed: '2023-01-01T00:00:00Z',
      last_reported: '2023-01-01T00:00:00Z',
      last_updated: '2023-01-01T00:00:00Z',
      context: { id: 'test', parent_id: null, user_id: 'test-user' },
    };
    when(mockClient.getStates).calledWith().thenResolve([existingEntity]);
    mockClient.on.mockResolvedValue('subscription-id');

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);

    const callback1 = vi.fn();
    const callback2 = vi.fn();

    const unsubscribe1 = await client.onStateChanged(
      'light.living_room',
      callback1,
    );
    const unsubscribe2 = await client.onStateChanged(
      'light.living_room',
      callback2,
    );

    expect(client.getEntityCallbacksSize()).toBe(1);

    unsubscribe1();
    expect(client.getEntityCallbacksSize()).toBe(1);

    unsubscribe2();
    expect(client.getEntityCallbacksSize()).toBe(0);
  });

  it('should handle errors during periodic state refresh', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();
    mockClient.on.mockResolvedValue('subscription-id');

    mockClient.getStates
      .mockResolvedValueOnce([])
      .mockRejectedValue(new Error('Network error'));

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);
    await client.loadStates();

    vi.advanceTimersByTime(5 * 60 * 1000);

    await vi.waitFor(
      () => {
        expect(mockClient.getStates).toHaveBeenCalledTimes(2);
      },
      { timeout: 1000 },
    );

    await new Promise((resolve) => setTimeout(resolve, 10));

    expect(mockBus.emit).toHaveBeenCalledWith('log-event', {
      message: 'Failed to refresh states: Error: Network error',
      module: 'core',
      level: 'error',
    });

    await client.shutdown();
    vi.useRealTimers();
  });

  it('should destroy all automations during shutdown', async () => {
    const mockClient = mock<IHomeAssistant>();
    const mockBus = mock<IEventBus>();
    const mockMqtt = mock<IMQTTConnection>();
    const mockTrigger = mock<{ attachToClient: () => Promise<void> }>();
    const mockAutomation = mock<IMutableNode & ITriggerable>({
      name: 'Test Automation',
      trigger: mockTrigger,
      destroy: vi.fn(),
      initialise: vi.fn().mockResolvedValue(undefined),
      toJson: vi.fn().mockReturnValue({ name: 'Test Automation' }),
    });

    when(mockClient.getStates).calledWith().thenResolve([]);

    const client = new BlocksClient(mockClient, mockBus, mockMqtt);
    await client.registerAutomation(mockAutomation);

    await client.shutdown();

    expect(mockAutomation.destroy).toHaveBeenCalled();
    expect(client.getAutomations()).toHaveLength(0);
  });
});
