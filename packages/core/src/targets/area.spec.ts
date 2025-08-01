import { afterEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import type { IHass } from '@types';

import { Area, area } from './area.ts';

afterEach(() => {
  vi.resetAllMocks();
});

describe('Area', () => {
  it('should create area with id and return targetIds', () => {
    const testArea = new Area('kitchen');

    expect(testArea.targetIds).toEqual({
      area_id: ['kitchen'],
    });
  });

  it('should display area name in toString method', () => {
    const testArea = new Area('kitchen', 'Kitchen Area');

    expect(testArea.toString()).toBe('Area(Kitchen Area)');
  });

  it('should initialize successfully when area exists in Home Assistant', async () => {
    const testArea = new Area('kitchen');
    const mockHass = mock<IHass>({
      getAreas: vi.fn().mockResolvedValue([
        { area_id: 'kitchen', name: 'Kitchen' },
        { area_id: 'living_room', name: 'Living Room' },
      ]),
    });

    await expect(testArea.initialise(mockHass)).resolves.not.toThrow();
  });

  it('should throw error when area does not exist in Home Assistant', async () => {
    const testArea = new Area('nonexistent');
    const mockHass = mock<IHass>({
      getAreas: vi.fn().mockResolvedValue([
        { area_id: 'kitchen', name: 'Kitchen' },
        { area_id: 'living_room', name: 'Living Room' },
      ]),
    });

    await expect(testArea.initialise(mockHass)).rejects.toThrow(
      'No area nonexistent registered with Home Assistant',
    );
  });
});

describe('area factory function', () => {
  it('should create area instance using factory function', () => {
    const testArea = area('kitchen', 'Kitchen Area');

    expect(testArea).toBeInstanceOf(Area);
    expect(testArea.targetIds).toEqual({
      area_id: ['kitchen'],
    });
    expect(testArea.toString()).toBe('Area(Kitchen Area)');
  });
});
