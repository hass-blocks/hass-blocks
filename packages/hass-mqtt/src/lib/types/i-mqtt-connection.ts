/**
 * @public
 *
 * An instantiated MQTT connection to Home Assistant
 */
export interface IMQTTConnection {
  /**
   * Publish some data to a topic
   *
   * @param topic - The key of the topic to publish to
   * @param data - The data to publish
   */
  subscribe(topic: string, handler: (message: string) => void): Promise<void>;

  /**
   *  Subscribe to a specific MQTT topic
   *
   * @param topic - The topic to subscribe to
   * @param handler - Will be called when there is a new message on the topic
   */
  publish(topic: string, data: Record<string, unknown> | string): Promise<void>;
}
