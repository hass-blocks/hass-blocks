import { mock } from 'vitest-mock-extended';
import { when } from 'vitest-when';

import { md5 } from '@utils';
import type { IBlockRunner, IHass, IRunContext } from '@types';

import { Assertion } from './assertion.ts';

vi.mock('@utils');

beforeEach(() => {
  vi.resetAllMocks();
});

describe('assertion.run', () => {
  it('calls the predicate and extracts the condition result from the object if it returns an object', async () => {
    const hass = mock<IHass>();
    const predicate = vi.fn();
    const input = 'foo';
    when(predicate)
      .calledWith({ hass, input, runner: expect.anything() })
      .thenReturn({ result: true, output: 'foo' });
    const runner = mock<IBlockRunner>();

    const assertion = new Assertion<string, void>({
      name: 'foo',
      id: 'foo-id',
      predicate,
    });

    const result = await assertion.run({ hass, input, runner });
    expect(result).toEqual({
      outputType: 'conditional',
      continue: true,
      conditionResult: true,
      output: 'foo',
    });
  });

  it('awaits promises when async functions are supplied as predicates', async () => {
    const hass = mock<IHass>();
    const input = 'foo';

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const predicate = async (_context: IRunContext<string | undefined>) => true;

    const assertion = new Assertion({
      name: 'foo',
      id: 'foo-id',
      predicate,
    });
    const runner = mock<IBlockRunner>();

    const result = await assertion.run({ hass, input, runner });
    expect(result).toEqual({
      outputType: 'conditional',
      continue: true,
      conditionResult: true,
      output: undefined,
    });
  });

  it('generates an md5 hash of the name the id if not supplied', () => {
    when(md5).calledWith('foo').thenReturn('hash');

    const assertion = new Assertion({
      name: 'foo',
      predicate: vi.fn(),
    });

    expect(assertion.id).toEqual('hash');
  });

  it('configures the id from the constructor input when supplied', () => {
    const assertion = new Assertion({
      name: 'foo',
      id: 'foo-id',
      predicate: vi.fn(),
    });

    expect(assertion.id).toEqual('foo-id');
  });

  it('calls the predicate and returns the result as the condition result if it returns a boolean', async () => {
    const hass = mock<IHass>();
    const predicate = vi.fn();
    const input = 'foo';
    when(predicate)
      .calledWith({ hass, input, runner: expect.anything() })
      .thenReturn(false);

    const assertion = new Assertion<string, void>({
      name: 'foo',
      id: 'foo-id',
      predicate,
    });

    const runner = mock<IBlockRunner>();

    const result = await assertion.run({ hass, input, runner });
    expect(result).toEqual({
      outputType: 'conditional',
      continue: true,
      conditionResult: false,
      output: undefined,
    });
  });
});
