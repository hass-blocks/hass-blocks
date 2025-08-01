import { afterEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import type { IEntity, IArea, IDevice, IFullBlocksClient } from '@types';
import type { IMQTTConnection } from '@hass-blocks/hass-mqtt';

import { Combination, combine } from './combination.ts';

afterEach(() => {
  vi.resetAllMocks();
});

describe('Combination', () => {
  it('should create combination with entities and return combined targetIds', () => {
    const mockEntity1 = mock<IEntity>({
      targetIds: { entity_id: ['light.living_room'] },
    });
    const mockEntity2 = mock<IEntity>({
      targetIds: { entity_id: ['light.kitchen'] },
    });

    const combination = new Combination(mockEntity1, mockEntity2);

    expect(combination.targetIds).toEqual({
      entity_id: ['light.living_room', 'light.kitchen'],
    });
  });

  it('should combine different target types (entities, areas, devices)', () => {
    const mockEntity = mock<IEntity>({
      targetIds: { entity_id: ['light.living_room'] },
    });
    const mockArea = mock<IArea>({
      targetIds: { area_id: ['kitchen'] },
    });
    const mockDevice = mock<IDevice>({
      targetIds: { device_id: ['smart_switch_01'] },
    });

    const combination = new Combination(mockEntity, mockArea, mockDevice);

    expect(combination.targetIds).toEqual({
      entity_id: ['light.living_room'],
      area_id: ['kitchen'],
      device_id: ['smart_switch_01'],
    });
  });

  it('should initialize all targets when initialise is called', async () => {
    const mockHass = mock<IFullBlocksClient>();
    const mockMqtt = mock<IMQTTConnection>();
    const mockEntity = mock<IEntity>({
      targetIds: { entity_id: ['light.living_room'] },
      initialise: vi.fn().mockResolvedValue(undefined),
    });
    const mockArea = mock<IArea>({
      targetIds: { area_id: ['kitchen'] },
      initialise: vi.fn().mockResolvedValue(undefined),
    });

    const combination = new Combination(mockEntity, mockArea);

    await combination.initialise(mockHass, mockMqtt);

    expect(mockEntity.initialise).toHaveBeenCalledWith(mockHass, mockMqtt);
    expect(mockArea.initialise).toHaveBeenCalledWith(mockHass, mockMqtt);
  });

  it('should handle targets with empty or missing targetIds', () => {
    const mockEntity = mock<IEntity>({
      targetIds: {},
    });
    const mockArea = mock<IArea>({
      targetIds: { area_id: ['kitchen'] },
    });

    const combination = new Combination(mockEntity, mockArea);

    expect(combination.targetIds).toEqual({
      area_id: ['kitchen'],
    });
  });
});

describe('combine factory function', () => {
  it('should create combination instance using factory function', () => {
    const mockEntity1 = mock<IEntity>({
      targetIds: { entity_id: ['light.living_room'] },
    });
    const mockEntity2 = mock<IEntity>({
      targetIds: { entity_id: ['light.kitchen'] },
    });

    const combined = combine(mockEntity1, mockEntity2);

    expect(combined).toBeInstanceOf(Combination);
    expect(combined.targetIds).toEqual({
      entity_id: ['light.living_room', 'light.kitchen'],
    });
  });
});
