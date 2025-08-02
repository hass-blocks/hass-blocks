import { mock } from 'vitest-mock-extended';
import { iterating } from './iterating.ts';
import { IBlockRunner, IHass } from '@types';

describe('the iterate block', () => {
  it('supplies the first item in the list as output the first time it is called and marks the conditionResult as true', async () => {
    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    const theBlock = iterating(1, 2, 3);

    const result = await theBlock.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    expect(result.continue).toEqual(true);
    expect(result.continue).toEqual(true);

    if (result.continue && result.outputType === 'conditional') {
      expect(result.conditionResult).toEqual(true);
      expect(result.output.value).toEqual(1);
      expect(result.output.index).toEqual(0);
      expect(result.output.list).toEqual([1, 2, 3]);
    }
  });

  it('supplies the next item in the list the next time it is executed and still marks the result as continue', async () => {
    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    const theBlock = iterating(1, 2, 3);

    await theBlock.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    const result = await theBlock.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    expect(result.continue).toEqual(true);

    if (result.continue && result.outputType === 'conditional') {
      expect(result.conditionResult).toEqual(true);
      expect(result.output.value).toEqual(2);
      expect(result.output.index).toEqual(1);
      expect(result.output.list).toEqual([1, 2, 3]);
    }
  });

  it('supplies the last item in the sequence the third time around and marks the result as continue', async () => {
    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    const theBlock = iterating(1, 2, 3);

    await theBlock.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    await theBlock.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    const result = await theBlock.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    expect(result.continue).toEqual(true);

    if (result.continue && result.outputType === 'conditional') {
      expect(result.conditionResult).toEqual(true);
      expect(result.output.value).toEqual(3);
      expect(result.output.index).toEqual(2);
      expect(result.output.list).toEqual([1, 2, 3]);
    }
  });

  it('supplies the last item in the sequence the third time around and marks the result as continue', async () => {
    const mockHass = mock<IHass>();
    const mockRunner = mock<IBlockRunner>();
    const theBlock = iterating(1, 2, 3);

    await theBlock.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    await theBlock.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    await theBlock.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    const result = await theBlock.run({
      hass: mockHass,
      input: undefined,
      runner: mockRunner,
    });

    expect(result.continue).toEqual(true);

    if (result.continue && result.outputType === 'conditional') {
      expect(result.conditionResult).toEqual(false);
      expect(result.output.value).toEqual(3);
      expect(result.output.index).toEqual(2);
      expect(result.output.list).toEqual([1, 2, 3]);
    }
  });
});
