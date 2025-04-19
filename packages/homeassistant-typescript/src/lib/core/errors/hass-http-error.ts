import { HassTsError } from './hass-ts-error.ts';

export class HassHttpError extends HassTsError {
  constructor(
    public readonly code: number,
    message: string,
  ) {
    super(message);
  }
}
