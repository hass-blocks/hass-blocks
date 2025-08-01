import { mock } from 'vitest-mock-extended';

import type { BlockOutput, ITrigger, ITarget } from '@types';
import type { IFullBlocksClient } from '@types';
import { HassBlocksError } from '@errors';

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

describe('block.addNext', () => {
  it('should add child when node is provided', () => {
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

    class Bar extends Block {
      public override name = 'bar-block';
      public override type = 'bar-type';
      public override run(): BlockOutput<void> | Promise<BlockOutput<void>> {
        throw new Error();
      }
      public constructor() {
        super('bar-id', undefined);
      }
    }

    const foo = new Foo();
    const bar = new Bar();

    foo.addNext(bar);

    expect(foo.children).toContain(bar);
  });
});

describe('block.trigger', () => {
  it('should throw error when no trigger is set', () => {
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

    expect(() => foo.trigger).toThrow(HassBlocksError);
    expect(() => foo.trigger).toThrow('No trigger has been set');
  });

  it('should set and get trigger correctly', () => {
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
    const mockTrigger = mock<ITrigger>();

    foo.trigger = mockTrigger;

    expect(foo.trigger).toBe(mockTrigger);
  });
});

describe('block.initialise with targets', () => {
  it('should initialise all targets when targets are provided', async () => {
    const mockTarget1 = mock<ITarget>();
    const mockTarget2 = mock<ITarget>();

    class Foo extends Block {
      public override name = 'test-block';
      public override type = 'foo-type';
      public override run(): BlockOutput<void> | Promise<BlockOutput<void>> {
        throw new Error();
      }
      public constructor() {
        super('foo-id', [mockTarget1, mockTarget2]);
      }
    }

    const foo = new Foo();
    const client = mock<IFullBlocksClient>();
    const mqtt = mock<IMQTTConnection>();

    await foo.initialise(client, mqtt);

    expect(mockTarget1.initialise).toHaveBeenCalledWith(client, mqtt);
    expect(mockTarget2.initialise).toHaveBeenCalledWith(client, mqtt);
  });
});

describe('block.hasTrigger', () => {
  it('should return true when trigger array has elements', () => {
    const mockTrigger1 = mock<ITrigger>();
    const mockTrigger2 = mock<ITrigger>();

    class Foo extends Block {
      public override name = 'test-block';
      public override type = 'foo-type';
      public override run(): BlockOutput<void> | Promise<BlockOutput<void>> {
        throw new Error();
      }
      public constructor() {
        super('foo-id', undefined, [mockTrigger1, mockTrigger2]);
      }
      public testHasTrigger() {
        return this.hasTrigger();
      }
    }

    const foo = new Foo();
    expect(foo.testHasTrigger()).toBe(true);
  });
});
