import type { IHass } from '../types/index.ts';
import { Action } from './action.ts';
import { mock } from 'vitest-mock-extended';

describe('the action block', () => {
  it('calls the callback when executed and passes the result out as output', async () => {
    const client = mock<IHass>();
    const input = 'input';
    const output = 'output';

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const callback = (_client: IHass, _input: string | undefined) => 'output';

    const action = new Action<string, string>({
      name: 'This is my name',
      callback,
    });

    const result = await action.run(client, input);

    expect(result).toEqual({
      output,
      continue: true,
      outputType: 'block',
    });
  });

  it('awaits promises when callback is async', async () => {
    const callback = async (
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _client: IHass,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _input: string | undefined,
    ) => 'output';

    const client = mock<IHass>();
    const input = 'input';
    const output = 'output';

    const action = new Action<string, string>({
      name: 'This is my name',
      callback,
    });

    const result = await action.run(client, input);

    expect(result).toEqual({
      output,
      continue: true,
      outputType: 'block',
    });
  });
});
