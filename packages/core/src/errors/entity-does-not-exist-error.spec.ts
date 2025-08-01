import { describe, expect, it } from 'vitest';

import { EntityDoesNotExistError } from './entity-does-not-exist-error.ts';

describe('EntityDoesNotExistError', () => {
  it('should create error with id only', () => {
    const error = new EntityDoesNotExistError('light.living_room');

    expect(error.message).toBe("Entity 'light.living_room' does not exist");
    expect(error.id).toBe('light.living_room');
    expect(error.path).toBeUndefined();
    expect(error.cause).toBeUndefined();
  });

  it('should create error with id and path', () => {
    const error = new EntityDoesNotExistError(
      'light.living_room',
      'automation.test',
    );

    expect(error.message).toBe(
      "Entity 'light.living_room' does not exist: automation.test",
    );
    expect(error.id).toBe('light.living_room');
    expect(error.path).toBe('automation.test');
    expect(error.cause).toBeUndefined();
  });

  it('should create error with id, path, and cause', () => {
    const originalError = new Error('Original error');
    const error = new EntityDoesNotExistError(
      'light.living_room',
      'automation.test',
      originalError,
    );

    expect(error.message).toBe(
      "Entity 'light.living_room' does not exist: automation.test",
    );
    expect(error.id).toBe('light.living_room');
    expect(error.path).toBe('automation.test');
    expect(error.cause).toBe(originalError);
  });

  it('should rethrow EntityDoesNotExistError with new path when error has no existing path', () => {
    const originalError = new EntityDoesNotExistError('light.living_room');

    expect(() => {
      EntityDoesNotExistError.RethrowWithNewPath(
        originalError,
        'sequence.step1',
      );
    }).toThrow(EntityDoesNotExistError);

    try {
      EntityDoesNotExistError.RethrowWithNewPath(
        originalError,
        'sequence.step1',
      );
    } catch (error) {
      const thrownError = error as EntityDoesNotExistError;
      expect(thrownError.id).toBe('light.living_room');
      expect(thrownError.path).toBe('sequence.step1');
      expect(thrownError.cause).toBe(originalError);
    }
  });

  it('should rethrow EntityDoesNotExistError with concatenated path when error has existing path', () => {
    const originalError = new EntityDoesNotExistError(
      'light.living_room',
      'automation.test',
    );

    try {
      EntityDoesNotExistError.RethrowWithNewPath(
        originalError,
        'sequence.step1',
      );
    } catch (error) {
      const thrownError = error as EntityDoesNotExistError;
      expect(thrownError.id).toBe('light.living_room');
      expect(thrownError.path).toBe('automation.test.sequence.step1');
      expect(thrownError.cause).toBe(originalError);
    }
  });

  it('should rethrow EntityDoesNotExistError preserving original cause when error has explicit cause', () => {
    const rootCause = new Error('Root cause');
    const originalError = new EntityDoesNotExistError(
      'light.living_room',
      'automation.test',
      rootCause,
    );

    try {
      EntityDoesNotExistError.RethrowWithNewPath(
        originalError,
        'sequence.step1',
      );
    } catch (error) {
      const thrownError = error as EntityDoesNotExistError;
      expect(thrownError.id).toBe('light.living_room');
      expect(thrownError.path).toBe('automation.test.sequence.step1');
      expect(thrownError.cause).toBe(rootCause);
    }
  });

  it('should rethrow non-EntityDoesNotExistError unchanged', () => {
    const originalError = new Error('Some other error');

    expect(() => {
      EntityDoesNotExistError.RethrowWithNewPath(
        originalError,
        'sequence.step1',
      );
    }).toThrow('Some other error');
  });
});
