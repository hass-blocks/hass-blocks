import { mock } from 'vitest-mock-extended';
import { when as testWhen } from 'vitest-when';

import { type Block, EventBus } from '@core';
import type { ContinueOutput, IBlockRunner, IHass } from '@types';

import { when } from './if-then-else-condition.ts';
import type { Assertion } from './assertion.ts';

vi.mock('@utils');

beforeEach(() => {
  vi.resetAllMocks();
});

describe('ifThenElseCondition.run', () => {
  it('returns continue straight away without running branches when assertionResult.continue is false', async () => {
    const mockAssertion = mock<Assertion<string, boolean>>();
    mockAssertion.run.mockResolvedValue({
      outputType: 'conditional',
      continue: false as true,
      conditionResult: false,
      output: false,
    });

    const mockThenBlock = mock<Block<boolean>>();
    const mockElseBlock = mock<Block<boolean>>();
    const events = mock<EventBus>();
    const triggerId = 'foo';

    const condition = when(mockAssertion, {
      then: mockThenBlock,
      else: mockElseBlock,
    });

    const hass = mock<IHass>();
    const runner = mock<IBlockRunner>();
    const result = await condition.run({
      runner,
      hass,
      input: 'foo',
      events,
      triggerId,
    });

    expect(mockThenBlock.run).not.toHaveBeenCalled();
    expect(mockElseBlock.run).not.toHaveBeenCalled();
    expect(result.continue).toEqual(false);
  });

  it("Executes the 'then' branch asnd returns the result when condition is true", async () => {
    const mockAssertion = mock<Assertion<string, boolean>>();
    const mockAssertionOutput = false;
    mockAssertion.run.mockResolvedValue({
      outputType: 'conditional',
      continue: true,
      conditionResult: true,
      output: mockAssertionOutput,
    });

    const mockThenBlock = mock<Block<boolean, boolean>>();
    const mockElseBlock = mock<Block<boolean, boolean>>();

    const mockEvents = new EventBus();
    const hass = mock<IHass>();
    const triggerId = 'foo';

    const blockOutput: ContinueOutput<boolean> = {
      continue: true,
      outputType: 'block',
      output: true,
    };

    const runner = mock<IBlockRunner>();
    testWhen(mockThenBlock.run)
      .calledWith({
        runner: expect.anything(),
        hass,
        input: mockAssertionOutput,
        events: mockEvents,
        triggerId,
      })
      .thenReturn(blockOutput);

    const condition = when(mockAssertion, {
      then: mockThenBlock,
      else: mockElseBlock,
    });

    const result = await condition.run({
      runner,
      hass,
      input: 'foo',
      events: mockEvents,
      triggerId,
    });

    expect(mockThenBlock.run).toHaveBeenCalledWith({
      runner: expect.anything(),
      hass,
      input: mockAssertionOutput,
      events: mockEvents,
      triggerId,
    });
    expect(mockElseBlock.run).not.toHaveBeenCalled();
    expect(result.continue).toEqual(true);
  });

  it("Executes the 'else' branch asnd returns the result when condition is false", async () => {
    const mockAssertion = mock<Assertion<string, boolean>>();
    const mockAssertionOutput = false;
    mockAssertion.run.mockResolvedValue({
      outputType: 'conditional',
      continue: true,
      conditionResult: false,
      output: mockAssertionOutput,
    });

    const mockThenBlock = mock<Block<boolean, boolean>>();
    const mockElseBlock = mock<Block<boolean, boolean>>();

    const mockEvents = new EventBus();
    const hass = mock<IHass>();
    const triggerId = 'foo';

    const blockOutput: ContinueOutput<boolean> = {
      continue: true,
      outputType: 'block',
      output: true,
    };

    testWhen(mockElseBlock.run)
      .calledWith({
        runner: expect.anything(),
        hass,
        input: mockAssertionOutput,
        events: mockEvents,
        triggerId,
      })
      .thenReturn(blockOutput);

    const condition = when(mockAssertion, {
      then: mockThenBlock,
      else: mockElseBlock,
    });

    const runner = mock<IBlockRunner>();

    const result = await condition.run({
      runner,
      hass,
      input: 'foo',
      events: mockEvents,
      triggerId,
    });

    expect(mockElseBlock.run).toHaveBeenCalledWith({
      runner: expect.anything(),
      hass,
      input: mockAssertionOutput,
      events: mockEvents,
      triggerId,
    });
    expect(mockThenBlock.run).not.toHaveBeenCalled();
    expect(result.continue).toEqual(true);
  });
});

