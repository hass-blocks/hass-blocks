import { afterEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import type { IFullBlocksClient, ITarget } from '@types';
import type { IMQTTConnection } from '@hass-blocks/hass-mqtt';

import { Trigger } from './trigger.ts';

afterEach(() => {
  vi.resetAllMocks();
});

describe('Trigger', () => {
  it('should initialise all targets when initialise is called', async () => {
    const mockTarget1 = mock<ITarget>();
    const mockTarget2 = mock<ITarget>();
    const mockClient = mock<IFullBlocksClient>();
    const mockMqtt = mock<IMQTTConnection>();

    const trigger = new Trigger({
      name: 'test trigger',
      targets: [mockTarget1, mockTarget2],
      trigger: { type: 'state' },
    });

    await trigger.initialise(mockClient, mockMqtt);

    expect(mockTarget1.initialise).toHaveBeenCalledWith(mockClient, mockMqtt);
    expect(mockTarget2.initialise).toHaveBeenCalledWith(mockClient, mockMqtt);
  });

  it('should handle destroy method call', async () => {
    const trigger = new Trigger({
      name: 'test trigger',
      trigger: { type: 'state' },
    });

    await expect(trigger.destroy()).resolves.not.toThrow();
  });
});
