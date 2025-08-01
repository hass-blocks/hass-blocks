import { afterEach, describe, expect, it, vi } from 'vitest';
import { getEnv } from './get-env.ts';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('getEnv', () => {
  it('should return environment variable value when it exists', () => {
    vi.stubGlobal('process', {
      env: {
        TEST_VAR: 'test-value',
      },
    });

    const result = getEnv('TEST_VAR');

    expect(result).toBe('test-value');
  });

  it('should throw error when environment variable does not exist', () => {
    vi.stubGlobal('process', {
      env: {},
    });

    expect(() => getEnv('NON_EXISTENT_VAR')).toThrow(
      'Environment variable NON_EXISTENT_VAR not set',
    );
  });
});
