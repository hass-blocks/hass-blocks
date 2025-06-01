import { mock } from 'vitest-mock-extended';
import type { IMQTTConnection } from '@hass-blocks/hass-mqtt';
import type { IBlockRunner, IFullBlocksClient, IHass } from '@types';
import type { Action } from './action.ts';
import { concurrently } from './execute-concurrently.ts';
import { BlockExecutionMode, Executor, type EventBus } from '@core';
import { when } from 'vitest-when';

vi.mock('@core', async (importOriginal) => {
  return {
    ...(await importOriginal<typeof import('@core')>()),
    Executor: vi.fn(),
  };
});

afterEach(() => {
  vi.resetAllMocks();
});

describe('concurrently.run', () => {
  it('throws an error if there is no event bus', async () => {
    const hass = mock<IHass>();
    const triggerId = 'trigger-id';
    const input = 'foo';

    const theBlock = concurrently(
      mock<Action<string, string>>(),
      mock<Action<string, string>>(),
    );

    const runner = mock<IBlockRunner>();
    await expect(
      theBlock.run({ hass, input, triggerId, runner }),
    ).rejects.toThrow();
  });

  it('throws an error if there is no trigger id', async () => {
    const hass = mock<IHass>();
    const input = 'foo';

    const theBlock = concurrently(
      mock<Action<string, string>>(),
      mock<Action<string, string>>(),
    );
    const events = mock<EventBus>();

    const runner = mock<IBlockRunner>();
    await expect(
      theBlock.run({ hass, input, events, runner }),
    ).rejects.toThrow();
  });

  it('rethrows an error thrown by its children', async () => {
    const mockClient = mock<IFullBlocksClient>();
    const mqtt = mock<IMQTTConnection>();

    const mockActionOne = mock<Action<string, string>>();
    const mockActionTwo = mock<Action<string, string>>();

    const actions = [mockActionOne, mockActionTwo] as const;

    const error = new Error('Whoops!');

    mockActionOne.initialise.mockResolvedValue();
    mockActionTwo.initialise.mockRejectedValue(error);

    const theBlock = concurrently(...actions);

    await expect(theBlock.initialise(mockClient, mqtt)).rejects.toThrow(error);
  });

  it('silently passes the initialise method when no errorss are thrown', async () => {
    const mockClient = mock<IFullBlocksClient>();
    const mqtt = mock<IMQTTConnection>();

    const mockActionOne = mock<Action<string, string>>();
    const mockActionTwo = mock<Action<string, string>>();

    const actions = [mockActionOne, mockActionTwo] as const;

    mockActionOne.initialise.mockResolvedValue();
    mockActionTwo.initialise.mockResolvedValue();

    const theBlock = concurrently(...actions);

    await expect(theBlock.initialise(mockClient, mqtt)).resolves.not.toThrow();
  });

  it('marks continue as false if any one of the actions mark continue as false', async () => {
    const hass = mock<IFullBlocksClient>();
    const mockActionOne = mock<Action<string, string>>();
    const mockActionTwo = mock<Action<string, string>>();

    const actions = [mockActionOne, mockActionTwo] as const;
    const events = mock<EventBus>();

    const triggerId = 'trigger-id';
    const input = 'foo';

    const mockExecutor = mock<Executor<string, string>>();

    const theBlock = concurrently(...actions);

    when(vi.mocked(Executor))
      .calledWith(
        [...actions],
        hass,
        events,
        triggerId,
        input,
        BlockExecutionMode.Parallel,
        theBlock,
      )
      .thenReturn(mockExecutor);

    mockExecutor.finished.mockImplementation(async () => {
      return [
        { continue: false, outputType: 'block', output: 'foo', success: true },
        { continue: true, outputType: 'block', output: 'bar', success: true },
      ];
    });

    const runner = mock<IBlockRunner>();
    const result = await theBlock.run({
      hass,
      input,
      events,
      triggerId,
      runner,
    });

    expect(result.continue).toBeDefined();
    expect(result.continue).toBeFalsy();
  });

  it('outputs always has the same number of items even if some actions dont return anything', async () => {
    const hass = mock<IFullBlocksClient>();

    const mockActionOne = mock<Action<string, string>>();
    const mockActionTwo = mock<Action<string, string>>();

    const actions = [mockActionOne, mockActionTwo] as const;
    const events = mock<EventBus>();

    const triggerId = 'trigger-id';
    const input = 'foo';

    const mockExecutor = mock<Executor<string, string>>();

    const theBlock = concurrently(...actions);

    when(vi.mocked(Executor))
      .calledWith(
        [...actions],
        hass,
        events,
        triggerId,
        input,
        BlockExecutionMode.Parallel,
        theBlock,
      )
      .thenReturn(mockExecutor);

    mockExecutor.finished.mockImplementation(async () => {
      return [
        { continue: true, outputType: 'block', output: 'foo', success: true },
        { continue: true, outputType: 'block', output: 'bar', success: false },
      ];
    });

    const runner = mock<IBlockRunner>();
    const result = await theBlock.run({
      hass,
      input,
      events,
      triggerId,
      runner,
    });

    if (result.continue) {
      expect(mockExecutor.run).toHaveBeenCalled();
      expect(result.output[0]).toEqual('foo');
      expect(result.output[1]).toEqual('bar');
      expect(result.continue).toEqual(true);
      expect(result.outputType).toEqual('block');
    }
    expect.assertions(5);
  });

  it('executes the supplied actions via the executor and returns an array of their return values', async () => {
    const hass = mock<IFullBlocksClient>();

    const mockActionOne = mock<Action<string, string>>();
    const mockActionTwo = mock<Action<string, string>>();

    const actions = [mockActionOne, mockActionTwo] as const;
    const events = mock<EventBus>();

    const triggerId = 'trigger-id';
    const input = 'foo';

    const mockExecutor = mock<Executor<string, string>>();

    const theBlock = concurrently(...actions);

    when(vi.mocked(Executor))
      .calledWith(
        [...actions],
        hass,
        events,
        triggerId,
        input,
        BlockExecutionMode.Parallel,
        theBlock,
      )
      .thenReturn(mockExecutor);

    mockExecutor.finished.mockImplementation(async () => {
      return [
        { continue: true, outputType: 'block', output: 'foo', success: true },
        { continue: true, outputType: 'block', output: 'bar', success: true },
      ];
    });

    const runner = mock<IBlockRunner>();
    const result = await theBlock.run({
      hass,
      input,
      events,
      triggerId,
      runner,
    });

    if (result.continue) {
      expect(mockExecutor.run).toHaveBeenCalled();
      expect(result.output[0]).toEqual('foo');
      expect(result.output[1]).toEqual('bar');
      expect(result.continue).toEqual(true);
      expect(result.outputType).toEqual('block');
    }
    expect.assertions(5);
  });
});
