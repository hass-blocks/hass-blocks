import { afterEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import type { IFullBlocksClient, ITarget } from '@types';

import { Trigger } from './trigger.ts';

afterEach(() => {
  vi.resetAllMocks();
});

describe('Trigger', () => {
  it('should initialise all targets when initialise is called', async () => {
    const mockTarget1 = mock<ITarget>();
    const mockTarget2 = mock<ITarget>();
    const mockClient = mock<IFullBlocksClient>();

    const trigger = new Trigger({
      name: 'test trigger',
      targets: [mockTarget1, mockTarget2],
      trigger: { type: 'state' },
    });

    await trigger.initialise(mockClient);

    expect(mockTarget1.initialise).toHaveBeenCalledWith(mockClient);
    expect(mockTarget2.initialise).toHaveBeenCalledWith(mockClient);
  });

  it('should handle destroy method call', async () => {
    const trigger = new Trigger({
      name: 'test trigger',
      trigger: { type: 'state' },
    });

    await expect(trigger.destroy()).resolves.not.toThrow();
  });
});
