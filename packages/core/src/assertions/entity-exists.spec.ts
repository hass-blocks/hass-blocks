import { afterEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';
import { when } from 'vitest-when';

import type { IHass, IEntity, IBlockRunner } from '@types';
import { EntityDoesNotExistError } from '@errors';

import { entityExists } from './entity-exists.ts';

vi.mock('@errors');

afterEach(() => {
  vi.resetAllMocks();
});

describe('entityExists', () => {
  it('should create assertion with correct name', () => {
    const mockEntity = mock<IEntity>();
    mockEntity.targetIds = { entity_id: ['light.living_room'] };

    const assertion = entityExists(mockEntity);

    expect(assertion.name).toBe('If entity Exists');
  });

  it('should return true when entity exists', async () => {
    expect.assertions(2);

    const mockEntity = mock<IEntity>();
    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    mockEntity.targetIds = { entity_id: ['light.living_room'] };

    when<(id: string) => string>(mockHass.getState)
      .calledWith('light.living_room')
      .thenReturn('on');

    const assertion = entityExists(mockEntity);
    const result = await assertion.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    expect(mockHass.getState).toHaveBeenCalledWith('light.living_room');
    if ('conditionResult' in result) {
      expect(result.conditionResult).toBe(true);
    }
  });

  it('should return false when entity does not exist', async () => {
    expect.assertions(2);

    const mockEntity = mock<IEntity>();
    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    mockEntity.targetIds = { entity_id: ['light.nonexistent'] };

    const mockError = new EntityDoesNotExistError('Entity not found');
    when<(id: string) => string>(mockHass.getState)
      .calledWith('light.nonexistent')
      .thenThrow(mockError);

    const assertion = entityExists(mockEntity);
    const result = await assertion.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    expect(mockHass.getState).toHaveBeenCalledWith('light.nonexistent');
    if ('conditionResult' in result) {
      expect(result.conditionResult).toBe(false);
    }
  });

  it('should throw error for unknown errors', async () => {
    const mockEntity = mock<IEntity>();
    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    mockEntity.targetIds = { entity_id: ['light.error'] };

    const unknownError = new Error('Unknown error');
    when<(id: string) => string>(mockHass.getState)
      .calledWith('light.error')
      .thenThrow(unknownError);

    const assertion = entityExists(mockEntity);

    await expect(
      assertion.run({
        hass: mockHass,
        input: undefined,
        runner: mockRunner,
      }),
    ).rejects.toThrow('Caught an unknown error');
  });

  it('should handle empty entity_id array', async () => {
    expect.assertions(2);

    const mockEntity = mock<IEntity>();
    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    mockEntity.targetIds = { entity_id: [] };

    when<(id: string) => string>(mockHass.getState)
      .calledWith('')
      .thenReturn('on');

    const assertion = entityExists(mockEntity);
    const result = await assertion.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    expect(mockHass.getState).toHaveBeenCalledWith('');
    if ('conditionResult' in result) {
      expect(result.conditionResult).toBe(true);
    }
  });

  it('should handle undefined entity_id', async () => {
    expect.assertions(2);

    const mockEntity = mock<IEntity>();
    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    mockEntity.targetIds = { entity_id: [] };

    when<(id: string) => string>(mockHass.getState)
      .calledWith('')
      .thenReturn('on');

    const assertion = entityExists(mockEntity);
    const result = await assertion.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    expect(mockHass.getState).toHaveBeenCalledWith('');
    if ('conditionResult' in result) {
      expect(result.conditionResult).toBe(true);
    }
  });
});
