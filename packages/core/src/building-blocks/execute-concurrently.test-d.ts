import type { Block } from '@core';
import { Action } from './action.ts';
import { concurrently } from './execute-concurrently.ts';
import type { IRunContext } from '@types';

describe('concurrently', () => {
  it('should correctly type the block when there is only one item and that item has inputs and outputs', () => {
    const oneAction = new Action({
      name: 'This thing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      callback: (_context: IRunContext<string>) => {
        const foo = 3;
        return foo;
      },
    });

    const foo = concurrently(oneAction);

    expectTypeOf(foo).toExtend<Block<string, number[]>>();
  });

  it('should correctly combine the outputs of multiple blocks', () => {
    const oneAction = new Action({
      name: 'This thing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      callback: (_context: IRunContext<string>) => {
        const foo = 3;
        return foo;
      },
    });

    const twoAction = new Action({
      name: 'This thing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      callback: (_context: IRunContext<string>) => {
        const foo = 'foo';
        return foo;
      },
    });

    const foo = concurrently(oneAction, twoAction);

    expectTypeOf(foo).toExtend<Block<string, (string | number)[]>>();
  });
});
