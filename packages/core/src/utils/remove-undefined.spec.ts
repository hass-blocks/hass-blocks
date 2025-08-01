import { describe, expect, it } from 'vitest';
import { removeUndefined } from './remove-undefined.ts';

describe('removeUndefined', () => {
  it('should remove undefined values from object', () => {
    const input = {
      a: 'value1',
      b: undefined,
      c: 'value2',
      d: undefined,
    };

    const result = removeUndefined(input);

    expect(result).toEqual({
      a: 'value1',
      c: 'value2',
    });
  });

  it('should keep null values', () => {
    const input = {
      a: 'value1',
      b: null,
      c: undefined,
    };

    const result = removeUndefined(input);

    expect(result).toEqual({
      a: 'value1',
      b: null,
    });
  });

  it('should keep zero values', () => {
    const input = {
      a: 0,
      b: undefined,
      c: '',
    };

    const result = removeUndefined(input);

    expect(result).toEqual({
      a: 0,
      c: '',
    });
  });

  it('should handle empty object', () => {
    const result = removeUndefined({});
    expect(result).toEqual({});
  });

  it('should handle object with only undefined values', () => {
    const input = {
      a: undefined,
      b: undefined,
    };

    const result = removeUndefined(input);
    expect(result).toEqual({});
  });
});
