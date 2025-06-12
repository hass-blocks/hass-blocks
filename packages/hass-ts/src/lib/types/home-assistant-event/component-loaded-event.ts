import type { BaseEvent } from './base-event.ts';

/**
 * This event is fired when a new integration has been loaded and initialized.
 *
 * @public
 */
export type ComponentLoadedEvent = BaseEvent<
  'component_loaded',
  {
    /**
     * Domain of the integration that has just been initialized. Example: light.
     */
    component: string;
  }
>;
