import { mock } from 'vitest-mock-extended';

import type { BlockOutput, ITrigger, ITarget, IMutableNode } from '@types';
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

  it('should not add anything when node is undefined', () => {
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
    const initialChildrenLength = foo.children.length;

    foo.addNext(undefined);

    expect(foo.children.length).toBe(initialChildrenLength);
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

    expect(mockTarget1.initialise).toHaveBeenCalledWith(client);
    expect(mockTarget2.initialise).toHaveBeenCalledWith(client);
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

  it('should return false when trigger array is empty', () => {
    class Foo extends Block {
      public override name = 'test-block';
      public override type = 'foo-type';
      public override run(): BlockOutput<void> | Promise<BlockOutput<void>> {
        throw new Error();
      }
      public constructor() {
        super('foo-id', undefined, []);
      }
      public testHasTrigger() {
        return this.hasTrigger();
      }
    }

    const foo = new Foo();
    expect(foo.testHasTrigger()).toBe(false);
  });

  it('should return true when single trigger is provided', () => {
    const mockTrigger = mock<ITrigger>();

    class Foo extends Block {
      public override name = 'test-block';
      public override type = 'foo-type';
      public override run(): BlockOutput<void> | Promise<BlockOutput<void>> {
        throw new Error();
      }
      public constructor() {
        super('foo-id', undefined, mockTrigger);
      }
      public testHasTrigger() {
        return this.hasTrigger();
      }
    }

    const foo = new Foo();
    expect(foo.testHasTrigger()).toBe(true);
  });

  it('should return false when no trigger is provided', () => {
    class Foo extends Block {
      public override name = 'test-block';
      public override type = 'foo-type';
      public override run(): BlockOutput<void> | Promise<BlockOutput<void>> {
        throw new Error();
      }
      public constructor() {
        super('foo-id', undefined);
      }
      public testHasTrigger() {
        return this.hasTrigger();
      }
    }

    const foo = new Foo();
    expect(foo.testHasTrigger()).toBe(false);
  });

  it('should recursively destroy all children when destroy is called', async () => {
    const mockChild1 = mock<IMutableNode>({
      destroy: vi.fn().mockResolvedValue(undefined),
    });
    const mockChild2 = mock<IMutableNode>({
      destroy: vi.fn().mockResolvedValue(undefined),
    });
    const mockChildWithoutDestroy = mock<IMutableNode>({
      destroy: vi.fn().mockResolvedValue(undefined),
    });

    class TestBlock extends Block {
      public override name = 'test-block';
      public override type = 'test-type';
      public override run(): BlockOutput<void> {
        return { continue: true, output: undefined, outputType: 'block' };
      }
    }

    const block = new TestBlock('test-id', []);
    block.addChild(mockChild1, mockChild2, mockChildWithoutDestroy);

    await block.destroy();

    expect(mockChild1.destroy).toHaveBeenCalled();
    expect(mockChild2.destroy).toHaveBeenCalled();
    expect(mockChildWithoutDestroy.destroy).toHaveBeenCalled();
  });
});

describe('block.linkNodes', () => {
  it('should link nodes together in sequence', () => {
    class TestBlock extends Block {
      public override name = 'test-block';
      public override type = 'test-type';
      public override run(): BlockOutput<void> {
        return { continue: true, output: undefined, outputType: 'block' };
      }
      public testLinkNodes(...nodes: IMutableNode[]) {
        this.linkNodes(...nodes);
      }
    }

    const node1 = mock<IMutableNode>();
    const node2 = mock<IMutableNode>();
    const node3 = mock<IMutableNode>();

    const block = new TestBlock('test-id', []);
    block.testLinkNodes(node1, node2, node3);

    expect(node1.addNext).toHaveBeenCalledWith(node2);
    expect(node2.addNext).toHaveBeenCalledWith(node3);
    expect(node3.addNext).toHaveBeenCalledWith();
  });

  it('should handle single node by calling addNext with undefined', () => {
    class TestBlock extends Block {
      public override name = 'test-block';
      public override type = 'test-type';
      public override run(): BlockOutput<void> {
        return { continue: true, output: undefined, outputType: 'block' };
      }
      public testLinkNodes(...nodes: IMutableNode[]) {
        this.linkNodes(...nodes);
      }
    }

    const node1 = mock<IMutableNode>();

    const block = new TestBlock('test-id', []);
    block.testLinkNodes(node1);

    expect(node1.addNext).toHaveBeenCalledWith();
  });
});

