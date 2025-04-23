/**
 * @public
 *
 * Parameters for a request to the /api/logbook endpoint
 */
export interface GetLogbookParams {
  /**
   * Beginning of the time period you are requesting entries for
   */
  timestamp?: Date;

  /**
   * Filter logbook entries on a specific entity
   */
  entity?: string;

  /**
   * End of the time period you are requesting entries for
   */
  endTime?: Date;
}
