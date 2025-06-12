import type { BaseEvent } from './base-event.ts';

/**
 * Fired when an entry is written to the logbook
 *
 * @public
 */
export type LogbookEntryEvent = BaseEvent<
  'logbook_entry',
  {
    /**
     * Name of the entity. Example: Kitchen light.
     */
    name: string;
    /**
     * Message. Example: was turned on
     */
    message: string;
    /**
     * Domain of the entry. Example: light
     */
    domain?: string;

    /**
     * Identifier of the entity that was logged
     */
    entity_id?: string;
  }
>;
