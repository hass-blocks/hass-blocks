import { render } from 'ink';
import type { EventBus } from './event-bus.ts';
import { Show } from '../show/index.ts';

/**
 * @public
 */
export const renderSimpleLog = (bus: EventBus, staticLog: boolean) => {
  render(<Show events={bus} staticLog={staticLog} />);
};
