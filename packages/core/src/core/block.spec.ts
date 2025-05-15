import { mock } from 'vitest-mock-extended';

import type { BlockOutput } from '@types';
import type { IFullBlocksClient } from '@types';

import { Block } from './block.ts';

describe('block.toJson', () => {
  it('returns a serialised version of the block', () => {
    class Foo extends Block {
      public override name = 'test-block';

      public override typeString = 'foo-type';

      public override run(): BlockOutput<void> | Promise<BlockOutput<void>> {
        throw new Error();
      }
      public constructor() {
        super('foo-id', undefined);
      }
    }

    const foo = new Foo();

    expect(foo.toJson()).toEqual({
      type: 'foo-type',
      id: 'foo-id',
      name: 'test-block',
    });
  });
});
describe('block.validate', () => {
  it('does not error', async () => {
    class Foo extends Block {
      public override name = 'test-block';

      public override typeString = 'foo-type';

      public override run(): BlockOutput<void> | Promise<BlockOutput<void>> {
        throw new Error();
      }
      public constructor() {
        super('foo-id', undefined);
      }
    }

    const foo = new Foo();

    const client = mock<IFullBlocksClient>();

    await expect(foo.initialise(client)).resolves.not.toThrow();
  });
});
