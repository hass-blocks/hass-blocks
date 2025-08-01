import { describe, expect, it } from 'vitest';
import { md5 } from './md5.ts';

describe('md5', () => {
  it('should generate MD5 hash for given string', () => {
    const result = md5('hello world');

    expect(result).toBe('5eb63bbbe01eeed093cb22bb8f5acdc3');
  });

  it('should generate different hashes for different strings', () => {
    const hash1 = md5('test1');
    const hash2 = md5('test2');

    expect(hash1).not.toBe(hash2);
  });
});
