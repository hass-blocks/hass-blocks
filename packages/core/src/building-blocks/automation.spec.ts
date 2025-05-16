import { mock } from 'vitest-mock-extended';
import { when } from 'vitest-when';

import { RunQueue, BlockExecutionMode, type EventBus, Executor } from '@core';
import { type IHass, ExecutionMode, type IFullBlocksClient } from '@types';
import { ExecutionAbortedError } from '@errors';

import type { Action } from './action.ts';
import { Automation } from './automation.ts';
import { IMQTTConnection } from '@hass-blocks/hass-mqtt';

vi.mock('@core', async (importOriginal) => {
  return {
    ...(await importOriginal<typeof import('@core')>()),
    RunQueue: vi.fn(),
    Executor: vi.fn(),
  };
});

afterEach(() => {
  vi.resetAllMocks();
});

describe('automation.validate', () => {
  it('calls all of the validate then on its children, passing the client through completing silently if none of them reject', async () => {
    const mockActionOne = mock<Action<string, string>>();
    const mockActionTwo = mock<Action<string, string>>();
    const mockClient = mock<IFullBlocksClient>();
    const mqtt = mock<IMQTTConnection>();

    const then = [mockActionOne, mockActionTwo] as const;

    mockActionOne.initialise.mockResolvedValue();
    mockActionTwo.initialise.mockResolvedValue();

    const mockRunQueue = mock<RunQueue>();
    when(vi.mocked(RunQueue)).calledWith().thenReturn(mockRunQueue);

    const automation = new Automation({
      name: 'Test action',
      then,
      mode: ExecutionMode.Queue,
    });

    await expect(
      automation.initialise(mockClient, mqtt),
    ).resolves.not.toThrow();
    expect(mockActionOne.initialise).toHaveBeenCalledWith(mockClient, mqtt);
    expect(mockActionTwo.initialise).toHaveBeenCalledWith(mockClient, mqtt);
  });

  it('Rethrows any errors thrown by any of its children', async () => {
    const mockActionOne = mock<Action<string, string>>();
    const mockActionTwo = mock<Action<string, string>>();

    const mockClient = mock<IFullBlocksClient>();
    const mqtt = mock<IMQTTConnection>();

    const then = [mockActionOne, mockActionTwo] as const;

    const error = new Error('Whoops!');

    mockActionOne.initialise.mockResolvedValue();
    mockActionTwo.initialise.mockRejectedValue(error);

    const mockRunQueue = mock<RunQueue>();
    when(vi.mocked(RunQueue)).calledWith().thenReturn(mockRunQueue);

    const automation = new Automation({
      name: 'Test action',
      then,
      mode: ExecutionMode.Queue,
    });

    await expect(automation.initialise(mockClient, mqtt)).rejects.toThrow(
      error,
    );
  });
});

