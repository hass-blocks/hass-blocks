import { EventBus, type Block } from '@core';
import { loop } from './loop.ts';
import { mock } from 'vitest-mock-extended';
import type { IBlockRunner, IFullBlocksClient } from '@types';

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

    const hass = mock<IFullBlocksClient>();
    const events = mock<EventBus>();
    const triggerId = 'foo-trigger';

    const runner = mock<IBlockRunner>();
    await theLoop.run({ hass, input: 2, events, triggerId, runner });

    expect(actionBlock.run).toHaveBeenCalledTimes(3);
  });

  it('Runs the block before the assertion when using the doWhile variant', async () => {
    const assertionBlock = mock<Block<string, void>>();
    const actionBlock = mock<Block<number, string>>();

    const theLoop = loop({
      name: 'Testing loop',
      do: actionBlock,
      while: assertionBlock,
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

    const hass = mock<IFullBlocksClient>();
    const events = mock<EventBus>();
    const triggerId = 'foo-trigger';

    const runner = mock<IBlockRunner>();
    await theLoop.run({ hass, input: 2, events, triggerId, runner });

    expect(actionBlock.run).toHaveBeenCalledTimes(4);
  });
});
