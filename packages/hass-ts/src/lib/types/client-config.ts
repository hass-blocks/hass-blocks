import type { Logger } from './logger.ts';

/**
 * Connection configuration for the Home Assistant client
 *
 * @public
 */
export interface HassConfig {
  /**
   * Home Assistant host
   */
  host: string;

  /**
   * Home Assistant port
   */
  port: number;

  /**
   * Home assistant token
   */
  token: string;

  /**
   * Path to Websocket API
   */
  websocketPath: string;

  /**
   * Path to HTTP API
   */
  httpPath: string;

  /**
   * A logger instance
   */
  logger?: Logger;
}
