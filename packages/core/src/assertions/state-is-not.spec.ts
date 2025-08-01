import { describe, expect, it } from 'vitest';
import { mock } from 'vitest-mock-extended';
import { when } from 'vitest-when';

import type { IBlockRunner, IHass, ITarget } from '@types';

import { stateIsNot } from './state-is-not.ts';

describe('stateIsNot', () => {
  it('should return true when entity state does not match expected state', async () => {
    expect.assertions(2);

    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    const mockTarget = mock<ITarget>();

    mockTarget.targetIds = { entity_id: ['light.living_room'] };
    when<(id: string) => string>(mockHass.getState)
      .calledWith('light.living_room')
      .thenReturn('off');

    const assertion = stateIsNot(mockTarget, 'on');
    const result = await assertion.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    if ('conditionResult' in result) {
      expect(result.conditionResult).toBe(true);
    }
    expect(mockHass.getState).toHaveBeenCalledWith('light.living_room');
  });

  it('should return false when entity state matches expected state', async () => {
    expect.assertions(2);

    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    const mockTarget = mock<ITarget>();

    mockTarget.targetIds = { entity_id: ['light.living_room'] };
    when<(id: string) => string>(mockHass.getState)
      .calledWith('light.living_room')
      .thenReturn('on');

    const assertion = stateIsNot(mockTarget, 'on');
    const result = await assertion.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    if ('conditionResult' in result) {
      expect(result.conditionResult).toBe(false);
    }
    expect(mockHass.getState).toHaveBeenCalledWith('light.living_room');
  });

  it('should handle multiple entity IDs and return true when all do not match', async () => {
    expect.assertions(3);

    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    const mockTarget = mock<ITarget>();

    mockTarget.targetIds = {
      entity_id: ['light.living_room', 'light.kitchen'],
    };
    when<(id: string) => string>(mockHass.getState)
      .calledWith('light.living_room')
      .thenReturn('off');
    when<(id: string) => string>(mockHass.getState)
      .calledWith('light.kitchen')
      .thenReturn('off');

    const assertion = stateIsNot(mockTarget, 'on');
    const result = await assertion.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    if ('conditionResult' in result) {
      expect(result.conditionResult).toBe(true);
    }
    expect(mockHass.getState).toHaveBeenCalledWith('light.living_room');
    expect(mockHass.getState).toHaveBeenCalledWith('light.kitchen');
  });

  it('should handle multiple entity IDs and return false when any match', async () => {
    expect.assertions(2);

    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    const mockTarget = mock<ITarget>();

    mockTarget.targetIds = {
      entity_id: ['light.living_room', 'light.kitchen'],
    };
    when<(id: string) => string>(mockHass.getState)
      .calledWith('light.living_room')
      .thenReturn('on');

    const assertion = stateIsNot(mockTarget, 'on');
    const result = await assertion.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    if ('conditionResult' in result) {
      expect(result.conditionResult).toBe(false);
    }
    expect(mockHass.getState).toHaveBeenCalledWith('light.living_room');
  });

  it('should throw error when entity_id array is empty', () => {
    const mockTarget = mock<ITarget>();
    mockTarget.targetIds = { entity_id: [] };

    expect(() => stateIsNot(mockTarget, 'on')).toThrow(
      'stateIsNot requires at least one entity_id in target',
    );
  });

  it('should throw error when entity_id is undefined', () => {
    const mockTarget = mock<ITarget>();
    mockTarget.targetIds = {};

    expect(() => stateIsNot(mockTarget, 'on')).toThrow(
      'stateIsNot requires at least one entity_id in target',
    );
  });
});
