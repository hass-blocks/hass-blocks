import type { IBlocksPlugin, IPluginArgs } from '@hass-blocks/core';
import { render } from 'ink';
import { AutomationList } from './components/automation-list/automation-list.tsx';

class TerminalUiPlugin implements IBlocksPlugin {
  name = 'simple-terminal-view-plugin';

  public async load({ client, events }: IPluginArgs) {
    render(<AutomationList hass={client} bus={events} />);
  }
}

/**
 * @public
 *
 * Adds a simple TUI interface to Hass Blocks
 */
export const terminalUi = (): IBlocksPlugin => {
  return new TerminalUiPlugin();
};
