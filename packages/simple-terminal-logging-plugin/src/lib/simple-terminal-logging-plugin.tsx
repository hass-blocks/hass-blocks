import { IBlocksPlugin, IPluginArgs } from '@hass-blocks/blocks';
import { render } from 'ink';
import { ExecutionLines } from './components/execution-lines/execution-lines.tsx';

class SimpleTerminalLoggingPlugin implements IBlocksPlugin {
  name = 'simple-terminal-view-plugin';

  public async load({ events }: IPluginArgs) {
    render(<ExecutionLines eventBus={events} />);
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
