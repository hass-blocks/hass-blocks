export class Queue<T> {
  private data: T[] = [];

  public push(item: T) {
    this.data.push(item);
  }

  public pop(): T | undefined {
    const popped = this.data.shift();
    return popped;
  }

  public get length() {
    return this.data.length;
  }
}
