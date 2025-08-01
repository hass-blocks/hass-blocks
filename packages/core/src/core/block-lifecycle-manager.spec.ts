import { afterEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';
import { v4 } from 'uuid';

import type { IEventBus } from '@types';
import type { Block } from './block.ts';

import { BlockLifecyleManager } from './block-lifecycle-manager.ts';

vi.mock('uuid');

afterEach(() => {
  vi.resetAllMocks();
});

describe('BlockLifecyleManager', () => {
  it('should emit sequence-aborted event when aborted is called', () => {
    vi.mocked<() => string>(v4).mockReturnValue('test-execution-id');

    const mockEvents = mock<IEventBus>();
    const mockBlock = mock<Block>({
      type: 'test-block',
      name: 'Test Block',
      toJson: () => ({
        type: 'test-block',
        id: 'test-id',
        name: 'Test Block',
        children: [],
      }),
    });

    const manager = new BlockLifecyleManager(
      mockEvents,
      'trigger-123',
      mockBlock,
    );

    manager.aborted();

    expect(mockEvents.emit).toHaveBeenCalledWith('sequence-aborted', {
      executeId: 'test-execution-id',
      triggerId: 'trigger-123',
      type: 'test-block',
      name: 'Test Block',
      block: {
        type: 'test-block',
        id: 'test-id',
        name: 'Test Block',
        children: [],
      },
    });
  });
});
