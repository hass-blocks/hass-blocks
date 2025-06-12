import type { BaseEvent } from './base-event.ts';

/**
 * This event is fired when a user has been added.
 *
 * @public
 */
export type UserAddedEvent = BaseEvent<
  'user_added',
  {
    /**
     * Identification of the new user.
     */
    user_id: string;
  }
>;
