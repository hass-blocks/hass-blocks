import { Queue } from './queue.ts';

describe('the queue', () => {
  it('enqueue adds an item to the queue that can be returned with dequeue', () => {
    const queue = new Queue<number>();

    queue.push(10);

    const result = queue.pop();

    expect(result).toEqual(10);
  });

  it('when adding multiple items to the queue, it gets them back in FIFO order', () => {
    const queue = new Queue<number>();

    queue.push(10);
    queue.push(7);
    queue.push(3);

    const result1 = queue.pop();
    expect(result1).toEqual(10);

    const result2 = queue.pop();
    expect(result2).toEqual(7);

    const result3 = queue.pop();
    expect(result3).toEqual(3);
  });
});
