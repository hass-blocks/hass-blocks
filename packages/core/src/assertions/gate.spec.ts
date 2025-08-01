import { describe, expect, it } from 'vitest';
import { mock } from 'vitest-mock-extended';

import type { IBlockRunner, IHass } from '@types';

import { gate } from './gate.ts';

describe('gate', () => {
  it('should create gate with correct names for assertions and actions', () => {
    const { ifGateIsOpen, ifGateIsClosed, open, close } = gate('test-gate');

    expect(ifGateIsOpen.name).toBe('Is test-gate open');
    expect(ifGateIsClosed.name).toBe('Is test-gate open');
    expect(open.name).toBe('Open test-gate');
    expect(close.name).toBe('Open test-gate');
  });

  it('should start with gate open by default', async () => {
    expect.assertions(2);

    const { ifGateIsOpen, ifGateIsClosed } = gate('test-gate');
    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();

    const openResult = await ifGateIsOpen.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    const closedResult = await ifGateIsClosed.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    if ('conditionResult' in openResult) {
      expect(openResult.conditionResult).toBe(true);
    }
    if ('conditionResult' in closedResult) {
      expect(closedResult.conditionResult).toBe(false);
    }
  });

  it('should close gate when close action is executed', async () => {
    expect.assertions(2);

    const { ifGateIsOpen, ifGateIsClosed, close } = gate('test-gate');
    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();

    await close.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    const openResult = await ifGateIsOpen.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    const closedResult = await ifGateIsClosed.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    if ('conditionResult' in openResult) {
      expect(openResult.conditionResult).toBe(false);
    }
    if ('conditionResult' in closedResult) {
      expect(closedResult.conditionResult).toBe(true);
    }
  });

  it('should open gate when open action is executed after closing', async () => {
    expect.assertions(2);

    const { ifGateIsOpen, ifGateIsClosed, open, close } = gate('test-gate');
    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();

    await close.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    await open.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    const openResult = await ifGateIsOpen.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    const closedResult = await ifGateIsClosed.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    if ('conditionResult' in openResult) {
      expect(openResult.conditionResult).toBe(true);
    }
    if ('conditionResult' in closedResult) {
      expect(closedResult.conditionResult).toBe(false);
    }
  });
});
