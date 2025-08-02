import { afterEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';
import { when } from 'vitest-when';

import {
  type IFullBlocksClient,
  type IBlockRunner,
  type IHass,
  ITarget,
} from '@types';
import type { IMQTTConnection } from '@hass-blocks/hass-mqtt';
import { BlockValidationError } from '@errors';

import { serviceCall } from './service-call.ts';
import { entity } from '@targets';

vi.mock('@errors');

afterEach(() => {
  vi.resetAllMocks();
});

describe('serviceCall', () => {
  it('should create service call with correct name', () => {
    const service = serviceCall({
      name: 'Turn on light',
      params: {
        domain: 'light',
        service: 'turn_on',
      },
    });

    expect(service.name).toBe('Turn on light');
  });

  it('should create service call with correct type', () => {
    const service = serviceCall({
      name: 'Turn on light',
      params: {
        domain: 'light',
        service: 'turn_on',
      },
    });

    expect(service.type).toBe('service-call');
  });

  it('should use target supplied in the params', async () => {
    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    const target = entity('light.living_room');

    when(mockHass.callService)
      .calledWith({
        domain: 'light',
        service: 'turn_on',
        target: {
          entity_id: ['light.living_room'],
        },
      })
      .thenResolve([]);

    const service = serviceCall({
      name: 'Turn on light',
      params: {
        domain: 'light',
        service: 'turn_on',
      },
      target: target,
    });

    await service.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    expect(mockHass.callService).toHaveBeenCalledWith({
      domain: 'light',
      service: 'turn_on',
      target: {
        entity_id: ['light.living_room'],
      },
    });
  });

  it('should allow target to be inserted by block input', async () => {
    expect.assertions(1);

    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    const target = entity('light.living_room');

    when(mockHass.callService)
      .calledWith({
        domain: 'light',
        service: 'turn_on',
        target: {
          entity_id: ['light.living_room'],
        },
      })
      .thenResolve([]);

    const service = serviceCall({
      name: 'Turn on light',
      params: {
        domain: 'light',
        service: 'turn_on',
      },
    });

    await service.run({
      hass: mockHass,
      input: { target },
      runner: mockRunner,
    });

    expect(mockHass.callService).toHaveBeenCalledWith({
      domain: 'light',
      service: 'turn_on',
      target: {
        entity_id: ['light.living_room'],
      },
    });
  });

  it('should call service without target', async () => {
    expect.assertions(1);

    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();

    when(mockHass.callService)
      .calledWith({
        domain: 'light',
        service: 'turn_on',
      })
      .thenResolve([]);

    const service = serviceCall({
      name: 'Turn on light',
      params: {
        domain: 'light',
        service: 'turn_on',
      },
    });

    await service.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    expect(mockHass.callService).toHaveBeenCalledWith({
      domain: 'light',
      service: 'turn_on',
    });
  });

  it('should merge input with service_data when provided', async () => {
    expect.assertions(1);

    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();

    when(mockHass.callService)
      .calledWith({
        domain: 'light',
        service: 'turn_on',
        service_data: { brightness: 128 },
      })
      .thenResolve([]);

    const service = serviceCall({
      name: 'Turn on light',
      params: {
        domain: 'light',
        service: 'turn_on',
        service_data: { brightness: 255 },
      },
    });

    await service.run({
      hass: mockHass,
      input: { brightness: 128 },
      runner: mockRunner,
    });

    expect(mockHass.callService).toHaveBeenCalledWith({
      domain: 'light',
      service: 'turn_on',
      service_data: { brightness: 128 },
    });
  });

  it('should not throw error when service exists during initialisation', async () => {
    const mockClient = mock<IFullBlocksClient>();
    const mockMqtt = mock<IMQTTConnection>();

    when(mockClient.getServices)
      .calledWith()
      .thenResolve({
        light: {
          turn_on: {
            description: 'Turn on light',
            name: 'turn_on',
            fields: {},
          },
        },
      });

    const service = serviceCall({
      name: 'Turn on light',
      params: {
        domain: 'light',
        service: 'turn_on',
      },
    });

    await expect(
      service.initialise(mockClient, mockMqtt),
    ).resolves.not.toThrow();
  });

  it('should throw error when service does not exist', async () => {
    expect.assertions(1);

    const mockClient = mock<IFullBlocksClient>();
    const mockMqtt = mock<IMQTTConnection>();

    when(mockClient.getServices)
      .calledWith()
      .thenResolve({
        light: {
          turn_on: {
            description: 'Turn on light',
            name: 'turn_on',
            fields: {},
          },
        },
      });

    const service = serviceCall({
      name: 'Turn off light',
      params: {
        domain: 'light',
        service: 'turn_off',
      },
    });

    await expect(service.initialise(mockClient, mockMqtt)).rejects.toThrow(
      BlockValidationError,
    );
  });
});
