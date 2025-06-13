import { vi } from 'vitest';
import { when } from 'vitest-when';
import { mock } from 'vitest-mock-extended';

import type { Logger } from '@types';
import { WebsocketClient } from '@websocket-client';
import { HomeAssistant } from '@home-assistant';
import { RestClient } from '@rest-client';

import { initialiseHass } from './initialise-hass.ts';
import { getLogger } from './get-logger.ts';

vi.mock('@home-assistant');
vi.mock('@websocket-client');
vi.mock('@rest-client');
vi.mock('./get-logger.js');

describe('initialiseClient', () => {
  it('correctly initialises the websocket client, wires it into the client and returns the client', async () => {
    const host = 'host';
    const port = 1234;
    const token = 'token';
    const websocketPath = '/api/websocket';
    const httpPath = '/api';

    const mockWebsocketClient = mock<WebsocketClient>();
    const mockRestClient = mock<RestClient>();

    const logger = mock<Logger>();

    when(getLogger).calledWith(logger).thenReturn(logger);

    when(vi.mocked(WebsocketClient))
      .calledWith(host, port, websocketPath, token, logger)
      .thenReturn(mockWebsocketClient);

    when(vi.mocked(RestClient))
      .calledWith(host, port, httpPath, token, logger)
      .thenReturn(mockRestClient);

    const mockClient = mock<HomeAssistant>();

    when(vi.mocked(HomeAssistant))
      .calledWith(mockWebsocketClient, mockRestClient, logger)
      .thenReturn(mockClient);

    const client = await initialiseHass({
      host,
      port,
      httpPath,
      websocketPath,
      token,
      logger,
    });

    expect(mockWebsocketClient.init).toHaveBeenCalled();
    expect(client).toBe(mockClient);
  });
});
