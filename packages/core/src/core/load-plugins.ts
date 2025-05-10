import type { IBlocksPlugin, IPluginArgs } from '@types';

interface LoadPluginsConfig extends IPluginArgs {
  plugins: IBlocksPlugin[];
}

export const loadPlugins = async (args: LoadPluginsConfig) => {
  const { plugins, ...pluginConfig } = args;

  const { events } = pluginConfig;

  events.emit('load-plugins-started');

  const loadedPlugins = await plugins.reduce<Promise<string[]>>(
    async (loadedPluginsPromise, plugin) => {
      const loadedPlugins = await loadedPluginsPromise;
      events.emit('load-plugin-started', {
        name: plugin.name,
      });
      await plugin.load(pluginConfig);
      events.emit('load-plugin-finished', {
        name: plugin.name,
      });
      return [...loadedPlugins, plugin.name];
    },
    Promise.resolve([]),
  );

  events.emit('load-plugins-finished', {
    plugins: loadedPlugins,
  });
};
