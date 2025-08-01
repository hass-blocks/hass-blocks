import { describe, expect, it, vi } from 'vitest';
import { mapAsync } from './map-async.ts';

describe('mapAsync', () => {
  it('should execute callback for each item in array', async () => {
    const callback = vi.fn().mockResolvedValue(undefined);
    const array = ['item1', 'item2', 'item3'];

    await mapAsync(array, callback);

    expect(callback).toHaveBeenCalledTimes(3);
    expect(callback).toHaveBeenCalledWith('item1');
    expect(callback).toHaveBeenCalledWith('item2');
    expect(callback).toHaveBeenCalledWith('item3');
  });

  it('should handle undefined array', async () => {
    const callback = vi.fn().mockResolvedValue(undefined);

    await mapAsync(undefined, callback);

    expect(callback).not.toHaveBeenCalled();
  });
});
