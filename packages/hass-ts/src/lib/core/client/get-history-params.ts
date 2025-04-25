/**
 * @public
 *
 * Configuration parameters for a request to the `/api/history` endpoint
 * @see {@link https://developers.home-assistant.io/docs/api/rest/} for more information
 */
export interface GetHistoryParams {
  /**
   * Beginning of the history period - defaults to 1 day before the request
   */
  timestamp?: Date;

  /**
   * Filter response on one more entities
   */
  filterEntityId: string[];

  /**
   * only return last_changed and last_updated attributes for states
   * other than the first and last state in the period (much faster)
   */
  minimalResponse?: boolean;

  /**
   * Skip returning attributes from the database (much faster)
   */
  noAttributes?: boolean;

  /**
   * Only return significant state changes
   */
  significantChangesOnly?: boolean;
}
