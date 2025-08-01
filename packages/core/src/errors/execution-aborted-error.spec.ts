import { describe, expect, it } from 'vitest';
import { ExecutionAbortedError } from './execution-aborted-error.ts';
import { HassBlocksError } from './hass-blocks-error.ts';

describe('ExecutionAbortedError', () => {
  it('should extend HassBlocksError', () => {
    const error = new ExecutionAbortedError('test-execution');

    expect(error).toBeInstanceOf(HassBlocksError);
  });

  it('should create error with formatted message', () => {
    const name = 'my-automation';
    const error = new ExecutionAbortedError(name);

    expect(error.message).toBe("Execution 'my-automation' was aborted");
  });
});
