import { IBlocksPlugin, PluginArgs } from '../types/index.ts';

interface LoadPluginsConfig extends PluginArgs {
  plugins: IBlocksPlugin[];
}

export const loadPlugins = async (args: LoadPluginsConfig) => {
  const { plugins, ...pluginConfig } = args;

  const { events } = pluginConfig;

  events.emit({
    type: 'load-plugins-started',
  });

  const loadedPlugins = await plugins.reduce<Promise<string[]>>(
    async (loadedPluginsPromise, plugin) => {
      const loadedPlugins = await loadedPluginsPromise;
      events.emit({
        type: 'load-plugin-started',
        name: plugin.name,
      });
      await plugin.load(pluginConfig);
      events.emit({
        type: 'load-plugin-finished',
        name: plugin.name,
      });
      return [...loadedPlugins, plugin.name];
    },
    Promise.resolve([]),
  );

  events.emit({
    type: 'load-plugins-finished',
    plugins: loadedPlugins,
  });
};
