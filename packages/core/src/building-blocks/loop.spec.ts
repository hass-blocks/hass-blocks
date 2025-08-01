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

  it('should throw error when events is not provided', async () => {
    expect.assertions(1);

    const assertionBlock = mock<Block<number, void>>();
    const actionBlock = mock<Block<void, string>>();
    const hass = mock<IFullBlocksClient>();
    const runner = mock<IBlockRunner>();

    const theLoop = loop({
      name: 'Testing loop',
      while: assertionBlock,
      then: actionBlock,
    });

    const context = {
      hass,
      input: 2,
      runner,
    };

    await expect(theLoop.run(context)).rejects.toThrow(
      'You must supply an event bus',
    );
  });

  it('should throw error when triggerId is not provided', async () => {
    expect.assertions(1);

    const assertionBlock = mock<Block<number, void>>();
    const actionBlock = mock<Block<void, string>>();
    const hass = mock<IFullBlocksClient>();
    const events = mock<EventBus>();
    const runner = mock<IBlockRunner>();

    const theLoop = loop({
      name: 'Testing loop',
      while: assertionBlock,
      then: actionBlock,
    });

    const context = {
      hass,
      input: 2,
      events,
      runner,
    };

    await expect(theLoop.run(context)).rejects.toThrow(
      'You must supply a trigger id',
    );
  });

  it('should return stop output when initial assertion fails', async () => {
    const assertionBlock = mock<Block<number, void>>();
    const actionBlock = mock<Block<void, string>>();

    const theLoop = loop({
      name: 'Testing loop',
      while: assertionBlock,
      then: actionBlock,
    });

    assertionBlock.run.mockResolvedValue({
      continue: false,
    });

    const hass = mock<IFullBlocksClient>();
    const events = mock<EventBus>();
    const triggerId = 'foo-trigger';
    const runner = mock<IBlockRunner>();

    const result = await theLoop.run({
      hass,
      input: 2,
      events,
      triggerId,
      runner,
    });

    expect(result).toEqual({ continue: false });
    expect(actionBlock.run).not.toHaveBeenCalled();
  });

  it('should handle assertion result with output and continue properly', async () => {
    const assertionBlock = mock<Block<number, string>>();
    const actionBlock = mock<Block<string, number>>();

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
        output: 'first-output',
      })
      .mockResolvedValueOnce({
        continue: true,
        conditionResult: false,
        outputType: 'conditional',
        output: 'second-output',
      });

    actionBlock.run.mockResolvedValue({
      continue: true,
      output: 123,
      outputType: 'block',
    });

    const hass = mock<IFullBlocksClient>();
    const events = mock<EventBus>();
    const triggerId = 'foo-trigger';
    const runner = mock<IBlockRunner>();

    const result = await theLoop.run({
      hass,
      input: 2,
      events,
      triggerId,
      runner,
    });

    expect(result).toEqual({
      continue: true,
      outputType: 'block',
      output: 'second-output',
    });
    expect(actionBlock.run).toHaveBeenCalledTimes(1);
  });

  it('should return stop when nextActionInput is falsy', async () => {
    const assertionBlock = mock<Block<number, void>>();
    const actionBlock = mock<Block<void, string>>();

    const theLoop = loop({
      name: 'Testing loop',
      while: assertionBlock,
      then: actionBlock,
    });

    assertionBlock.run.mockResolvedValue({
      continue: true,
      conditionResult: false,
      outputType: 'conditional',
      output: undefined,
    });

    const hass = mock<IFullBlocksClient>();
    const events = mock<EventBus>();
    const triggerId = 'foo-trigger';
    const runner = mock<IBlockRunner>();

    const result = await theLoop.run({
      hass,
      input: 2,
      events,
      triggerId,
      runner,
    });

    expect(result).toEqual({ continue: false });
    expect(actionBlock.run).not.toHaveBeenCalled();
  });
});