describe('automation.run', () => {
  it('throws an error if there is no event bus', async () => {
    const then = [
      mock<Action<string, string>>(),
      mock<Action<string, string>>(),
    ] as const;
    const mockClient = mock<IHass>();
    const triggerId = 'trigger-id';
    const input = 'foo';

    const automation = new Automation({
      name: 'Test action',
      then,
      mode: ExecutionMode.Queue,
    });

    await expect(
      automation.run(mockClient, input, undefined, triggerId),
    ).rejects.toThrow();
  });

  it('throws an error if there is no trigger id', async () => {
    const then = [
      mock<Action<string, string>>(),
      mock<Action<string, string>>(),
    ] as const;
    const mockClient = mock<IHass>();
    const events = mock<EventBus>();
    const input = 'foo';

    const automation = new Automation({
      name: 'Test action',
      then,
      mode: ExecutionMode.Queue,
    });

    await expect(automation.run(mockClient, input, events)).rejects.toThrow();
  });

  it('If result is undefined, throw an error', async () => {
    const then = [
      mock<Action<string, string>>(),
      mock<Action<string, string>>(),
    ] as const;
    const mockClient = mock<IHass>();
    const events = mock<EventBus>();
    const triggerId = 'trigger-id';
    const input = 'foo';

    const mockRunQueue = mock<RunQueue>();
    when(vi.mocked(RunQueue)).calledWith().thenReturn(mockRunQueue);

    const automation = new Automation({
      name: 'Test action',
      then,
      mode: ExecutionMode.Queue,
    });

    const mockExecutor = mock<Executor<string, string>>();

    when(vi.mocked(Executor))
      .calledWith(
        [...then],
        mockClient,
        events,
        triggerId,
        input,
        BlockExecutionMode.Sequence,
        automation,
      )
      .thenReturn(mockExecutor);

    mockExecutor.finished.mockImplementation(async () => {
      return [];
    });

    await expect(
      automation.run(mockClient, input, events, triggerId),
    ).rejects.toThrow();
  });

  it('In queue mode passes then to an executor, enqueues the executor then returns the results when finished', async () => {
    const then = [
      mock<Action<string, string>>(),
      mock<Action<string, string>>(),
    ] as const;
    const mockClient = mock<IHass>();
    const events = mock<EventBus>();
    const triggerId = 'trigger-id';
    const input = 'foo';

    const mockRunQueue = mock<RunQueue>();
    when(vi.mocked(RunQueue)).calledWith().thenReturn(mockRunQueue);

    const automation = new Automation({
      name: 'Test action',
      then,
      mode: ExecutionMode.Queue,
    });

    const mockExecutor = mock<Executor<string, string>>();

    when(vi.mocked(Executor))
      .calledWith(
        [...then],
        mockClient,
        events,
        triggerId,
        input,
        BlockExecutionMode.Sequence,
        automation,
      )
      .thenReturn(mockExecutor);

    mockExecutor.finished.mockImplementation(async () => {
      return [
        { continue: true, outputType: 'block', output: 'foo', success: true },
      ];
    });

    const result = await automation.run(mockClient, input, events, triggerId);

    if (result.continue) {
      expect(mockRunQueue.enqueue).toHaveBeenCalled();
      expect(result.output).toEqual('foo');
      expect(result.continue).toEqual(true);
      expect(result.outputType).toEqual('block');
    }

    expect.assertions(4);
  });

  it('If the executor throws any other kind of error, rethrow', async () => {
    const then = [
      mock<Action<string, string>>(),
      mock<Action<string, string>>(),
    ] as const;
    const mockClient = mock<IHass>();
    const events = mock<EventBus>();
    const triggerId = 'trigger-id';
    const input = 'foo';

    const mockRunQueue = mock<RunQueue>();
    when(vi.mocked(RunQueue)).calledWith().thenReturn(mockRunQueue);

    const automation = new Automation({
      name: 'Test action',
      then,
      mode: ExecutionMode.Queue,
    });

    const mockExecutor = mock<Executor<string, string>>();

    when(vi.mocked(Executor))
      .calledWith(
        [...then],
        mockClient,
        events,
        triggerId,
        input,
        BlockExecutionMode.Sequence,
        automation,
      )
      .thenReturn(mockExecutor);

    mockExecutor.finished.mockRejectedValue(new Error('Whoops'));

    await expect(
      automation.run(mockClient, input, events, triggerId),
    ).rejects.toThrow();
  });

  it('If the executor aborts, return a response with continue set to false', async () => {
    const then = [
      mock<Action<string, string>>(),
      mock<Action<string, string>>(),
    ] as const;
    const mockClient = mock<IHass>();
    const events = mock<EventBus>();
    const triggerId = 'trigger-id';
    const input = 'foo';

    const mockRunQueue = mock<RunQueue>();
    when(vi.mocked(RunQueue)).calledWith().thenReturn(mockRunQueue);

    const automation = new Automation({
      name: 'Test action',
      then,
      mode: ExecutionMode.Queue,
    });

    const mockExecutor = mock<Executor<string, string>>();

    when(vi.mocked(Executor))
      .calledWith(
        [...then],
        mockClient,
        events,
        triggerId,
        input,
        BlockExecutionMode.Sequence,
        automation,
      )
      .thenReturn(mockExecutor);

    mockExecutor.finished.mockRejectedValue(
      new ExecutionAbortedError('Execution was aborted'),
    );

    const result = await automation.run(mockClient, input, events, triggerId);

    expect(result.continue).toBeFalsy();
  });

  it('In restart mode passes then to an executor, restarts the runqueue, enqueues the executor then returns the results when finished', async () => {
    const then = [
      mock<Action<string, string>>(),
      mock<Action<string, string>>(),
    ] as const;
    const mockClient = mock<IHass>();
    const events = mock<EventBus>();
    const triggerId = 'trigger-id';
    const input = 'foo';

    const mockRunQueue = mock<RunQueue>();
    when(vi.mocked(RunQueue)).calledWith().thenReturn(mockRunQueue);

    const automation = new Automation({
      name: 'Test action',
      then,
      mode: ExecutionMode.Restart,
    });

    const mockExecutor = mock<Executor<string, string>>();

    when(vi.mocked(Executor))
      .calledWith(
        [...then],
        mockClient,
        events,
        triggerId,
        input,
        BlockExecutionMode.Sequence,
        automation,
      )
      .thenReturn(mockExecutor);

    mockExecutor.finished.mockImplementation(async () => {
      return [
        { continue: true, outputType: 'block', output: 'foo', success: true },
      ];
    });

    const result = await automation.run(mockClient, input, events, triggerId);

    if (result.continue) {
      expect(mockRunQueue.abortAll).toHaveBeenCalled();
      expect(mockRunQueue.enqueue).toHaveBeenCalled();
      expect(result.output).toEqual('foo');
      expect(result.continue).toEqual(true);
      expect(result.outputType).toEqual('block');
    }

    expect.assertions(5);
  });

  it('Defaults to the restart behaviour when no execute mode is supplied', async () => {
    const then = [
      mock<Action<string, string>>(),
      mock<Action<string, string>>(),
    ] as const;
    const mockClient = mock<IHass>();
    const events = mock<EventBus>();
    const triggerId = 'trigger-id';
    const input = 'foo';

    const mockRunQueue = mock<RunQueue>();
    when(vi.mocked(RunQueue)).calledWith().thenReturn(mockRunQueue);

    const automation = new Automation({
      name: 'Test action',
      then,
    });

    const mockExecutor = mock<Executor<string, string>>();

    when(vi.mocked(Executor))
      .calledWith(
        [...then],
        mockClient,
        events,
        triggerId,
        input,
        BlockExecutionMode.Sequence,
        automation,
      )
      .thenReturn(mockExecutor);

    mockExecutor.finished.mockImplementation(async () => {
      return [
        { continue: true, outputType: 'block', output: 'foo', success: true },
      ];
    });

    const result = await automation.run(mockClient, input, events, triggerId);

    if (result.continue) {
      expect(mockRunQueue.abortAll).toHaveBeenCalled();
      expect(mockRunQueue.enqueue).toHaveBeenCalled();
      expect(result.output).toEqual('foo');
      expect(result.continue).toEqual(true);
      expect(result.outputType).toEqual('block');
    }

    expect.assertions(5);
  });

  it('In parallel mode calls run() on the executor directly without using the runqueue', async () => {
    const then = [
      mock<Action<string, string>>(),
      mock<Action<string, string>>(),
    ] as const;
    const mockClient = mock<IHass>();
    const events = mock<EventBus>();
    const triggerId = 'trigger-id';
    const input = 'foo';

    const mockRunQueue = mock<RunQueue>();
    when(vi.mocked(RunQueue)).calledWith().thenReturn(mockRunQueue);

    const automation = new Automation({
      name: 'Test action',
      then,
      mode: ExecutionMode.Parallel,
    });

    const mockExecutor = mock<Executor<string, string>>();

    when(vi.mocked(Executor))
      .calledWith(
        [...then],
        mockClient,
        events,
        triggerId,
        input,
        BlockExecutionMode.Sequence,
        automation,
      )
      .thenReturn(mockExecutor);

    mockExecutor.finished.mockImplementation(async () => {
      return [
        { continue: true, outputType: 'block', output: 'foo', success: true },
      ];
    });

    const result = await automation.run(mockClient, input, events, triggerId);

    if (result.continue) {
      expect(mockExecutor.run).toHaveBeenCalled();
      expect(mockRunQueue.enqueue).not.toHaveBeenCalled();
      expect(result.output).toEqual('foo');
      expect(result.continue).toEqual(true);
      expect(result.outputType).toEqual('block');
    }

    expect.assertions(5);
  });
});
