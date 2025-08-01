import { describe, expect, it } from 'vitest';
import { AssertionError } from './assertion-error.ts';
import { HassBlocksError } from './hass-blocks-error.ts';

describe('AssertionError', () => {
  it('should extend HassBlocksError', () => {
    const error = new AssertionError('test message');

    expect(error).toBeInstanceOf(HassBlocksError);
  });

  it('should create error with message', () => {
    const message = 'Assertion failed';
    const error = new AssertionError(message);

    expect(error.message).toBe(message);
  });
});
