import { describe, expect, it } from 'vitest';
import { BlockValidationError } from './block-validation-error.ts';

describe('BlockValidationError', () => {
  it('should extend Error', () => {
    const error = new BlockValidationError('test message');

    expect(error).toBeInstanceOf(Error);
  });

  it('should create error with message', () => {
    const message = 'Block validation failed';
    const error = new BlockValidationError(message);

    expect(error.message).toBe(message);
  });
});
