import { afterEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import type { IHomeAssistant } from '@hass-blocks/hass-ts';
import type { IFullBlocksClient } from '@types';

import { Switch, toggle } from './switch.ts';

afterEach(() => {
  vi.resetAllMocks();
});

describe('Switch', () => {
  it('should create switch with simple config and return targetIds', () => {
    const testSwitch = new Switch({ id: 'switch.living_room', create: false });

    expect(testSwitch.targetIds).toEqual({
      entity_id: ['switch.living_room'],
    });
  });

  it('should call getEntity when create is false', async () => {
    const testSwitch = new Switch({ id: 'switch.living_room', create: false });
    const mockHass = mock<IFullBlocksClient>({
      getEntity: vi
        .fn()
        .mockReturnValue({ entity_id: 'switch.living_room', state: 'off' }),
      onStateChanged: vi.fn(),
    });

    await testSwitch.initialise(mockHass);

    expect(mockHass.getEntity).toHaveBeenCalledWith('switch.living_room');
  });

  it('should create entity using fireEvent when create is true', async () => {
    const testSwitch = new Switch({
      id: 'switch.living_room',
      create: true,
      friendlyName: 'Living Room Switch',
    });
    const mockHass = mock<IHomeAssistant>({
      fireEvent: vi.fn(),
    });

    await testSwitch.initialise(mockHass);

    expect(mockHass.fireEvent).toHaveBeenCalledWith({
      event_type: 'hass_blocks_create_entity',
      event_data: {
        entity_id: 'switch.living_room',
        entity_type: 'switch',
        state: 'off',
        name: 'Living Room Switch',
      },
    });
  });

  it('should create entity with empty identifier when split results in undefined', async () => {
    const testSwitch = new Switch({
      id: 'switch.' as `switch.${string}`,
      create: true,
      friendlyName: 'Edge Case Switch',
    });
    const mockHass = mock<IHomeAssistant>({
      fireEvent: vi.fn(),
    });

    await testSwitch.initialise(mockHass);

    expect(mockHass.fireEvent).toHaveBeenCalledWith({
      event_type: 'hass_blocks_create_entity',
      event_data: {
        entity_id: 'switch.',
        entity_type: 'switch',
        state: 'off',
        name: 'Edge Case Switch',
      },
    });
  });
});

describe('toggle factory function', () => {
  it('should create switch instance with string id', () => {
    const testSwitch = toggle('switch.kitchen');

    expect(testSwitch).toBeInstanceOf(Switch);
    expect(testSwitch.targetIds).toEqual({
      entity_id: ['switch.kitchen'],
    });
  });

  it('should create switch instance with config object', () => {
    const testSwitch = toggle({
      id: 'switch.bedroom',
      create: true,
      friendlyName: 'Bedroom Switch',
    });

    expect(testSwitch).toBeInstanceOf(Switch);
    expect(testSwitch.targetIds).toEqual({
      entity_id: ['switch.bedroom'],
    });
  });
});
