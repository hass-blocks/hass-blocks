/**
 * Cors options for the websocket server
 *
 * @public
 */
export interface CorsOptions {
  /**
   * The origin that is allowed to communicate with this server
   */
  origin: string;
  /**
   * A list of allowed methods that can communicate with this server
   */
  methods: string[];
}