describe('block.destroy async', () => {
  it('should return a promise when destroy is called', async () => {
    class TestBlock extends Block {
      public override name = 'test-block';
      public override type = 'test-type';
      public override run(): BlockOutput<void> {
        return { continue: true, output: undefined, outputType: 'block' };
      }
    }

    const block = new TestBlock('test-id', []);

    const result = block.destroy();

    expect(result).toBeInstanceOf(Promise);
    await result;
  });

  it('should await async destroy on children', async () => {
    const mockChild = mock<IMutableNode>({
      destroy: vi.fn().mockResolvedValue(undefined),
    });

    class TestBlock extends Block {
      public override name = 'test-block';
      public override type = 'test-type';
      public override run(): BlockOutput<void> {
        return { continue: true, output: undefined, outputType: 'block' };
      }
    }

    const block = new TestBlock('test-id', []);
    block.addChild(mockChild);

    await block.destroy();

    expect(mockChild.destroy).toHaveBeenCalled();
  });
});

describe('block.toJson circular reference handling', () => {
  class TestBlock extends Block {
    public override name = 'test-block';
    public override type = 'test-type';
    public override run(): BlockOutput<void> {
      return { continue: true, output: undefined, outputType: 'block' };
    }
  }

  it('should gracefully handle simple circular reference without stack overflow', () => {
    const blockA = new TestBlock('block-a', []);
    const blockB = new TestBlock('block-b', []);

    blockA.addChild(blockB);
    blockB.addChild(blockA);

    const result = blockA.toJson();

    expect(result).toEqual({
      id: 'block-a',
      name: 'test-block',
      type: 'test-type',
      children: [
        {
          id: 'block-b',
          name: 'test-block',
          type: 'test-type',
          children: [
            {
              id: 'block-a',
              name: 'test-block',
              type: 'test-type',
              children: [],
              circularReference: true,
            },
          ],
        },
      ],
    });
  });

  it('should gracefully handle complex circular reference chain without stack overflow', () => {
    const blockA = new TestBlock('block-a', []);
    const blockB = new TestBlock('block-b', []);
    const blockC = new TestBlock('block-c', []);

    blockA.addChild(blockB);
    blockB.addChild(blockC);
    blockC.addChild(blockA);

    const result = blockA.toJson();

    expect(result).toEqual({
      id: 'block-a',
      name: 'test-block',
      type: 'test-type',
      children: [
        {
          id: 'block-b',
          name: 'test-block',
          type: 'test-type',
          children: [
            {
              id: 'block-c',
              name: 'test-block',
              type: 'test-type',
              children: [
                {
                  id: 'block-a',
                  name: 'test-block',
                  type: 'test-type',
                  children: [],
                  circularReference: true,
                },
              ],
            },
          ],
        },
      ],
    });
  });

  it('should gracefully handle self-referencing block without stack overflow', () => {
    const block = new TestBlock('self-ref', []);
    block.addChild(block);

    const result = block.toJson();

    expect(result).toEqual({
      id: 'self-ref',
      name: 'test-block',
      type: 'test-type',
      children: [
        {
          id: 'self-ref',
          name: 'test-block',
          type: 'test-type',
          children: [],
          circularReference: true,
        },
      ],
    });
  });

  it('should handle deep chain without circular reference', () => {
    const blockA = new TestBlock('block-a', []);
    const blockB = new TestBlock('block-b', []);
    const blockC = new TestBlock('block-c', []);

    blockA.addChild(blockB);
    blockB.addChild(blockC);

    const result = blockA.toJson();

    expect(result).toEqual({
      id: 'block-a',
      name: 'test-block',
      type: 'test-type',
      children: [
        {
          id: 'block-b',
          name: 'test-block',
          type: 'test-type',
          children: [
            {
              id: 'block-c',
              name: 'test-block',
              type: 'test-type',
              children: [],
            },
          ],
        },
      ],
    });
  });
});
