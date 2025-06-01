import { mock } from 'vitest-mock-extended';

import { IBlockRunner, type IHass, type IRunContext } from '@types';

import { Action } from './action.ts';

describe('the action block', () => {
  it('calls the callback when executed and passes the result out as output', async () => {
    const hass = mock<IHass>();
    const input = 'input';
    const output = 'output';

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const callback = (_context: IRunContext<string | undefined>) => 'output';

    const action = new Action<string, string>({
      name: 'This is my name',
      callback,
    });

    const runner = mock<IBlockRunner>();

    const result = await action.run({ hass, input, runner });

    expect(result).toEqual({
      output,
      continue: true,
      outputType: 'block',
    });
  });

  it('awaits promises when callback is async', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const callback = async (_context: IRunContext<string | undefined>) =>
      'output';

    const hass = mock<IHass>();
    const input = 'input';
    const output = 'output';
    const runner = mock<IBlockRunner>();

    const action = new Action<string, string>({
      name: 'This is my name',
      callback,
    });

    const result = await action.run({ hass, input, runner });

    expect(result).toEqual({
      output,
      continue: true,
      outputType: 'block',
    });
  });
});
