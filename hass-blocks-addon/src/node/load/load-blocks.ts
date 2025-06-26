import { initialiseBlocks } from '@hass-blocks/core';
import { websocketServer } from '@hass-blocks/websocket-plugin';
import { loadAutomations } from './load-automations.ts';

export const loadBlocks = async (
  folder: string,
  websocketHost?: string,
  websocketPort?: number,
) => {
  const plugins =
    websocketPort && websocketHost
      ? [
          websocketServer({
            host: websocketHost,
            port: websocketPort,
            cors: {
              origin: '*',
              methods: ['GET', 'POST'],
            },
          }),
        ]
      : [];

  const { registry } = await initialiseBlocks({ plugins });

  const automations = await loadAutomations(folder);

  await registry.registerAutomation(...automations);
};
