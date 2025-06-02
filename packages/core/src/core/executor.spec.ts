import { mock } from 'vitest-mock-extended';
import { when } from 'vitest-when';
import { v4 } from 'uuid';

import { type BlockOutput, type IHass, type IRunContext } from '@types';
import { EventBus, Block } from '@core';

import { BlockExecutionMode, Executor } from './executor.ts';

vi.mock('uuid');

afterEach(() => {
  vi.resetAllMocks();
});

describe('executor', () => {
  it('provides a mechanism for blocks to execute other blocks', async () => {
    const mockFn = vi.fn();
    class MyTestBlock extends Block<string, number> {
      name = 'test';

      type = 'test-block';

      public override run(
        context: IRunContext<string>,
      ): BlockOutput<number> | Promise<BlockOutput<number>> {
        mockFn(context);

        return { continue: true, output: 12, outputType: 'block' };
      }
    }

    const actionOne = mock<Block<string, string>>({
      name: 'foo',
      type: 'action',
      toJson: () => ({ type: 'action', id: 'foo', name: 'foo' }),
      run: async ({ runner }) => {
        const testBlockRunner = runner(new MyTestBlock('test-block-id', []));

        const run = await testBlockRunner('the-string');

        if (!run.continue) {
          throw new Error('Run failed');
        }

        return {
          continue: run.continue,
          output: String(run.output),
          outputType: 'block',
        };
      },
    });

    const hass = mock<IHass>();
    const events = mock<EventBus>();
    const triggerId = 'trigger-id';

    const executor = new Executor<string, string>(
      [actionOne],
      hass,
      events,
      triggerId,
      'foo',
      BlockExecutionMode.Sequence,
    );

    void executor.run();

    const [result] = await executor.finished();

    if (result && result.continue) {
      expect(result.output).toEqual('12');
      expect(mockFn).toHaveBeenCalled();
    }
    expect.assertions(2);
  });

  it('emits all the correct messages when blocks are executed', async () => {
    const actionOne = mock<Block<string, string>>({
      name: 'foo',
      type: 'action',
      toJson: () => ({ type: 'action', id: 'foo', name: 'foo' }),
    });
    const actionTwo = mock<Block<string, string>>({
      name: 'bar',
      type: 'action',
      toJson: () => ({ type: 'action', id: 'bar', name: 'bar' }),
    });
    const actionThree = mock<Block<string, string>>({
      name: 'baz',
      type: 'action',
      toJson: () => ({ type: 'action', id: 'baz', name: 'baz' }),
    });

    const hass = mock<IHass>();
    const events = mock<EventBus>();
    const triggerId = 'trigger-id';
    const input = 'foo';

    when(actionOne.run)
      .calledWith({ hass, input, events, triggerId, runner: expect.anything() })
      .thenResolve({
        continue: true,
        outputType: 'block',
        output: 'bar',
      });

    when(actionTwo.run)
      .calledWith({
        hass,
        input: 'bar',
        events,
        triggerId,
        runner: expect.anything(),
      })
      .thenResolve({
        continue: true,
        outputType: 'block',
        output: 'baz',
      });

    when(actionThree.run)
      .calledWith({
        hass,
        input: 'baz',
        events,
        triggerId,
        runner: expect.anything(),
      })
      .thenResolve({
        continue: true,
        outputType: 'block',
        output: 'bif',
      });

    const actions = [actionOne, actionTwo, actionThree] as const;

    type V4StringFn = (
      options?: Parameters<typeof v4>[0],
      buf?: undefined,
      offset?: number,
    ) => string;
    const v4Mocked = v4 as unknown as V4StringFn;

    vi.mocked(v4Mocked)

      .mockReturnValueOnce('one')
      .mockReturnValueOnce('two')
      .mockReturnValueOnce('three');

    const executor = new Executor(
      [...actions],
      hass,
      events,
      triggerId,
      input,
      BlockExecutionMode.Sequence,
    );

    void executor.run();

    const calls = events.emit.mock.calls;

    expect(calls[0]).toEqual([
      'block-pending',
      {
        executeId: 'one',
        triggerId,
        type: 'action',
        name: 'foo',
        block: { type: 'action', id: 'foo', name: 'foo' },
        triggeredBy: undefined,
        parent: undefined,
      },
    ]);

    expect(calls[2]).toEqual([
      'block-pending',
      {
        executeId: 'two',
        triggerId,
        type: 'action',
        name: 'bar',
        block: { type: 'action', id: 'bar', name: 'bar' },
        triggeredBy: undefined,
        parent: undefined,
      },
    ]);

    expect(calls[4]).toEqual([
      'block-pending',
      {
        executeId: 'three',
        triggerId,
        type: 'action',
        name: 'baz',
        block: { type: 'action', id: 'baz', name: 'baz' },
        triggeredBy: undefined,
        parent: undefined,
      },
    ]);

    await executor.finished();

    expect(calls[6]).toEqual([
      'block-started',
      {
        executeId: 'one',
        triggerId,
        type: 'action',
        name: 'foo',
        block: { type: 'action', id: 'foo', name: 'foo' },
        triggeredBy: undefined,
        parent: undefined,
      },
    ]);

    expect(calls[8]).toEqual([
      'block-finished',
      {
        executeId: 'one',
        triggerId,
        type: 'action',
        name: 'foo',
        block: { type: 'action', id: 'foo', name: 'foo' },
        triggeredBy: undefined,
        parent: undefined,
        continue: true,
        outputType: 'block',
        output: {
          continue: true,
          outputType: 'block',
          output: 'bar',
        },
      },
    ]);

    expect(calls[10]).toEqual([
      'block-started',
      {
        executeId: 'two',
        triggerId,
        type: 'action',
        name: 'bar',
        block: { type: 'action', id: 'bar', name: 'bar' },
        triggeredBy: undefined,
        parent: undefined,
      },
    ]);

    expect(calls[12]).toEqual([
      'block-finished',
      {
        executeId: 'two',
        triggerId,
        type: 'action',
        name: 'bar',
        block: { type: 'action', id: 'bar', name: 'bar' },
        triggeredBy: undefined,
        parent: undefined,
        continue: true,
        outputType: 'block',
        output: {
          continue: true,
          outputType: 'block',
          output: 'baz',
        },
      },
    ]);

    expect(calls[14]).toEqual([
      'block-started',
      {
        executeId: 'three',
        triggerId,
        type: 'action',
        name: 'baz',
        block: { type: 'action', id: 'baz', name: 'baz' },
        triggeredBy: undefined,
        parent: undefined,
      },
    ]);

    expect(calls[16]).toEqual([
      'block-finished',
      {
        executeId: 'three',
        triggerId,
        type: 'action',
        name: 'baz',
        block: { type: 'action', id: 'baz', name: 'baz' },
        triggeredBy: undefined,
        parent: undefined,
        continue: true,
        outputType: 'block',
        output: {
          continue: true,
          outputType: 'block',
          output: 'bif',
        },
      },
    ]);
  });

  it('runs all the blocks and feeds inputs through to outputs', async () => {
    const actionOne = mock<Block<string, string>>();
    const actionTwo = mock<Block<string, string>>();
    const actionThree = mock<Block<string, string>>();

    const hass = mock<IHass>();
    const events = mock<EventBus>();
    const triggerId = 'trigger-id';
    const input = 'foo';

    when(actionOne.run)
      .calledWith({ hass, input, events, triggerId, runner: expect.anything() })
      .thenResolve({
        continue: true,
        outputType: 'block',
        output: 'bar',
      });

    when(actionTwo.run)
      .calledWith({
        hass,
        input: 'bar',
        events,
        triggerId,
        runner: expect.anything(),
      })
      .thenResolve({
        continue: true,
        outputType: 'block',
        output: 'baz',
      });

    when(actionThree.run)
      .calledWith({
        hass,
        input: 'baz',
        events,
        triggerId,
        runner: expect.anything(),
      })
      .thenResolve({
        continue: true,
        outputType: 'block',
        output: 'bif',
      });

    const actions = [actionOne, actionTwo, actionThree] as const;

    const executor = new Executor(
      [...actions],
      hass,
      events,
      triggerId,
      input,
      BlockExecutionMode.Sequence,
    );

    void executor.run();

    const [result] = await executor.finished();

    expect(result?.continue).toEqual(true);
    if (result?.continue) {
      expect(result.outputType).toEqual('block');
      expect(result.continue).toEqual(true);
      expect(result.success).toEqual(true);
      expect(result.output).toEqual('bif');
    }
  });
});
