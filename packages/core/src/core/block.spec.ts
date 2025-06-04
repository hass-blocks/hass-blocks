import { mock } from 'vitest-mock-extended';

import type { BlockOutput } from '@types';
import type { IFullBlocksClient } from '@types';

import { Block } from './block.ts';
import type { IMQTTConnection } from '@hass-blocks/hass-mqtt';

describe('block.toJson', () => {
  it('returns a serialised version of the block', () => {
    class Foo extends Block {
      public override name = 'test-block';

      public override type = 'foo-type';

      public override run(): BlockOutput<void> | Promise<BlockOutput<void>> {
        throw new Error();
      }
      public constructor() {
        super('foo-id', undefined);
      }
    }

    const foo = new Foo();

    console.log(foo);

    expect(foo.toJson()).toEqual({
      type: 'foo-type',
      children: [],
      id: 'foo-id',
      name: 'test-block',
    });
  });
});
describe('block.validate', () => {
  it('does not error', async () => {
    class Foo extends Block {
      public override name = 'test-block';

      public override type = 'foo-type';

      public override run(): BlockOutput<void> | Promise<BlockOutput<void>> {
        throw new Error();
      }
      public constructor() {
        super('foo-id', undefined);
      }
    }

    const foo = new Foo();

    const client = mock<IFullBlocksClient>();
    const mqtt = mock<IMQTTConnection>();

    await expect(foo.initialise(client, mqtt)).resolves.not.toThrow();
  });
});
