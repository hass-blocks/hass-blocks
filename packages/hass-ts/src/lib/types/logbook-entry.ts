/**
 * @public
 *
 * An entry in the Home Assistant logbook
 */
export interface LogBookEntry {
  /**
   * The user (if any) responsible for this change.
   */
  context_user_id: string | null;
  /**
   * The integration or domain that generated the entry (e.g. light); corresponds to your type’s context_domain.
   */
  domain: string;
  /**
   *The entity this entry refers to (e.g. light.kitchen).
   */
  entity_id: string;
  /**
   * A human-readable description of what happened (“turned on”, etc.); corresponds to your type’s state.
   */
  message: string;
  /**
   *  Friendly name of the entity.
   */
  name: string;

  /**
   * ISO-8601 timestamp of when the event occurred.
   */
  when: string;
}
