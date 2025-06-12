/**
 * A logger
 *
 * @public
 */
export interface Logger {
  /**
   * Trace level logging messages. For those that want to be drowning in logs
   *
   * @param message - The message to log
   */
  trace: (message: string) => void;

  /**
   * Debug logs - often things like network requests
   *
   * @param message - The message to log
   */
  debug: (message: string) => void;

  /**
   * Logs about the normal operation of the system
   *
   * @param message - The message to log
   */
  info: (message: string) => void;

  /**
   * Something might have gone wrong here, but we can't be sure
   *
   * @param message - The message to log
   */
  warn: (message: string) => void;

  /**
   * Something has gone wrong!
   *
   * @param message - The message to log
   */
  error: (message: string) => void;

  /**
   * Something has gone wrong and it caused the application to crash
   *
   * @param message - The message to log
   */
  fatal: (message: string) => void;
}
