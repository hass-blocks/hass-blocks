/**
 * @public
 *
 * Logger interface for logging messages
 */
export interface ILogger {
  /**
   * An extreme level of detail - often used for tracing flow control and
   * api calls
   *
   * @param message - log message
   */
  trace(message: string): void;

  /**
   * A level of detail that is useful for debugging
   *
   * @param message - log message
   */
  debug(message: string): void;

  /**
   * Log messages about the normal operation of the framework
   *
   * @param message - log message
   */
  info(message: string): void;

  /**
   * Warnings about potential issues
   *
   * @param message - log message
   */
  warn(message: string): void;

  /**
   * Something has gone wrong
   *
   * @param message - log message
   */
  error(message: string): void;

  /**
   * Fatal errors normally result in termination of the application
   *
   * @param message - log message
   */
  fatal: (message: string) => void;
}
