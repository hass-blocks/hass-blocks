import { EventBus, type Block } from '@core';
import { loop } from './loop.ts';
import { mock } from 'vitest-mock-extended';
import type { IFullBlocksClient } from '@types';

describe('loop.run', () => {
  it("runs the 'then' block continuously until the assertion fails", async () => {
    const assertionBlock = mock<Block<number, void>>();
    const actionBlock = mock<Block<void, string>>();

    const theLoop = loop({
      name: 'Testing loop',
      while: assertionBlock,
      then: actionBlock,
    });

    assertionBlock.run
      .mockResolvedValueOnce({
        continue: true,
        conditionResult: true,
        outputType: 'conditional',
        output: undefined,
      })
      .mockReturnValueOnce({
        continue: true,
        conditionResult: true,
        outputType: 'conditional',
        output: undefined,
      })
      .mockReturnValueOnce({
        continue: true,
        conditionResult: true,
        outputType: 'conditional',
        output: undefined,
      })
      .mockReturnValueOnce({
        continue: true,
        conditionResult: false,
        outputType: 'conditional',
        output: undefined,
      });

    actionBlock.run.mockResolvedValue({
      continue: true,
      output: 'foo',
      outputType: 'block',
    });

    const mockClient = mock<IFullBlocksClient>();
    const bus = mock<EventBus>();
    const triggerId = 'foo-trigger';

    await theLoop.run(mockClient, 2, bus, triggerId);

    expect(actionBlock.run).toHaveBeenCalledTimes(3);
  });
});
