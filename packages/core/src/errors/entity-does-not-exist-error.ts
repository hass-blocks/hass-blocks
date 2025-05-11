import { HassBlocksError } from './hass-blocks-error.ts';

/**
 * @public
 */
export class EntityDoesNotExistError extends HassBlocksError {
  public constructor(
    public readonly id: string,
    public readonly path?: string,
    public override readonly cause?: unknown,
  ) {
    super(
      path
        ? `Entity '${id}' does not exist: ${path}`
        : `Entity '${id}' does not exist`,
      cause,
    );
  }

  public static RethrowWithNewPath(error: unknown, newPath: string) {
    if (error instanceof EntityDoesNotExistError) {
      const theError = new EntityDoesNotExistError(
        error.id,
        error.path ? `${error.path}.${newPath}` : newPath,
        error.cause ? error.cause : error,
      );

      throw theError;
    }
    throw error;
  }
}
