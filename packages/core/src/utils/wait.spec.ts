import { afterEach, describe, expect, it, vi } from 'vitest';
import { waitInMinutes, waitInSeconds } from './wait.ts';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('waitInSeconds', () => {
  it('should wait for specified number of seconds', async () => {
    vi.useFakeTimers();
    const setIntervalSpy = vi.spyOn(global, 'setInterval');

    waitInSeconds(2);

    expect(setIntervalSpy).toHaveBeenCalledWith(expect.any(Function), 2000);

    vi.useRealTimers();
  });
});

describe('waitInMinutes', () => {
  it('should wait for specified number of minutes', async () => {
    vi.useFakeTimers();
    const setIntervalSpy = vi.spyOn(global, 'setInterval');

    waitInMinutes(1);

    expect(setIntervalSpy).toHaveBeenCalledWith(expect.any(Function), 60000);

    vi.useRealTimers();
  });
});
