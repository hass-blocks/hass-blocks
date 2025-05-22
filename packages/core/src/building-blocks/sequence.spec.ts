import { mock } from 'vitest-mock-extended';
import { sequence } from './sequence.ts';
import type { Action } from './action.ts';
import { when } from 'vitest-when';
import { automation, type IAutomationConfig } from './automation.ts';
import { ExecutionMode } from '@types';
import type { Block } from '@core';

vi.mock('./automation.ts');

beforeEach(() => {
  vi.resetAllMocks();
});

describe('sequence', () => {
  it('creates an automation under the hood', () => {
    const mockActionOne = mock<Action<string, string>>();
    const mockActionTwo = mock<Action<string, string>>();

    type BlockType = (
      config: IAutomationConfig<
        [typeof mockActionOne, typeof mockActionTwo],
        string,
        string
      >,
    ) => Block<string, string>;

    const mockBlock = mock<Block<string, string>>();

    when<BlockType>(automation)
      .calledWith({
        name: 'Sequence',
        mode: ExecutionMode.Parallel,
        then: [mockActionOne, mockActionTwo],
      })
      .thenReturn(mockBlock);

    const result = sequence(mockActionOne, mockActionTwo);

    expect(result).toEqual(mockBlock);
  });
});
