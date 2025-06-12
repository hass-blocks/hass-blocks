import type { BaseEvent } from './base-event.ts';

/**
 * This event is fired when scenes have been reloaded and thus might have changed.
 *
 * @public
 */
export type SceneReloadedEvent = BaseEvent<'scene_reloaded'>;
