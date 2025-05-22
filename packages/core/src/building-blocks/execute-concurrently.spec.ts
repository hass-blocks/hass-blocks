import { mock } from 'vitest-mock-extended';
import type { Action } from './action.ts';
import type { IHass } from '@types';
import { concurrently } from './execute-concurrently.ts';

describe('concurrently.run', () => {
  it('throws an error if there is no event bus', async () => {
    const mockClient = mock<IHass>();
    const triggerId = 'trigger-id';
    const input = 'foo';

    const theBlock = concurrently(
      mock<Action<string, string>>(),
      mock<Action<string, string>>(),
    );

    await expect(
      theBlock.run(mockClient, input, undefined, triggerId),
    ).rejects.toThrow();
  });
});
