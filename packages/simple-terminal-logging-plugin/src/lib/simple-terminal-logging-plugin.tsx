import { IBlocksPlugin, IPluginArgs } from '@hass-blocks/blocks';
import { render } from 'ink';
import { ExecutionList } from './components/index.ts';

class SimpleTerminalLoggingPlugin implements IBlocksPlugin {
  name = 'simple-terminal-view-plugin';

  public async load({ events }: IPluginArgs) {
    render(<ExecutionList eventBus={events} />);
  }
}

/**
 * @public
 *
 * Adds a terminal renderer that logs out lifecycle events that are received
 */
export const logLifecycleEvents = (): IBlocksPlugin => {
  return new SimpleTerminalLoggingPlugin();
};
