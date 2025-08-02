import { afterEach, describe, expect, it, vi } from 'vitest';
import { waitInMinutes, waitInSeconds } from './wait.ts';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('waitInSeconds', () => {
  it('should use setTimeout not setInterval to avoid memory leaks', async () => {
    vi.useFakeTimers();
    const setTimeoutSpy = vi.spyOn(global, 'setTimeout');
    const setIntervalSpy = vi.spyOn(global, 'setInterval');

    waitInSeconds(2);

    expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 2000);
    expect(setIntervalSpy).not.toHaveBeenCalled();

    vi.useRealTimers();
  });
});

describe('waitInMinutes', () => {
  it('should use setTimeout not setInterval to avoid memory leaks', async () => {
    vi.useFakeTimers();
    const setTimeoutSpy = vi.spyOn(global, 'setTimeout');
    const setIntervalSpy = vi.spyOn(global, 'setInterval');

    waitInMinutes(1);

    expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 60000);
    expect(setIntervalSpy).not.toHaveBeenCalled();

    vi.useRealTimers();
  });
});
