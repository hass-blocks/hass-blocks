import { afterEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import type { IFullBlocksClient } from '@types';
import type { IMQTTConnection } from '@hass-blocks/hass-mqtt';
import { MqttSwitch } from '@hass-blocks/hass-mqtt';

import { Switch, toggle } from './switch.ts';

vi.mock('@hass-blocks/hass-mqtt');

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
    const mockMqtt = mock<IMQTTConnection>();

    await testSwitch.initialise(mockHass, mockMqtt);

    expect(mockHass.getEntity).toHaveBeenCalledWith('switch.living_room');
  });

  it('should create MQTT switch when create is true', async () => {
    const testSwitch = new Switch({
      id: 'switch.living_room',
      create: true,
      friendlyName: 'Living Room Switch',
    });
    const mockHass = mock<IFullBlocksClient>();
    const mockMqtt = mock<IMQTTConnection>();
    const mockMqttSwitch = mock<MqttSwitch>({
      initialise: vi.fn(),
    });
    vi.mocked(MqttSwitch).mockReturnValue(mockMqttSwitch);

    await testSwitch.initialise(mockHass, mockMqtt);

    expect(MqttSwitch).toHaveBeenCalledWith(mockMqtt, {
      friendlyName: 'Living Room Switch',
      discoveryPrefix: 'homeassistant',
      context: 'blocks',
      deviceClass: 'switch',
      uniqueId: 'living_room',
    });
    expect(mockMqttSwitch.initialise).toHaveBeenCalled();
  });

  it('should handle edge case where split results in undefined identifier', async () => {
    const testSwitch = new Switch({
      id: 'switch.' as `switch.${string}`,
      create: true,
      friendlyName: 'Edge Case Switch',
    });
    const mockHass = mock<IFullBlocksClient>();
    const mockMqtt = mock<IMQTTConnection>();
    const mockMqttSwitch = mock<MqttSwitch>({
      initialise: vi.fn(),
    });
    vi.mocked(MqttSwitch).mockReturnValue(mockMqttSwitch);

    await testSwitch.initialise(mockHass, mockMqtt);

    expect(MqttSwitch).toHaveBeenCalledWith(mockMqtt, {
      friendlyName: 'Edge Case Switch',
      discoveryPrefix: 'homeassistant',
      context: 'blocks',
      deviceClass: 'switch',
      uniqueId: '',
    });
    expect(mockMqttSwitch.initialise).toHaveBeenCalled();
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
