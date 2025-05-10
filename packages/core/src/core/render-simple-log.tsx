import { render } from 'ink';

import { Show } from '@show';

import type { EventBus } from './event-bus.ts';

/**
 * @public
 */
export const renderSimpleLog = (bus: EventBus, staticLog: boolean) => {
  render(<Show events={bus} staticLog={staticLog} />);
};