describe('ifThenElseCondition.constructor', () => {
  it('configures the id from the constructor input when supplied', () => {
    const mockAssertion = mock<Assertion<string, boolean>>();
    const mockThenBlock = mock<Block<boolean, boolean>>();
    const mockElseBlock = mock<Block<boolean, boolean>>();

    const assertion = when(mockAssertion, {
      id: 'foo-id',
      then: mockThenBlock,
      else: mockElseBlock,
    });

    expect(assertion.id).toEqual('foo-id');
  });

  it('should throw error when triggerId is not provided', async () => {
    expect.assertions(1);

    const mockAssertion = mock<Assertion<string, boolean>>();
    const mockThenBlock = mock<Block<boolean, boolean>>();
    const mockElseBlock = mock<Block<boolean, boolean>>();
    const events = mock<EventBus>();
    const hass = mock<IHass>();
    const runner = mock<IBlockRunner>();

    const condition = when(mockAssertion, {
      then: mockThenBlock,
      else: mockElseBlock,
    });

    const context = {
      runner,
      hass,
      input: 'foo',
      events,
    };

    await expect(condition.run(context)).rejects.toThrow('Trigger id');
  });

  it('should throw AssertionError when assertion does not return conditional result', async () => {
    expect.assertions(1);

    const mockAssertion = mock<Assertion<string, boolean>>();
    mockAssertion.run.mockResolvedValue({
      outputType: 'block',
      continue: true,
      output: false,
    });

    const mockThenBlock = mock<Block<boolean, boolean>>();
    const mockElseBlock = mock<Block<boolean, boolean>>();
    const events = mock<EventBus>();
    const hass = mock<IHass>();
    const runner = mock<IBlockRunner>();

    const condition = when(mockAssertion, {
      then: mockThenBlock,
      else: mockElseBlock,
    });

    await expect(
      condition.run({
        runner,
        hass,
        input: 'foo',
        events,
        triggerId: 'test-trigger',
      }),
    ).rejects.toThrow(
      `Block in the 'assertion' property must return a conditional result`,
    );
  });

  it('should throw error when events is not provided', async () => {
    expect.assertions(1);

    const mockAssertion = mock<Assertion<string, boolean>>();
    const mockThenBlock = mock<Block<boolean, boolean>>();
    const mockElseBlock = mock<Block<boolean, boolean>>();
    const hass = mock<IHass>();
    const runner = mock<IBlockRunner>();

    const condition = when(mockAssertion, {
      then: mockThenBlock,
      else: mockElseBlock,
    });

    const context = {
      runner,
      hass,
      input: 'foo',
    };

    await expect(condition.run(context)).rejects.toThrow(
      'Event bus must be initialised!',
    );
  });

  it('should call addNext method correctly on assertion and branches', () => {
    const mockAssertion = mock<Assertion<string, boolean>>();
    const mockThenBlock = mock<Block<boolean, boolean>>();
    const mockElseBlock = mock<Block<boolean, boolean>>();
    const mockNextNode = mock<Block<boolean, boolean>>();

    const condition = when(mockAssertion, {
      then: mockThenBlock,
      else: mockElseBlock,
    });

    condition.addNext(mockNextNode);

    expect(mockAssertion.addNext).toHaveBeenCalledWith(mockThenBlock);
    expect(mockAssertion.addNext).toHaveBeenCalledWith(mockElseBlock);
    expect(mockThenBlock.addNext).toHaveBeenCalledWith(mockNextNode);
    expect(mockElseBlock.addNext).toHaveBeenCalledWith(mockNextNode);
  });

  it('should handle case when addNext is called without next node', () => {
    const mockAssertion = mock<Assertion<string, boolean>>();
    const mockThenBlock = mock<Block<boolean, boolean>>();
    const mockElseBlock = mock<Block<boolean, boolean>>();

    const condition = when(mockAssertion, {
      then: mockThenBlock,
      else: mockElseBlock,
    });

    condition.addNext();

    expect(mockAssertion.addNext).toHaveBeenCalledWith(mockThenBlock);
    expect(mockAssertion.addNext).toHaveBeenCalledWith(mockElseBlock);
    expect(mockThenBlock.addNext).toHaveBeenCalledWith(undefined);
    expect(mockElseBlock.addNext).toHaveBeenCalledWith(undefined);
  });
});
