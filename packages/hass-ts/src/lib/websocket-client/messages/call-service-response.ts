/**
 * @public
 *
 * Response from the websocket API when a service is called
 */
export interface CallServiceResponse {
  /**
   * The Home Assistant context (See {@link https://data.home-assistant.io/docs/context/})
   */
  context: {
    id: string;
    parent_id: null | string;
    user_id: string;
  };

  /**
   * Response data from the service action. Always present, but
   * will be `null` if the action does not support response data
   */
  response: null | Record<string, unknown>;
}
