import type { BaseEvent } from './base-event.ts';

/**
 * This event is fired after a theme has been set or reloaded. It contains no additional data.
 *
 * @public
 */
export type ThemesUpdatedEvent = BaseEvent<'themes_updated'>;
