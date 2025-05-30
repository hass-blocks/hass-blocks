import { mock } from 'vitest-mock-extended';

import type { Block } from '@core';
import type { ITrigger } from '@types';

import { Action } from './action.ts';
import { automation } from './automation.ts';

describe('the automation class', () => {
  it('should correctly type the sequence when there is only one item and that item has inputs and outputs', () => {
    const oneAction = new Action({
      name: 'This thing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      callback: (_client, _input: string) => {
        const foo = 3;
        return foo;
      },
    });

    const foo = automation({
      name: 'this automation',
      then: [oneAction] as const,
    });

    expectTypeOf(foo).toExtend<Block<string, number>>();
  });

  it('should correctly type the sequence when there is only one item and that item has no inputs and outputs', () => {
    const oneAction = new Action({
      name: 'This thing',
      callback: () => {
        console.log('something');
      },
    });

    const foo = automation({
      name: 'this automation',
      then: [oneAction],
    });

    expectTypeOf(foo).toExtend<Block>();
  });

  it('should correctly type the sequence when there is only one item that has an input but no outputs', () => {
    const oneAction = new Action({
      name: 'This thing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      callback: (_client, _input: string) => {
        console.log('something');
      },
    });

    const foo = automation({
      name: 'this automation',
      then: [oneAction],
    });

    expectTypeOf(foo).toExtend<Block<string>>();
  });

  it('should correctly type the sequence when there is only one item that has an output but no inputs', () => {
    const oneAction = new Action({
      name: 'This thing',
      callback: () => {
        console.log('something');
        return 2;
      },
    });

    const foo = automation({
      name: 'this automation',
      then: [oneAction],
    });

    expectTypeOf(foo).toExtend<Block<void, number>>();
  });

  it('should correctly type the sequence when there is two items that have no inputs and outputs', () => {
    const oneAction = new Action({
      name: 'This thing',
      callback: () => {
        console.log('something');
      },
    });

    const twoAction = new Action({
      name: 'This thing',
      callback: () => {
        console.log('something');
      },
    });

    const foo = automation({
      name: 'this automation',
      then: [oneAction, twoAction],
    });

    expectTypeOf(foo).toExtend<Block>();
  });

  it('should correctly type the start of the sequence when there is two items but the one at the start has an input', () => {
    const oneAction = new Action({
      name: 'This thing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      callback: (_client, _input: string) => {
        console.log('something');
      },
    });

    const twoAction = new Action({
      name: 'This thing',
      callback: () => {
        console.log('something');
      },
    });

    const foo = automation({
      name: 'this automation',
      then: [oneAction, twoAction],
    });

    expectTypeOf(foo).toExtend<Block<string>>();
  });

  it('should correctly type the start of the sequence when there is two items but the one at the end has an output', () => {
    const oneAction = new Action({
      name: 'This thing',
      callback: () => {
        console.log('something');
      },
    });

    const twoAction = new Action({
      name: 'This thing',
      callback: () => {
        console.log('something');
        return 2;
      },
    });

    const foo = automation({
      name: 'this automation',
      then: [oneAction, twoAction],
    });

    expectTypeOf(foo).toExtend<Block<void, number>>();
  });

  it('should not complain if the right hand properties are optional', () => {
    const oneAction = new Action({
      name: 'This thing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      callback: (_client, _input: string) => {
        return {
          two: 'foo',
        };
      },
    });

    const twoAction = new Action<{ two?: string }, number>({
      name: 'This thing',
      callback: () => {
        console.log('something');
        return 2;
      },
    });

    automation({
      name: 'this automation',
      // Should not produce a type error here
      then: [oneAction, twoAction],
    });
  });

  it('should correctly type the start of the sequence when there is two items and the one at the start has an input and the one at the end has an output', () => {
    const oneAction = new Action({
      name: 'This thing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      callback: (_client, _input: string) => {
        console.log('something');
      },
    });

    const twoAction = new Action({
      name: 'This thing',
      callback: () => {
        console.log('something');
        return 2;
      },
    });

    const foo = automation({
      name: 'this automation',
      then: [oneAction, twoAction],
    });

    expectTypeOf(foo).toExtend<Block<string, number>>();
  });

  it('should correctly type the start and end of the sequence when there is four items ', () => {
    const oneAction = new Action({
      name: 'This thing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      callback: (_client, _input: string) => {
        console.log('something');
      },
    });

    const twoAction = new Action({
      name: 'This thing',
      callback: () => {
        console.log('something');
      },
    });

    const threeAction = new Action({
      name: 'This thing',
      callback: () => {
        console.log('something');
      },
    });

    const fourAction = new Action({
      name: 'This thing',
      callback: () => {
        console.log('something');
        return 2;
      },
    });

    const foo = automation({
      name: 'this automation',
      then: [oneAction, twoAction, threeAction, fourAction] as const,
    });

    expectTypeOf(foo).toExtend<Block<string, number>>();
  });

  it('should correctly type the object when the types of the then link together', () => {
    const oneAction = new Action({
      name: 'This thing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      callback: (_client, _input: string) => {
        console.log('something');
        return 'string';
      },
    });

    const twoAction = new Action({
      name: 'This thing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      callback: (_client, _input: string) => {
        console.log('something');
        return 2;
      },
    });

    const threeAction = new Action({
      name: 'This thing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      callback: (_client, _input: number) => {
        console.log('something');
      },
    });

    const fourAction = new Action({
      name: 'This thing',
      callback: () => {
        console.log('something');
        return 2;
      },
    });

    const foo = automation({
      name: 'this automation',
      then: [oneAction, twoAction, threeAction, fourAction],
    });

    expectTypeOf(foo).toExtend<Block<string, number>>();
  });

  it('should still correctly link up type even if some of the return types are wrapped in promises', () => {
    const oneAction = new Action({
      name: 'This thing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      callback: (_client, _input: string) => {
        console.log('something');
        return 'string';
      },
    });

    const twoAction = new Action<string, number>({
      name: 'This thing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      callback: async (_client, _input: string) => {
        console.log('something');
        return 2;
      },
    });

    const threeAction = new Action({
      name: 'This thing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      callback: (_client, _input: number) => {
        console.log('something');
      },
    });

    const fourAction = new Action({
      name: 'This thing',
      callback: () => {
        console.log('something');
        return 2;
      },
    });

    const foo = automation({
      name: 'this automation',
      then: [oneAction, twoAction, threeAction, fourAction],
    });

    expectTypeOf(foo).toExtend<Block<string, number>>();
  });

  it('If the trigger has an output, set that to the automation input', () => {
    const oneAction = new Action({
      name: 'This thing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      callback: (_client, _input: number) => {
        console.log('something');
        return 'string';
      },
    });

    const twoAction = new Action({
      name: 'This thing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      callback: (_client, _input: string) => {
        console.log('something');
        return 2;
      },
    });

    const threeAction = new Action({
      name: 'This thing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      callback: (_client, _input: number) => {
        console.log('something');
      },
    });

    const when = mock<ITrigger>();

    const foo = automation({
      when,
      name: 'this automation',
      then: [oneAction, twoAction, threeAction] as const,
    });

    expectTypeOf(foo).toExtend<Block<number>>();
  });

  it("should produce an error when the types thenn't link up", () => {
    const oneAction = new Action({
      name: 'This thing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      callback: (_client, _input: string) => {
        console.log('something');
        return 'string';
      },
    });

    const twoAction = new Action({
      name: 'This thing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      callback: (_client, _input: string) => {
        console.log('something');
        return 2;
      },
    });

    const threeAction = new Action({
      name: 'This thing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      callback: (_client, _input: string) => {
        console.log('something');
      },
    });

    const fourAction = new Action({
      name: 'This thing',
      callback: () => {
        console.log('something');
        return 2;
      },
    });

    automation({
      name: 'this automation',
      // @ts-expect-error Expected error - the types thenn't link!
      then: [oneAction, twoAction, threeAction, fourAction],
    });
  });
});
