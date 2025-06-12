import type { BaseEvent } from './base-event.ts';

/**
 * This event is fired when a user has been removed.
 *
 * @public
 */
export type UserRemovedEvent = BaseEvent<
  'user_removed',
  {
    /**
     * Identification of the removed user.
     */
    user_id: string;
  }
>;
