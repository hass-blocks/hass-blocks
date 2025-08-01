import { describe, expect, it } from 'vitest';
import { InitialStatesNotLoadedError } from './initial-states-not-loaded-error.ts';
import { HassBlocksError } from './hass-blocks-error.ts';

describe('InitialStatesNotLoadedError', () => {
  it('should extend HassBlocksError', () => {
    const error = new InitialStatesNotLoadedError();

    expect(error).toBeInstanceOf(HassBlocksError);
  });

  it('should create error with predefined message', () => {
    const error = new InitialStatesNotLoadedError();

    expect(error.message).toBe('Initial states were not loaded!');
  });
});
