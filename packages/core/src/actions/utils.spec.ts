import { afterEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';
import { when } from 'vitest-when';

import type { IBlockRunner, IHass, ITarget } from '@types';
import type { Pass } from '@sequence-validator';
import { waitInSeconds, waitInMinutes } from '@utils';

import {
  waitMinutes,
  waitSeconds,
  waitUntilState,
  waitUntilStateIsNot,
} from './utils.ts';

vi.mock('@utils');

afterEach(() => {
  vi.resetAllMocks();
});

describe('waitMinutes', () => {
  it('should create action that waits for specified minutes', async () => {
    expect.assertions(2);

    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    const mockInput = { data: 'test' } as unknown as Pass;

    vi.mocked(waitInMinutes).mockResolvedValue(undefined);

    const action = waitMinutes(5);
    const result = await action.run({
      hass: mockHass,
      input: mockInput,
      runner: mockRunner,
    });

    expect(waitInMinutes).toHaveBeenCalledWith(5);
    if ('output' in result) {
      expect(result.output).toBe(mockInput);
    }
  });

  it('should have correct action name', () => {
    const action = waitMinutes(3);
    expect(action.name).toBe('Wait 3 minutes');
  });
});

describe('waitSeconds', () => {
  it('should create action that waits for specified seconds', async () => {
    expect.assertions(2);

    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    const mockInput = { data: 'test' } as unknown as Pass;

    vi.mocked(waitInSeconds).mockResolvedValue(undefined);

    const action = waitSeconds(30);
    const result = await action.run({
      hass: mockHass,
      input: mockInput,
      runner: mockRunner,
    });

    expect(waitInSeconds).toHaveBeenCalledWith(30);
    if ('output' in result) {
      expect(result.output).toBe(mockInput);
    }
  });

  it('should have correct action name', () => {
    const action = waitSeconds(45);
    expect(action.name).toBe('Wait 45 seconds');
  });
});

describe('waitUntilState', () => {
  it('should create action with correct name', () => {
    const mockTarget = mock<ITarget>();
    mockTarget.targetIds = { entity_id: ['light.living_room'] };

    const action = waitUntilState(mockTarget, 'on', 5);

    expect(action.name).toBe('Wait 5 minutes until entity is in state on');
  });

  it('should wait for state and return input when state matches immediately', async () => {
    expect.assertions(3);

    const mockTarget = mock<ITarget>();
    mockTarget.targetIds = { entity_id: ['light.living_room'] };

    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    const mockInput = { data: 'test' } as unknown as Pass;

    when<(id: string) => string>(mockHass.getState)
      .calledWith('light.living_room')
      .thenReturn('on');

    vi.mocked(waitInSeconds).mockResolvedValue(undefined);
    vi.mocked(waitInMinutes).mockResolvedValue(undefined);

    const action = waitUntilState(mockTarget, 'on', 2);
    const result = await action.run({
      hass: mockHass,
      input: mockInput,
      runner: mockRunner,
    });

    expect(waitInSeconds).toHaveBeenCalledWith(1);
    expect(waitInMinutes).toHaveBeenCalledWith(2);
    if ('output' in result) {
      expect(result.output).toBe(mockInput);
    }
  });

  it('should handle multiple entity ids', async () => {
    expect.assertions(1);

    const mockTarget = mock<ITarget>();
    mockTarget.targetIds = {
      entity_id: ['light.living_room', 'light.kitchen'],
    };

    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    const mockInput = { data: 'test' } as unknown as Pass;

    when<(id: string) => string>(mockHass.getState)
      .calledWith('light.living_room')
      .thenReturn('on');
    when<(id: string) => string>(mockHass.getState)
      .calledWith('light.kitchen')
      .thenReturn('on');

    vi.mocked(waitInSeconds).mockResolvedValue(undefined);
    vi.mocked(waitInMinutes).mockResolvedValue(undefined);

    const action = waitUntilState(mockTarget, 'on', 1);
    const result = await action.run({
      hass: mockHass,
      input: mockInput,
      runner: mockRunner,
    });

    if ('output' in result) {
      expect(result.output).toBe(mockInput);
    }
  });

  it('should use default timeout of 10 minutes when not specified', async () => {
    expect.assertions(2);

    const mockTarget = mock<ITarget>();
    mockTarget.targetIds = { entity_id: ['light.living_room'] };

    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    const mockInput = { data: 'test' } as unknown as Pass;

    when<(id: string) => string>(mockHass.getState)
      .calledWith('light.living_room')
      .thenReturn('on');

    vi.mocked(waitInSeconds).mockResolvedValue(undefined);
    vi.mocked(waitInMinutes).mockResolvedValue(undefined);

    const action = waitUntilState(mockTarget, 'on');
    const result = await action.run({
      hass: mockHass,
      input: mockInput,
      runner: mockRunner,
    });

    expect(waitInMinutes).toHaveBeenCalledWith(10);
    if ('output' in result) {
      expect(result.output).toBe(mockInput);
    }
  });
});

describe('waitUntilStateIsNot', () => {
  it('should create action with correct name', () => {
    const mockTarget = mock<ITarget>();
    mockTarget.targetIds = { entity_id: ['light.living_room'] };

    const action = waitUntilStateIsNot(mockTarget, 'on', 5);

    expect(action.name).toBe('Wait 5 minutes until entity is in state on');
  });

  it('should wait for state to change and return input when state is different immediately', async () => {
    expect.assertions(3);

    const mockTarget = mock<ITarget>();
    mockTarget.targetIds = { entity_id: ['light.living_room'] };

    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    const mockInput = { data: 'test' } as unknown as Pass;

    when<(id: string) => string>(mockHass.getState)
      .calledWith('light.living_room')
      .thenReturn('off');

    vi.mocked(waitInSeconds).mockResolvedValue(undefined);
    vi.mocked(waitInMinutes).mockResolvedValue(undefined);

    const action = waitUntilStateIsNot(mockTarget, 'on', 2);
    const result = await action.run({
      hass: mockHass,
      input: mockInput,
      runner: mockRunner,
    });

    expect(waitInSeconds).toHaveBeenCalledWith(1);
    expect(waitInMinutes).toHaveBeenCalledWith(2);
    if ('output' in result) {
      expect(result.output).toBe(mockInput);
    }
  });

  it('should handle multiple entity ids', async () => {
    expect.assertions(1);

    const mockTarget = mock<ITarget>();
    mockTarget.targetIds = {
      entity_id: ['light.living_room', 'light.kitchen'],
    };

    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    const mockInput = { data: 'test' } as unknown as Pass;

    when<(id: string) => string>(mockHass.getState)
      .calledWith('light.living_room')
      .thenReturn('off');
    when<(id: string) => string>(mockHass.getState)
      .calledWith('light.kitchen')
      .thenReturn('off');

    vi.mocked(waitInSeconds).mockResolvedValue(undefined);
    vi.mocked(waitInMinutes).mockResolvedValue(undefined);

    const action = waitUntilStateIsNot(mockTarget, 'on', 1);
    const result = await action.run({
      hass: mockHass,
      input: mockInput,
      runner: mockRunner,
    });

    if ('output' in result) {
      expect(result.output).toBe(mockInput);
    }
  });

  it('should use default timeout of 10 minutes when not specified', async () => {
    expect.assertions(2);

    const mockTarget = mock<ITarget>();
    mockTarget.targetIds = { entity_id: ['light.living_room'] };

    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    const mockInput = { data: 'test' } as unknown as Pass;

    when<(id: string) => string>(mockHass.getState)
      .calledWith('light.living_room')
      .thenReturn('off');

    vi.mocked(waitInSeconds).mockResolvedValue(undefined);
    vi.mocked(waitInMinutes).mockResolvedValue(undefined);

    const action = waitUntilStateIsNot(mockTarget, 'on');
    const result = await action.run({
      hass: mockHass,
      input: mockInput,
      runner: mockRunner,
    });

    expect(waitInMinutes).toHaveBeenCalledWith(10);
    if ('output' in result) {
      expect(result.output).toBe(mockInput);
    }
  });
});
